import React from 'react';
import { useState } from 'react';


export default function About(props){
//     const[myStyle,setMyStyle]=useState({

//     color:'black',
//     backgroundColor:'white'

// })
let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
    border:'1px solid'
  
}

    return(
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                        <div className="accordion" id="accordionExample">
                            <h2 className='my-3'>About Us</h2>
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                            </button>
                        </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle}>
                    TextUtils provides a simple and efficient way to analyze your text instantly. It allows users to perform operations like word count, character count, text transformation, and more with just a few clicks.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle}>
                    TextUtils is completely free to use. It offers instant statistics such as word count and character count for any given text. This makes it especially useful for writing content within word or character limits like assignments, essays, or posts.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle}>
                    TextUtils works smoothly across all modern web browsers including Chrome, Firefox, Edge, Safari, and others. It can be used for analyzing text from various sources such as blogs, documents, essays, and social media content.
                </div>
                </div>
                </div>
                 
        </div>
        </div>

    );
}