import React from 'react'

export default function About(props) {
let myStyle={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
  border:props.mode==='light'?'1px solid #042743':'1px solid white'
}

    /*const [myStyle,setmyStyle]=useState({
        color:'black',
        backgroundColor:'white',
    })
    const [btnText,setBtnText]=useState("Enable Dark Mode")

    let styeToogle=()=>{
        if(myStyle.color === 'white'){
            setmyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText('Enable Dark Mode');
        }
        else{
            setmyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            });
            setBtnText('Enable Light Mode');
        }
    }*/
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils gives you a way to analyze your text quickly and efficiently. be it word count, character count or speak or time calculation to read the sentence.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        it is a open source free to use Software.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Compaitable</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       This App Supports Almost Every Existing Browser.
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <strong>About Developer</strong>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       This app is my first app developed by me during my react.js learning Journey.
       </div>
    </div>
  </div>
</div>
<div className="container my-3">
  {/*<button type="Button" onClick={styeToogle} className="btn btn-primary">{btnText}</button>*/}
  {/*<div className="form-check form-switch">
  <input className="form-check-input" onClick={styeToogle} aria-checked type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
  </div>*/}
  </div>
    </div>
  )
}
