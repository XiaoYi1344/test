import React from 'react';
import PropTypes from 'prop-types';

// Một class để test instanceOf
class Message {
  constructor(text) {
    this.text = text;
  }
}

// Greeting Component đơn giản
function Greeting({ name }) {
  return <h1>Yo, {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string,
};


// Greeting Component Default
function GreetingD({ name }) {
    return <h1>Yo, {name}!</h1>;
}
  
GreetingD.defaultProps = {
    name: 'Stranger',
};

// MyComponent với tất cả loại prop kiểm thử
function MyComponent(props) {
  return (
    <div>
      <h2>MyComponent Test</h2>
      <p>optionalString: {props.optionalString}</p>
      <p>optionalNumber: {props.optionalNumber}</p>
      <p>optionalEnum: {props.optionalEnum}</p>
      <p>customProp: {props.customProp}</p>
    </div>
  );
}

MyComponent.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  optionalNode: PropTypes.node,
  optionalElement: PropTypes.element,
  optionalElementType: PropTypes.elementType,

  optionalMessage: PropTypes.instanceOf(Message),
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message),
  ]),

  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),

  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
  }),

  requiredFunc: PropTypes.func.isRequired,
  requiredAny: PropTypes.any.isRequired,

  customProp: function (props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`
      );
    }
  },

  customArrayProp: PropTypes.arrayOf(function (
    propValue,
    key,
    componentName,
    location,
    propFullName
  ) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        `Invalid prop \`${propFullName}\` supplied to \`${componentName}\`. Validation failed.`
      );
    }
  }),
};

function App() {
  return (
    <div>
      {/* Greeting */}
      <Greeting name="Sara" />
      <Greeting name={123} /> {/* Sẽ cảnh báo sai kiểu trong console */}

      {/* Greeting */}
      <GreetingD name="Tom" />
      <GreetingD name={221} /> 

      {/* MyComponent - truyền thử dữ liệu */}
      <MyComponent
        optionalString="Hello"
        optionalNumber={42}
        optionalEnum="Photos"
        optionalArray={[1, 2, 3]}
        optionalBool={true}
        optionalFunc={() => console.log('Hi')}
        optionalObject={{ a: 1 }}
        optionalNode={<span>Node here</span>}
        optionalElement={<div>Element</div>}
        optionalElementType="div"
        optionalMessage={new Message('Hi')}
        optionalUnion="mixed"
        optionalArrayOf={[1, 2, 3]}
        optionalObjectOf={{ a: 1, b: 2 }}
        optionalObjectWithShape={{ color: 'red', fontSize: 16 }}
        optionalObjectWithStrictShape={{ name: 'item', quantity: 5 }}
        requiredFunc={() => {}}
        requiredAny="Something"
        customProp="shouldmatchme"
        customArrayProp={['okmatchme', 'yesmatchme']}
      />
    </div>
  );
}

export default App;
