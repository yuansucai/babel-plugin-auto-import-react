// @ts-nocheck
import { describe, expect, it } from '@jest/globals';
import autoImportReactPlugin from '../src/index';
import { example1, example2, example3 } from './example';
const babel = require('@babel/core');

const transformOptions = {
  plugins: ['@babel/plugin-syntax-jsx', autoImportReactPlugin],
};

describe('Test auto import react', function () {
    it('Whether the introduction of "React" can be automatically completed, if no react products are introduced', function () {
      const { code } = babel.transform(example1, transformOptions);
      expect(code).toMatchSnapshot();
    });
    it('Whether the introduction of "React" can be automatically completed, if some react products', function () {
      const { code } = babel.transform(example2, transformOptions);
      expect(code).toMatchSnapshot();
    });
    it('If React is already introduced, no changes are made', function () {
      const { code } = babel.transform(example3, transformOptions);
      expect(code).toMatchSnapshot();
    });
});
