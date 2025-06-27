import "./style/Form.css";
import { useState } from "react";

export const Form = () => {
    // states
    const [usrName, setUsrName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // error part 
    const [usrNameError, setUsrNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    // colors
    const [usrNameColor, setUsrNameColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    // Functions 
    const validate = (e) => {
        e.preventDefault();
        if(usrName.length > 8){
            setUsrNameError("");
            setUsrNameColor("green");
        }else{
            setUsrNameError("Name must be more than 8 characters");
            setUsrNameColor("red");
        }
        if(email.includes("@gmail.com")){
            setEmailError("");
            setEmailColor("green");
        }else{
            setEmailError("Email must be valid");
            setEmailColor("red");
        }
        if(password.length > 8){
            setPasswordError("");
            setPasswordColor("green");
        }else{
            setPasswordError("Password must be more than 8 characters");
            setPasswordColor("red");
        }
        if(confirmPassword === password && confirmPassword.length > 8){
            setConfirmPasswordError("");
            setConfirmPasswordColor("green");
        }else{
            setConfirmPasswordError("Password don't match");
            setConfirmPasswordColor("red");
        }
    }


  return (
    <>
        <div className="card">
            <div className="card-image"></div>
            <form>
                <input 
                    type="text"
                    placeholder="Name" 
                    style={{borderColor: usrNameColor}} 
                    value={usrName} 
                    onChange={ e => setUsrName(e.target.value)} 
                />
                <p className='error' >{usrNameError}</p>
                <input 
                    type="email"
                    placeholder="Email" 
                    style={{borderColor: emailColor}} 
                    value={email} 
                    onChange={ e => setEmail(e.target.value)} 
                />
                <p className='error' >{emailError}</p>
                <input 
                    type="password"
                    placeholder="Password" 
                    style={{borderColor: passwordColor}} 
                    value={password} 
                    onChange={ e => setPassword(e.target.value)} 
                />
                <p className='error' >{passwordError}</p>
                <input 
                    type="password"
                    placeholder="Confirm Password" 
                    style={{borderColor: confirmPasswordColor}} 
                    value={confirmPassword} 
                    onChange={ e => setConfirmPassword(e.target.value)} 
                />
                <p className='error' >{confirmPasswordError}</p>
                <button className="submit-btn" type="submit" onClick={(e) => validate(e)}>Submit</button>
            </form>
        </div>
    </>
  )
}
