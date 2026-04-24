import React,{useState} from 'react';

export default function TextForm(props){
    const handleUpClick=()=>{
        console.log("upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
        //setText("you have clicked on handleUpclick")

    }
     const handleLowClick=()=>{
        console.log("Lower case was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        //setText("you have clicked on handleUpclick")
        props.showAlert("Converted to Lowercase!","success");

    }
    const handleInvClick=()=>{
        let newText=text.split('').map(c=>c==c.toLowerCase()?c.toUpperCase():c.toLowerCase()).join('');
        setText(newText);
        props.showAlert("Case Inversed!","success");
    }

    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleRemoveSpacesClick=()=>{
        let newText=text.split(/ \s+/).join(" ")//multiple space ko remove kar single space se join
        setText(newText);
        props.showAlert("Extra Spaces removed!","success")
    }
    const handleclrClick=()=>{
        console.log("clear text clicked");
        setText('');
        props.showAlert("Text cleared!","success")
        //setText("you have clicked on handleUpclick")

    }
     const handleOnChange=(event)=>{
        console.log("on change handled");/* iska yeh use hai ki jab 
        mein set text karu ab uske baad mein value change karu toh yeh activate hoga because
        i am trying to change and value =text hai neeche */
        setText(event.target.value);


    }
    const[text,setText]=useState("");
    //text="new text"   ---->wrong way to change state

    return(
    <>
    <div className='container'style={{color:props.mode==='light'?'black':'white'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        {/*<label for="myBox" className="form-label">Example textarea</label>
        ek curly braces js ke liye uske andar wala object ke liye neeche dekho */}
        <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button disabled={!text} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={!text} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={!text} className="btn btn-primary mx-2 my-1" onClick={handleInvClick}>Inverse</button>
        <button disabled={!text} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy</button>
        <button disabled={!text} className="btn btn-primary mx-2 my-1" onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
        <button disabled={!text} className="btn btn-primary mx-2 my-1" onClick={handleclrClick}>Clear Text</button>
    </div>
   { /*button click karne pe handle up clcik invoke ho
   125 words in 1 min read*/}
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter(word => word !== "").length}Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
</>
);
 
}