import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Instructions = ()=>{
  return (<p>Welcome to the 3-pane coding view. We've started you off with a basic <u>React</u> project, but feel free to replace it with whatever suits your needs. You can write code separately across the panes or you can write JS and CSS inline in the <b>HTML</b> file.</p>)
}

const name = {
              title: 'papa',
              adjective: 'the best'
             };

const message = <h1>Hello {name.title}, you are {name.adjective}!!</h1>; //React element

const Welcome = (props) => {
  return <h1>Hello, {props.fname} {props.lname}!!</h1>;
}

function WelcomeAgain(props) {
  return (
    <div>
      <h1>Hello again, {props.fname} {props.lname}!!</h1>
    </div>
  )
}

const App = () => {
  return (
    <div>
      {message}
      <Welcome fname="Naaz" lname="Labana"/>
      <WelcomeAgain fname="Naaz" lname="Labana"/>
      <div className="App">
        <h1>Hello React!</h1>
        <Instructions/>
      </div>
    </div>
  )
}

const element = <Welcome fname="Naaz" lname="Labana"/>;

//ReactDOM.render(element, document.getElementById('root'));
//ReactDOM.render(message, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));
