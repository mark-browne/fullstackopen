import React from "react";


const Header = (props) => {
  return (
      <p>this is course {props.name}</p>
  )
}

const Content = (props) => {
  return (
       <>
        {props.parts.map( part => <Part key={part.id} part={part}/>)}
       </>
  )
}

const Part = (props) => {
  return (
      <li>{props.part.name} {props.part.exercises}</li>
  )
}

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name}></Header>
      <ul>
      <Content parts={props.course.parts}/>
      </ul>
    </>
  );
};

export default Course;
