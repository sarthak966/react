// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import TextForm from "./components/TestForm";
import Alerts from "./components/Alerts";
import { useState } from 'react';
// let a = "<b>sarthak</b>" ;
function App() {


  let st1 = {
    color: 'black'
  }
  let st2 = {
    color: 'white'
  }
  const [btnC, cb] = useState("primary");
  const [mode, changeMode] = useState("light");
  function toggleFunc() {
    //ambient fixing
    let box = document.getElementById("myBox");
    box.style.boxShadow = "";
    box.style.border = "1px solid black";

    let btns = document.getElementsByClassName("myBtn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].style.boxShadow = "";
    }

    let text = document.getElementsByClassName('text');
      for(let i =0;i<text.length;i++){
      text[i].style.textShadow = "";
      }

    if (mode === "light") {
      changeMode("dark");
      cb("secondary");
      document.body.style.backgroundColor = "black";
      showAlert("Activated Dark mode", "successful");
      ambientC("Activate");
    } else {
      changeMode("light");
      cb("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Activated light mode", "successful");
      ambientC("Activate");
    }
  }


  // alrts functions
  const [alerts, setAlerts] = useState(null);

  function showAlert(message, type) {
    setAlerts({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlerts(null);
    }, 1500);
  }

  const [ambientM, ambientC] = useState("Activate");
  function ambient() {
    if (ambientM === "Activate") {
      let text = document.getElementsByClassName('text');
      for(let i =0;i<text.length;i++){
      text[i].style.textShadow = "5px 5px 10px aqua";
      }
      let box = document.getElementById("myBox");
      box.style.boxShadow = "1px 1px 10px 10px white";
      box.style.border = "none";
      changeMode("dark");
      cb("secondary");
      document.body.style.backgroundColor = "black";
      let btns = document.getElementsByClassName("myBtn");
      for (let i = 0; i < btns.length; i++) {
        btns[i].style.boxShadow = "1px 1px 10px 10px rgb(72, 115, 235)";
      }
      ambientC("Deactivate");
    } else {
      let text = document.getElementsByClassName('text');
      for(let i =0;i<text.length;i++){
        text[i].style.textShadow = "";
        }
      let box = document.getElementById("myBox");
      box.style.boxShadow = "";
      box.style.border = "1px solid black";

      let btns = document.getElementsByClassName("myBtn");
      for (let i = 0; i < btns.length; i++) {
        btns[i].style.boxShadow = "";
      }
      changeMode("light");
      cb("primary");
      document.body.style.backgroundColor = "white";
      ambientC("Activate");
    }

  }


  return (
    <>



      <NavBar title="TextUtils" aname="sarthak" toggleMode={toggleFunc} bg={mode} btn={btnC} ambient={ambient} ambientBt = {ambientM} ></NavBar>
      <Alerts type="Warning" alerts={alerts}></Alerts>
      <div className="container">
        <TextForm color={mode === 'light' ? st1 : st2} ></TextForm>
      </div>

    </>
  );
}

export default App;
