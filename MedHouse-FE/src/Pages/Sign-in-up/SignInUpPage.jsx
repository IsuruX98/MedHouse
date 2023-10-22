import "./signInUp.css"
import Signin from "./Subfiles/Signin"
import Signup from "./Subfiles/Signup"
import Admin from "./Subfiles/Admin"
import { useState } from "react"

function SignInUpPage({setLoginState}) {
  
  const [signin, setSignin] = useState("signin");

  let display = undefined;

  if(signin ==='signin'){
    display=<Signin setSignin = {setSignin} setLoginState={setLoginState}/>
  }else if(signin ==="signup"){
    display=<Signup setSignin = {setSignin} />
  }else{
    display=<Admin setSignin = {setSignin}/>
  }

  return (
    <div className="sign-in-up-page-container">{display}</div>
  )
}

export default SignInUpPage