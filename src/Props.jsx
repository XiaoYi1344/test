import React from 'react';

// Greeting nhận prop "name"
function Greeting({ name }) {
  return <h1>Yo, {name}!</h1>;
}

// CustomInput nhận mọi prop và truyền vào input
function CustomInput(props) {
  return <input {...props} />;
}

// CustomInputR tách riêng onChange, nhưng không dùng đến
function CustomInputR({ onChange, ...rest }) {
  return <input {...rest} />;
}

// CustomInputO đổi tên prop onChange => onHandleChange và gán vào input
function CustomInputO({ onChange: onHandleChange, ...rest }) {
  return <input {...rest} onChange={onHandleChange} />;
}

// Layout dùng children
function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

// Hàm xử lý sự kiện
function handleChange(e) {
  console.log("Input changed:", e.target.value);
}

function someFunction(e) {
  console.log("CustomInputO changed:", e.target.value);
}

// Component chính
function PropsExample() {
  return (
    <div>
      <Greeting name="Sara" />

      <CustomInput type="text" placeholder="Enter text" onChange={handleChange} />

      <CustomInputR
        type="text"
        placeholder="Enter text"
        onChange={handleChange}
        className="input"
      />

      <CustomInputO
        onChange={someFunction}
        type="text"
        placeholder="Enter text"
      />

      <Layout>
        <h1>Yo, world!</h1>
      </Layout>
    </div>
  );
}

export default PropsExample;
