import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    const [preview, setPreview] = useState("");

    const handleOnChange = (event) => {
        // console.log("OnChange was triggered");
        setText(event.target.value)
        setPreview(text);
    }

    const handleUpClick = () => {
        //console.log("Up Click was triggered: "+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!","success")
        setPreview(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case!","success")
        setPreview(newText);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared!","success")
        setPreview(newText);
    }

    const handleInvertClick = () => {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] >= 'a' && text[i] <= 'z')
                newText = newText + text[i].toUpperCase();
            else if (text[i] >= 'A' && text[i] <= 'Z')
                newText = newText + text[i].toLowerCase();
            else
                newText = newText + text[i];
        }
        setText(newText)
        props.showAlert("Case is inverted!","success")
        setPreview(newText);
    }

    const handleReverseClick = () => {
        let newText = text.split(" ").reverse().join(" ");
        setText(newText)
        props.showAlert("Words are reversed!","success")
        setPreview(newText);
    }

    const handlePreviewClick = () => {
        setPreview(text);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} id="myTextBox" rows="8"></textarea>
                </div>
                <div className='row'>
                    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2 col-md-2" onClick={handleUpClick}>Change to UpperCase</button>
                    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2 col-md-2" onClick={handleLowClick}>Change to LowerCase</button>
                    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2 col-md-2" onClick={handleInvertClick}>Invert Case</button>
                    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2 col-md-2" onClick={handleReverseClick}>Reverse Text</button>
                    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2 col-md-2" onClick={handleClearClick}>Clear</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p>Estimated time to read the above text :<b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minutes</p>
                <h2 onClick={handlePreviewClick}>Preview Text</h2>
                <p>{text.length>0?preview:"Nothing to preview!"}</p>
            </div>
        </>
    )
}
