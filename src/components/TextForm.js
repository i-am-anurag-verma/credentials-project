import React, {useState} from 'react';



export default function TextForm (props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to upperCase", "success")
    }

    const handleLoClick = () => {
        //console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase", "success")
    }

    const handleClearClick = () => {
        //console.log("Uppercase was clicked" + text)
        let newText = " ";
        setText(newText);
        props.showAlert("Text cleared", "success")
    }


    const handleOnChange = (event) => {
        console.log("on Change")
        setText(event.target.value)
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Text copied clipboard", "success")

    }

     const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
     }

    const [text, setText] = useState('Enter text here');
        
    return (
        <>
        <div className='container'style={{color:props.mode=== 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'?'grey':'white', color:props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove ExtraSpace</button>
        </div>
        <div className="container my-3" style={{color:props.mode=== 'dark'?'white':'black'}}>
            <h1>Your text summary here</h1>
            <p>{text.split(" ").length} word {text.length} character</p>
            <p>{0.08 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}
