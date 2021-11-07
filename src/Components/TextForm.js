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
    function handlecopyclick() {
  
        var copyText = document.getElementById("myBox");
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        navigator.clipboard.writeText(copyText.value);
      }
    const handleclearclick = ()=>{
        var cleartext = document.getElementById("myBox")
        cleartext.value=" "
    }
    
    const handleOnchange = (event)=>{
        // console.log('Button was changed');
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    const pp = 'Entre yoUR Text here.'
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <div className="mx-7 my-2  ">
            <h2>{props.heading}</h2>
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="6" placeholder={pp} style={{backgroundColor: props.mode==='light'?'white':'#737373',color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <div className="container my-3">

            <button className="btn btn-primary mx-2" onClick={handleUPclick}>Click to make UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleLDclick}>Click to make lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handlecopyclick}>Copy your Text</button>
            <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear</button>
            </div>
            <h3>Your text Summary</h3>
            <p>Your text has {text.split(' ').length} words and {text.length} character.</p>
            <p>Your text takes {0.008 * text.split(' ').length} minutes to read.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

