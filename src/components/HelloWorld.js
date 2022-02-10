import React from "react";

const HelloWorld = ({ name }) => {
  if (name) {
    return <h1>Hello, {name}</h1>;
  } else {
    return <h1>Hey, stranger</h1>;
  }
};

export default HelloWorld;
