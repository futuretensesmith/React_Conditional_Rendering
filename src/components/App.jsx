import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);
// replaced by ternary operator
// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }
//using ternary operator in App(). React requires
//expressions and not conditons. able to get logic of conditonal statement
//but expressed like an expression through ternary operator
//condition ? do if true : do if false
// below askes-- isLoggedIn true if yes display hello if not display Login component
function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
