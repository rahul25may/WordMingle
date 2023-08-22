import React, {useState} from 'react'
import './style.css'

export default function TextForm(props) {
    // const btnstyle = {
    //     display: 'grid',
    //     gridautoColums:'auto',
    //     // grid:'auto / auto auto auto',
    // justifyContent: 'center'
    // }
    const [text, setText] = useState("");
    const handleUpClick = () =>{
        // console.log("Upper Case was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!","success")
    }

    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        console.log(newText)
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!","success")
    }

    const handleLwClick = () =>{
        // console.log("Lower Case was clicked" +  text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!","success")
    }

    const copyClick = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success")
    }

    const handlePaste = () =>{
        navigator.clipboard.readText().then((clipText) =>{
            setText(clipText);
        });
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    var textLen = text.length;
    function setWord(){
        // let textLen = text.length;
        if(textLen === 0){
            return 0;
        }
        else{

            return text.split(" ").length;
        }
    }
    const clearClick = ()=>{
        setText('');
        props.showAlert("Cleared!","success")
    }
  return (
    <>
    <div className="container-home">
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#181117':'white',color: props.mode==='dark'?'white':'#12323f'}} id="myBox" rows="8"></textarea>
        </div>
        <div className="btn-box divFlex">
        <div className="btnFlexBox">
        <button className="btn btn-primary btnSize" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
        <div className="btnFlexBox">
        <button className="btn btn-primary btnSize" onClick={handleLwClick}>Convert to LowerCase</button>
        </div>
        <div className="btnFlexBox">
        <button className="btn btn-primary btnSize" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="btnFlexBox">
        <button className="btn btn-primary btnSize" onClick={copyClick}>Copy to Clipboard</button>
        </div>
        <div className="btnFlexBox">
        <button className="btn btn-primary btnSize" onClick={handlePaste}>Paste to Clipboard</button>
        </div>
        <div className="btnFlexBox">
        <button className="btn btn-primary btnSize" onClick={clearClick}>Clear Text</button>
        </div>
        </div>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#12323f'}}>
        <h1 className='h1-Text'>Your Text Summary</h1>
        <p className='p-Text'>{setWord()} words and {text.length} characters</p>
        <p className='p-Text'>{setWord()*0.08} minutes read</p>
        <h2 className='my-3 h2-Text'>Preview</h2>
        <div className="preview-text">
        <p className='p-Text'>{text.length>0?text:"Enter something in text box above to preview it here"}</p>

        </div>
    </div>
    </div>
    </>
  )
}
