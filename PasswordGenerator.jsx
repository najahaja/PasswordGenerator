import {useState} from 'react'
import './App.css'
export const PasswordGenerator = () => {
    const [length,setLength]=useState(6);
    const [upper,setUpper]=useState(true);
    const [lower,setLower]=useState(true);
    const [numbers,setNumbers]=useState(true);
    const [special,setSpecial]=useState(true);
    const [password,setPassword]=useState("");
    const generatepassword=()=>{
        let passwordString="";
        if (upper) {
            passwordString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(lower){
            passwordString+="abcdefghijklmnopqrstuvwxyz";
        }
        if(numbers){
            passwordString+="0123456789";
        }
        if(special){
            passwordString+="!@#$%^&*()_+";
        }
        let passwordArray="";
        for(let i=0;i<length;i++){
            passwordArray+=passwordString.charAt(Math.floor(Math.random() * passwordString.length));
        }setPassword(passwordArray);
        alert("New password generate !");
    }
  return (
    <>
    <div className="passgenerator">
        <h2>PASSWORD GENERATOR</h2>
        <div className="passlength">
            <label htmlFor="length">PassWord Length :</label>
            <input type="number"  id="length" value={length} onChange={(e)=>{setLength(parseInt(e.target.value))}} />
        </div>
        <div className="checkbox">
            <input type="checkbox"  id="upper" checked={upper} onChange={(e)=>{setUpper(e.target.checked)}}/>
            <label htmlFor="upper">Include UpperCase</label><br/>
            <input type="checkbox"  id="lower" checked={lower} onChange={(e)=>{setLower(e.target.checked)}}/>
            <label htmlFor="lower">Include LowerCase</label><br/>
            <input type="checkbox"  id="number" checked={numbers}onChange={(e)=>{setNumbers(e.target.checked)}}/>
            <label htmlFor="number">Include Numbers</label><br/>
            <input type="checkbox"  id="special" checked={special}onChange={(e)=>{setSpecial(e.target.checked)}}/>
            <label htmlFor="special">Include Special characters</label>
            
        </div><div className="text"><input type="text"  value={password}readOnly/></div>
      
        <button className="generate-btn" onClick={generatepassword}>Generate Password</button>
        <button className="Copy-btn" onClick={()=>{navigator.clipboard.writeText(password); alert("Password Copied")}}>Copy Password</button>
    </div>
    </>
  )
}
