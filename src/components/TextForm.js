import React,{useState} from 'react'




export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCapClick = () => {
        let newText = ()=>{
            let finalStrArr = [];
            let strArr = text.split(" ")
            strArr.forEach(element => {
                finalStrArr.push(element.charAt(0).toUpperCase() + element.slice(1));
            });
            let finalStr = finalStrArr.join(" ")
            return finalStr;
        }
        setText(newText)
    }
    function handleDuplicates(){
        let wordArr = text.split(" ");
        let newText = wordArr.filter((item, pos)=>{
            return wordArr.indexOf(item) === pos;
        })
        newText = newText.join(" ");
        setText(newText);
    }
    function handleClear(){
        let newText = "";
        setText(newText);
    }  


  
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}} className="container">
       <h1>{props.headings}</h1>
       <div className="mb-3">
       <textarea style={{backgroundColor:props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="12" ></textarea>
       </div>
       <button className="btn btn-dark mx-2" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-dark mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
       <button className="btn btn-dark mx-2" onClick={handleCapClick}>Capitalise Text</button>
       <button className="btn btn-dark mx-2" onClick={handleDuplicates}>Remove Duplicate words</button>
       <button className="btn btn-dark mx-2" onClick={handleClear}>Clear Text</button>
     
    </div>
    <div style={{color:props.mode==='dark'?'white':'black'}} className="container my-2">
        <h2>Your Text Summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008 * text.length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox to preview it here"}</p>
        
    

    </div>

    </>
  )


}
