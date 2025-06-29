import React, { useState } from 'react';


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert(" Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };

  const handleCopy = () => {
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpace = () => {
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert("Extra Space Removed!", "success");
  };

  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 style={{backgroundColor: props.mode===`dark`?`#042743`:`white`}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{
        backgroundColor: props.mode === `dark` ? `grey` : `white`, color: props.mode===`dark` ? `white` : `#042743`}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>

      </div>
      <div className="container my-3"style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}> 
        <h1>Your Text Summary</h1>
        <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to Preview it here"}</p>
      </div>
    </>
  );
}
