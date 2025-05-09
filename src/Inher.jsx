import React from 'react';

function Button({ className = '', children, onClick }) {
  const handleClick = (event) => {
    console.log('Clicked!', event);
  };

  return (
    <button className={`btn ${className}`} onClick={onClick || handleClick}>
      {children}
    </button>
  );
}

function InheritanceDemo() {
  return (
    <div>
      <h1>Composition Demo</h1>
      {/* Thay vì kế thừa, ta sử dụng composition để tạo button */}
      <Button className="btn-yellow">Yellow Button</Button>
    </div>
  );
}

export default InheritanceDemo;
