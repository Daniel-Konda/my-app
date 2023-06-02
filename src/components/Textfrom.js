import React, {useState} from 'react'

export default function Textfrom(prop) {
    const [text, setText]=useState('');
    const handleupcase=()=>
    {
        let newtext=text.toUpperCase();
        setText(newtext);
        text.length>0?prop.showAlert("Coverted to Uppercase",prop.mode==='light'?'success':'info'):prop.showAlert("Please input some text",'danger');
    }
    const handlecleardata=()=>
    {
        let newtext='';
        setText(newtext);
    }
    const handlesencase=()=>
    {
        let newtext=text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});;
        setText(newtext);
        text.length>0?prop.showAlert("Coverted to Sentencecase",prop.mode==='light'?'success':'info'):prop.showAlert("Please input some text",'danger');
    }
    function handlelocase()
    {
        let newtext=text.toLowerCase();
        setText(newtext);
        text.length>0?prop.showAlert("Coverted to Lowercase",prop.mode==='light'?'success':'info'):prop.showAlert("Please input some text",'danger');
    }
    const handleonchange= (event)=>
    {
        setText(event.target.value);
    }
    const handlecopy=()=>
    {
        let t=document.getElementById('mybox');
        t.select();
        navigator.clipboard.writeText(t.value);
        prop.showAlert("copied to clipboard",prop.mode==='light'?'success':'info');
    }


    return (
    <div className='container'>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color:prop.mode==='dark'?'white':'black'}}><h1>{prop.title}</h1></label>
            <textarea className="form-control"  rows="10" placeholder="Enter your text here" id='mybox'  value={text} onChange={handleonchange} style={{backgroundColor:prop.mode==='dark'?'#212529':'white', color:prop.mode==='dark'?'white':'black'}}></textarea>
        </div>
            <button className={`btn btn-${prop.mode==='light'?'primary':'info'} m-1 mx-2`} onClick={handleupcase}>Convert to Uppercase</button>
            <button className={`btn btn-${prop.mode==='light'?'primary':'info'} m-1 mx-2`} onClick={handlelocase}>Convert to Lowercase</button>
            <button className={`btn btn-${prop.mode==='light'?'primary':'info'} m-1 mx-2`} onClick={handlesencase}>Convert to Sentencecase</button>
            <button className={`btn btn-${prop.mode==='light'?'primary':'info'} m-1 mx-2`} onClick={handlecleardata}>Clear Text</button>
            <button className={`btn btn-${prop.mode==='light'?'primary':'info'} m-1 mx-2`} onClick={handlecopy}>Copy Text</button>
            <div className="container m-2" style={{ color:prop.mode==='dark'?'white':'black'}}>
                <h3>Your text summary</h3>
                <p>word count: {text.length>0?text.split(' ').length:0} | character count: {text.length} | line count: {text.length>0?text.split('\n').length:0}</p>
                <h3>preview</h3>
                <p>{text.length>0?text:'Enter some text in the above textarea to preview it here'}</p>
            </div>
</div>
  )
}
