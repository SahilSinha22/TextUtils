
import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick= ()=>{
       // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        
      props.showAlert("text in Uppercase","primary");
    }
    const handleClearClick= ()=>{
      // console.log("Uppercase was clicked");
       let newText="";
       setText(newText);
       props.showAlert("clear the text","danger");
         }
    const handleLoClick= ()=>{
     // console.log("Uppercase was clicked");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("text in Lowercase","warning");
  }
    const handleOnChange= (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
     // var text=document.getElementById("myBox");
     // text.select();
      navigator.clipboard.writeText(text);{/*.value*/}
      document.getSelection().removeAllRanges();

      props.showAlert("text are Copy","light");
    }
    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Remove extra Space","sucess");
    }
    const [text, setText] = useState('');
    //direct set text ese nhi kr skte hai......

    ///text="new text"; ///wrong way to change the state
    ////setText("new text"); ///correct way to cgange the state


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
<h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" style={{color:props.mode==='dark'?'white':'#042743', backgroundColor: props.mode==='dark'?'#13466e':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to lowercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear text</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Extra Space</button> </div>
    <div className="container mx-1 my-1" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>
Your Next summary
      </h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"! Nothing to preview"}</p>
    </div>
    </>
  )
}
