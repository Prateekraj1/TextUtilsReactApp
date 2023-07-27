import React,{ useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
const handleCopy=()=>{
  var text=document.getElementById('myTxt');
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Text Copied","success");

}

  const handdleUpClick=()=>{
    //console.log("handdleUpClick button was clicked");
    setText(text.toUpperCase());
    props.showAlert("UpperCase Has Been Converted","success");
  }
  const handdlelowClick=()=>{
    setText(text.toLocaleLowerCase());
    props.showAlert("LowerCase Has Been Converted","success");
  }
  const handdleUpChange=(event)=>{
    setText(event.target.value);
  }
  const handdleclear=()=>{
    setText('');
    props.showAlert("TextBox Cleared","success");
  }
  var countWord=(msg)=>{
    var count=0;
    msg=msg.split(/\s+/);
    //console.log(msg);
    for(var i=0;i<msg.length;i++){
      if(msg[i]!==''){
        count++;
      }
    }
    return count;
  }
  var countLetter=(msg)=>{
    var count=0;
    //console.log(msg);
    for(var i=0;i<msg.length;i++){
      if(msg[i]!==' '){
        count++;
      }
    }
    return count;
  }
  const Speak=()=>{
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speak Function Executed successfull","success");
  }
  const count=()=>{
    let id=document.getElementById('para');
    var temp=text.toLowerCase().split('');
    var vowel=0;
    var consonant=0;
    let arr=['a','e','i','o','u'];
    for(let i=0;i<temp.length;i++){
      if(arr.includes(temp[i])){
        vowel++;
      }
      else if(temp[i]===' '){
        continue;
      }
      else{
        consonant++;
      }
    }
    id.innerHTML='Vowel = '+vowel+' consonant = '+consonant;
  }
  const [text, setText]=useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading} </h1>
            <div className="mb-3">
            <textarea style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} className="form-control" value={text} onChange={handdleUpChange} id="myTxt" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handdleUpClick}>Click Here To Convert To UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handdlelowClick}>Click Here To Convert To LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handdleclear}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={Speak}>Speak</button>
        <button className="btn btn-primary mx-1 my-1" onClick={count}>Count Vowel and Consonant</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{countWord(text)} words and {countLetter(text)} characters</p>
        <p>{0.008 * countWord(text)} Minutes to read the word in the sentence</p>
        <h3>Vowel And Consonant Count</h3>
        <p id="para"></p>
        <h3>Preview</h3>
        <p>{text}</p>
        </div>
    </>
  )
}
TextForm.propType={heading:PropTypes.Strings}
TextForm.defaultPops={
 heading:"Please Enter The Text To Analyse" 
}