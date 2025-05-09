import React, { useState } from 'react'; // Thêm useState vào import

// Function to format the date
function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg'
};

const title = `<script>sendToken(localStorage.getItem("access_token"))</script>`;
const titleElement = <h1>{title}</h1>; // safe, plain text
const titleElement2 = <h1>&lt;script&gt;sendToken(localStorage.getItem("access_token"))&lt;/script&gt;</h1>;

const element1 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

const element = <h1>Hello, {formatName(user)}!</h1>;
const link = <a href="https://www.reactjs.org">React Website</a>;
const img = <img src={user.avatarUrl} alt="User Avatar" />;

const obj = <h1 className="greeting">Hello, world!</h1>;
const obj1 = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

// Không thể render trực tiếp trong jsx
const obj2 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!',
  },
};
// React.createElement để "biến" obj2 thành một phần tử thực
const obj2Element = React.createElement(
  obj2.type,
  { className: obj2.props.className },
  obj2.props.children
);

// Functional component Welcome
function Welcome(props) {
  return (
    <div>
      <h1>Yo, {props.name}!</h1>
      {props.age && <h2>Bạn {props.age} tuổi nè!</h2>} {/* Hiển thị tuổi nếu có */}
    </div>
  );
}

// Class component WelcomeB
class WelcomeB extends React.Component {
  render() {
    return <h1>Yo, {this.props.name}!</h1>;
  }
}

// Component nguyên bản
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

// B1: Tách component AVATAR
function Avatar(props) {
  return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />;
}

function CommentSA(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

// B2: Tách component UserInfo
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function CommentSU(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

function App() {
  // State để lưu trữ thông điệp
  const [message, setMessage] = useState('Yo, world!');

  // Hàm để cập nhật message
  const changeMessage = () => {
    if (message === 'Yo, world!') {
      setMessage('Yo, React!');
    } else {
      setMessage('Yo, world!');
    }
  };

  const author = {
    name: 'Harper Perez',
    avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg'
  };

  const commentText = 'This is a sample comment!';
  const commentDate = '2025-05-08';

  return (
    <div>
      {titleElement}
      {titleElement2}
      {element1}
      {element}
      {link}
      <br />
      {img}
      <br />
      {obj}
      {obj1}
      {obj2Element}
      <div>
        <h1>{message}</h1>
        <button onClick={changeMessage}>Change Message</button>
      </div>
      <div>
        <Welcome name="Harper" />
        <Welcome name="Perez" />
      </div>
      <div>
        <WelcomeB name="Hep" />
      </div>
      <div>
        <Welcome name="Sara" age={22} />
      </div>
      {/* Có thể tái sử dụng */}
      <div>
        <Welcome name="Sara" age={22} />
        <Welcome name="Helen" age={21} />
        <Welcome name="Alex" age={20} />
      </div>
      <div>
        <h2>Comment Component:</h2>
        <Comment author={author} text={commentText} date={commentDate} />
      </div>

      <div>
        <h2>CommentSA Component (with Avatar):</h2>
        <CommentSA author={author} text={commentText} date={commentDate} />
      </div>

      <div>
        <h2>CommentSU Component (with UserInfo):</h2>
        <CommentSU author={author} text={commentText} date={commentDate} />
      </div>

      <div>
        <h2>UserInfo Component (with Avatar):</h2>
        <UserInfo user={author} />
      </div>
    </div>
  );
}

export default App;
