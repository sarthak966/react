import React from "react";
import PropTypes from 'prop-types';





export default function NavBar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.bg} bg-${props.bg}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.aname}</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/">Disabled</a>
      </li>
    </ul>
    <button type="button" className={`btn btn-${props.btn}`} onClick={props.toggleMode}>Primary</button>
    <button type="button" className={`btn btn-${props.btn} mx-3`} onClick = {props.ambient}>{props.ambientBt} Ambient Mode</button>
    
  </div>

  



</nav>

    );



}


NavBar.propTypes ={title: PropTypes.string,
    aname: PropTypes.string
    }

NavBar.defaultProps = {
    title:"set title",
    aname: "hello",
    mode:"light",
    btn:"primary"
}



