import React, { useState } from 'react'


export default function TextForm(props) {


  const [text, setText] = useState('Enter Text To Analyse');
  const [fWord, setFWord] = useState('')
  const [rWord, setRWord] = useState('')




  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value)
  }


  const handleUpClick = (ev) => {
    // setText("uppercase called")
    // console.log(text)
    // console.log(ev)

    const newText = text.toUpperCase();
    setText(newText)
  }


  const handleLoClick = (ev) => {
    // setText("uppercase called")
    // console.log(text)
    // console.log(ev)

    const newText = text.toLowerCase();
    setText(newText)
  }

  const handleFrClick = (ev) => {
    // setText("uppercase called")
    // console.log(text)
    // console.log(ev)

    const newText = text.replaceAll(fWord, rWord);
    setText(newText)
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg)

    const toggle = document.getElementById('toggle')
    if (toggle.textContent === 'Speak') {
      toggle.innerHTML = "Stop";
    }
    else {
      toggle.innerHTML = "Speak";
      window.speechSynthesis.cancel();
    }
  }

  const handleFindChange = (ev) => {
    // const findWord=ev.target.value;
    setFWord(ev.target.value);
  }

  const handleReplaceChange = (ev) => {
    // const findWord=ev.target.value;
    setRWord(ev.target.value);
  }

  function wordLength() {
    return text.split(/\s+/).filter((element) => { return element.length !== 0 }).length;
  }

  // const [isActive,setIsActive]=useState(false);
  // console.log(text);
  // console.log(setText);
  // setText("enter")
  return (
    <>
      <div className="conatiner ">
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='light'?'white':'rgb(34 48 52)',color:props.mode==='light'?'black':'white'}} >{text}</textarea>
        </div>

        <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mt-3 my-1`} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mt-3 my-1 mx-2`} onClick={speak}>Speak</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mt-3 my-1 mx-1`} onClick={handleLoClick}>Convert to LowerCase</button>
      </div>

      <div className={`container text-${props.mode==='light'?'dark':'light'} my-3`}>
        <h2>Your Text Summary</h2>
        <div className="border rounded">
          {/* <p>{text.split(" ").length} words and {text.length} characters</p>

        <p>{0.008 * text.split(" ").length} Minutes Read</p> */}
          <p className='mx-1'>Total number characters {text.length} and total number of words  {wordLength()}</p>
          <p className='mx-1'>Expected time to read the text {0.008 * wordLength() * 60} seconds</p>
        </div>

      </div>

      <div className={`container text-${props.mode==='light'?'dark':'light'} mx-3`} >

        <h3>Replace Words</h3>
        <div className="mb-3 ">
          <h6>Find word</h6>
          <input className="form-control" id="Find" value={fWord} onChange={handleFindChange}  style={{backgroundColor:props.mode==='light'?'white':'rgb(34 48 52)',color:props.mode==='light'?'black':'white'}}></input>
        </div>

        <div className="mb-3 ">
          <h6>Replace word</h6>
          <input className="form-control" id="Replace" value={rWord} onChange={handleReplaceChange}  style={{backgroundColor:props.mode==='light'?'white':'rgb(34 48 52)',color:props.mode==='light'?'black':'white'}}></input>
        </div>

        <button className={`btn-${props.mode==='light'?'primary':'secondary'} btn btn-primary mx-1 mb-3`} onClick={handleFrClick}>Replace word</button>

      </div>


    </>
  )
}
