import React from "react";

const Header = (props) => {
  return <p>this is course {props.name}</p>;
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Part = (props) => {
  return (
    <li>
      {props.part.name} {props.part.exercises}
    </li>
  );
};

const Total = (props) => {
  return (
    <p>
      total of exercises{" "}
      {props.parts.reduce((sum, part) => {
        return sum + part.exercises;
      }, 0)}
    </p>
  );
};

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name}></Header>
      <ul>
        <Content parts={props.course.parts} />
      </ul>
      <Total parts={props.course.parts} />
    </>
  );
};

export default Course;
