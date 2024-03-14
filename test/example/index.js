exports.example1 = `
function App() {
  return (
    <div>123</div>
  )
}`;

exports.example2 = `
import { useState, useEffect } from 'react';
import { useCallback } from 'react';
function App() {
  const [name, setName] = useState('张三');
  useEffect(() => {
    setName('李四');
  }, []);
  return (
    <div>{name}</div>
  );
}`;

exports.example3 = `
import React from 'react';
import _ from 'lodash';
function App() {
  return (
    <div>123</div>
  );
}`;