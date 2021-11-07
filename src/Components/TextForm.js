import React,{ useState } from 'react'

export default function TextForm(props) {
    const handleUPclick = ()=>{
        // console.log('Button was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }    
    const handleLDclick = ()=>{
        // console.log('Button was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnchange = (event)=>{
        // console.log('Button was changed');
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    const oldText = text
    return (
        <>
        <div className="container">
            <div className="mx-7 my-2  ">
            <h2>{props.heading}</h2>
            <label htmlFor="myBox" className="form-label font-weight-bold text-center">Textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="5"></textarea>
            </div>
            <div className="container my-3">

            <button className="btn btn-primary mx-2" onClick={handleUPclick}>Click to make UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleLDclick}>Click to make lowercase</button>
            </div>
            <h3>Your text Summary</h3>
            <p>Your text has {text.split(' ').length} words and {text.length} character.</p>
            <p>Your text takes {0.008 * text.split(' ').length} to read.</p>
            <h3>Preview</h3>
            <p>{oldText}</p>
        </div>
        </>
    )
}

