import React,{useState} from 'react'

export default function TextForm(props) {
    var [text, setText]= useState("input your text");

    const handleonchange = (event) => {
      setText(event.target.value)
    }

    const handUpchange = () => {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase", "success")
    }

    const handUpchangee = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success")
    }

    

    const handlespeak = () => {
      let newText = new SpeechSynthesisUtterance();
      newText.text = text;
      window.speechSynthesis.speak(newText);
    }

    const handleclear = () => {
      let newText = "";
      setText(newText);
      props.showAlert("text will be clear", "success")
      
    }

    const handleCopy = () =>{
      navigator.clipboard.writeText(text);
      props.showAlert("text will be copy", "success")
    }

    const handleRemoveSpace = () =>{
      let newText = text.split(/[] + /);
      setText(newText.join(" "));

    }

  return (
    <div>
      <div className="mb-3 mx-5 my-5">
        <h1>{props.heading}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange}></textarea>
  <button className='btn btn-outline-success my-3' disabled={text.length === 0} onClick={handUpchange}>Convert to upper btn</button>
  &nbsp;&nbsp;
  <button className='btn btn-outline-success my-3' disabled={text.length === 0} onClick={handUpchangee}>Convert to lower btn</button>
  &nbsp;&nbsp;
  <button className='btn btn-outline-success my-3' disabled={text.length === 0} onClick={handlespeak}>speak</button>
  &nbsp;&nbsp;
  <button className='btn btn-outline-success my-3'disabled={text.length === 0} onClick={handleclear}>Clear</button>
  &nbsp;&nbsp;
  <button className='btn btn-outline-success my-3' disabled={text.length === 0} onClick={handleCopy}>Copy</button>
  &nbsp;&nbsp;
  <button className='btn btn-outline-success my-3'disabled={text.length === 0} onClick={handleRemoveSpace}>RemoveSpace</button>

  </div>

  <div className='container'>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length } Words</p>
    <p>{text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} reading time</p>
    <h3>preview</h3>
    <p>{text.length>0 ? text : "Nothing to Preview !"}</p>
  </div>
</div>
   
  )
}