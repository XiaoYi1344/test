import React from 'react';

function Button({ name, className }) {
  const handleClick = (event) => {
    console.log('Clicked!', event);
  };

  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {name} Button
    </button>
  );
}

function Layout({ left, right }) {
  return (
    <div className="layout">
      <div className="layout-left">{left}</div>
      <div className="layout-right">{right}</div>
    </div>
  );
}

function CompositionDemo() {
  return (
    <div>
      <h1>Composition Demo</h1>
      <Button name="Yellow" className="btn-yellow" />
      <Layout
        left={<Button name="Green" className="btn-green" />}
        right={<Button name="Red" className="btn-red" />}
      />
    </div>
  );
}

export default CompositionDemo;
