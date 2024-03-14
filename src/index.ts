import { declare } from '@babel/helper-plugin-utils';
import type { NodePath } from "@babel/traverse";
import type { Program, ImportDeclaration } from "@babel/types";

export default declare(api => {
  api.assertVersion(7);
  const { types } = api

  return {
    name: 'auto-import-react',
    visitor: {
      Program(path: NodePath<Program>) {
        let hasJSX = false;
        path.traverse({
          JSXElement() {
            hasJSX = true;
          },
        });
        if (!hasJSX || path.scope.hasBinding('React')) return;

        // 文件中包含 JSX
        let isImportReact = false;
        path.traverse({
          ImportDeclaration(importPath: NodePath<ImportDeclaration>) {
            const importNode: ImportDeclaration = importPath.node;
            if (!importNode.importKind || ['type', 'typeof'].includes(importNode.importKind) || importNode.source.value !== 'react' || isImportReact) return;
            isImportReact = true;
            // 有引入import react的语句，但是没有默认引入React
            importNode.specifiers.unshift(types.importDefaultSpecifier(types.identifier('React')));
          },
        });
        if (isImportReact) return;
        
        // 没有引入import react的语句，准备插入import react
        const importReactNode = types.importDeclaration(
          [types.importDefaultSpecifier(types.identifier('React'))],
          types.stringLiteral('react')
        )
        path.node.body.unshift(importReactNode);
      }
    },
  };
})