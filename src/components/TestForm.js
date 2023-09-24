import React , {useState} from 'react';
// import PropTypes from 'prop-types';
export default function TextForm(props){
    const [text , updateText] = useState("This is a text");

    // const[modes , changeMode] = useState({
    //     backgroundColor:'white',
    //     color:'black'
    // });

    // const[btnText , changeText] = useState("Dark mode")

    // function mode(){
    //     if(modes.color === "white"){
    //         changeMode({
    //             backgroundColor:'white',
    //             color:'black'
    //         })
    //         changeText("Dark Mode");
    //     }else{
    //         changeMode({
    //             backgroundColor:'black',
    //         color:'white'
    //         })
    //         changeText("Light Mode");
    //     }
    // }

    function change(){
        if(text!==text.toUpperCase()){
        let newText = text.toUpperCase();
        // console.log(newText.reverse().join(""));
        updateText(newText);
        }else{
            let newText = text.toLowerCase();
        // console.log(newText.reverse().join(""));
            updateText(newText);
        }
    }

    function clear(){
        updateText("");
        // console.log(newText.reverse().join(""));
    }

    function changeHandler(event){
        updateText(event.target.value)

    }

    


    return(
        <>
        <form >
        <div className="form-group">
          
          <input type="text" className="form-control my-3"  aria-describedby="emailHelp" placeholder="Enter Text" value = {text} onChange={changeHandler} autoComplete='off' id = "myBox"/>
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        
        <button type="button" className="btn btn-primary mx-3 my-3 myBtn" onClick={change} >toggle Capitalize/Lower-Case</button>
        {/* <button type="button" className="btn btn-primary mx-3" onClick={change}>Capitalize</button> */}
        <button type="button" className="btn btn-primary mx-3 my-3 myBtn" onClick={props.copyHandle} >Copy Text</button>
        <button type="button" className="btn btn-primary myBtn mx-3 my-3" onClick={clear} >Clear</button>
      </form>
        
        <div id="prv">
            <h1 style={props.color} className = "my-4 text">Preview</h1>
            <h3 style={props.color} className='text'>Reverse</h3>
            <p style={props.color}>{text.split("").reverse().join("")===""?"Write Something":text.split("").reverse().join("")}</p>
            <h3 style={props.color} className='text'>Analyser</h3>
            <p style={props.color}>Word Count:{text.split(" ").length-1} Letter Count: {text.split(" ").join("").length}</p>
        </div>

        {/* <button type="button" className="btn btn-primary  my-8" onClick={mode}>{btnText}</button> */}

        </>


    );

}
