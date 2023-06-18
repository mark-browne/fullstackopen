import React from "react";


const Header = (props) => {
  return (
      <p>this is course {props.name}</p>
  )
}

const Content = (props) => {
  return (
      <ul>
        {props.parts.map( part => (<Part name={part.name} id={part.id}/>) )}
      </ul>
  )
}

const Part = (props) => {
  return (
      <li key={props.id}>{props.name}</li>
  )
}

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name}></Header>
      <Content parts={props.course.parts}/>
    </>
  );
};

export default Course;
