import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // có thể là ./App là app.js còn có thể là ./App.jsx
import Clock from './Clock.jsx';
import Props from './Props.jsx';
import PropTypes from './PropTypes.jsx';
import Greeting from './Greeting.jsx';
import Mail from './Mail.jsx';
import Mail2 from './Mail2.jsx';
import LoginStatus from './LoginStatus';
import Warning from './Warning.jsx';
import Blog from './Blog.jsx';
import Blog2 from './Blog2.jsx';
import Blog3 from './Blog3.jsx';
import Product from './Product.jsx';
import Form from './Form.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Lifting from './Lifting.jsx';
import Composition from './Composition.jsx';
import Inher from './Inher.jsx';
import reportWebVitals from './reportWebVitals';
const messages = ["React", "Re: React", "Re:Re: React"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <hr/>
    <Clock/>
    <hr/>
    <Props/>
    <hr/>
    <PropTypes/>
    <hr/>
    <Greeting/>
    <hr/>
    <Mail/>
    <hr/>
    <Mail2 unreadMessages={messages} />
    <hr/>
    <LoginStatus isLoggedIn={true} />
    <hr/>
    <Warning/>
    <hr/>
    <Blog/>
    <hr/>
    <Blog2/>
    <hr/>
    <Blog3/>
    <hr/>
    <Product/>
    <hr/>
    <h1>Form</h1>
    <Form/>
    <Form2/>
    <Form3/>
    <hr/>
    <Lifting/>
    <hr/>
    <Composition/>
    <hr/>
    <Inher/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // const element = <h1>Yo, world!</h1>;
// // root.render(element);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Lần đầu
// let element = <h1>Yo, world!</h1>;
// root.render(element);

// // Cập nhật
// element = <h1>Yo, React!</h1>;
// root.render(element);

