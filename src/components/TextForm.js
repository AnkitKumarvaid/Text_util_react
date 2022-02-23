import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpclick = () =>{
        // console.log('uppercase was clicked')
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange =(event) =>{
        // console.log('uppercase was clicked')
        setText(event.target.value)
    }


    const [text, setText] = useState(' Enter Text Here');

  return (
<>
    <h1> {props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value= {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button type="button" className="btn btn-primary" onClick={handleUpclick}>Button</button>
    </div>

     <div className='container my-3'>
      <h1>your text summary</h1>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
     </div>
</>

  )
}
