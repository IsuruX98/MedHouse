import {  useState } from "react";
import "../signInUp.css";
// import SignInUpPage from "../SignInUpPage";
// import { useNavigate } from "react-router-dom";


function Signup({setSignin}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  // const navigate = useNavigate();

  async function signUpUser(e) {
    e.preventDefault()

    if(password===conPassword){
      fetch('http://localhost:5000/api/signup',{
        method:'post',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          gender,
          password,
        })
      }).then(response=>response.json())
      .then((data)=>{
        if(data.status){ 
          // navigate('/home')
          window.location.reload(true)
        }
        console.log(data.status)

      }).catch((err)=>{
        console.log('rejected',err)
        alert("Network error.")
      })

    }else{
      alert("Confirm password and Password does not match!")
    }
  }
  

  return (
    <div className="sign-main-container">
        <h1>Sign up</h1>
        <form action="" onSubmit={signUpUser}>
            <div className="sign-up-name">
                <label htmlFor="sign-up-name">Name</label>
                <input 
                 type="text"
                 name="sign-up-name" 
                 id="sign-up-name" 
                 placeholder="Full name" 
                 onChange={(e) => setName(e.target.value)}
                 value={name}
                 required/>

            </div>
            <div className="sign-up-email">
                <label htmlFor="sign-up-email">Email</label>
                <input 
                type="email" 
                name="sign-up-email" 
                id="sign-up-email" 
                placeholder="email@example.com" 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required/>
            </div>
            <div className="sign-up-gender">
              <label htmlFor="sign-up-gender">Gender</label>
              <select name="sign-up-gender" id="sign-up-gender" onChange={(e) => setGender(e.target.value)} value={gender}>
                <option value="Male">Boy</option>
                <option value="Female">Girl</option>
                
              </select>
                        </div>
            <div className="sign-up-pasword">
                <label htmlFor="sign-up-password">Password</label>
                <input type="password" name="sign-up-password" id="sign-up-password" placeholder=" ••••••••••" 
                onChange={(e)=> setPassword(e.target.value)}
                value = {password}
                required/>
            </div>
            <div className="sign-up-con-password">
                <label htmlFor="sign-up-con-password">Confirm Password</label>
                <input type="password" name="sign-up-con-password" id="sign-up-con-password" placeholder=" ••••••••••"
                onChange={(e)=>setConPassword(e.target.value)}
                value={conPassword}
                 required/>
            </div>

            <button type="submit" >Sign up</button>
      </form>
      <p>Have an account? <span onClick={()=>{setSignin(()=>"signin")}}>Sign in</span></p>

    </div>
  )
}

export default Signup