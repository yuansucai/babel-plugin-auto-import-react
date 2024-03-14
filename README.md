# babel-plugin-auto-import-react

## Examples

### Example 1

In
``` javascript
function App() {
  return (
    <div>123</div>
  )
}
```

Out
``` javascript
import React from 'react';
function App() {
  return (
    <div>123</div>
  )
}
```

### Example 2

In
``` javascript
import { useState, useEffect } from 'react';
function App() {
  const [name, setName] = useState('张三');
  useEffect(() => {
    setName('李四')
  }, []);
  return (
    <div>{name}</div>
  )
}
```

Out
``` javascript
import React, { useState, useEffect } from 'react';
function App() {
  const [name, setName] = useState('张三');
  useEffect(() => {
    setName('李四')
  }, []);
  return (
    <div>{name}</div>
  )
}
```