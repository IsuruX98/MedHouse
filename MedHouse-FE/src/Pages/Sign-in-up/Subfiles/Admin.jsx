import "../signInUp.css";

function Admin({setSignin}) {
  return (
    <div className="sign-main-container" >
      <h1>Admin</h1>
      <form action="">
        <div className="admin-email">
          <label htmlFor="admin-email">Username</label>
          <input type="email" name="admin-email" id="admin-email" placeholder="email@example.com" required/>
        </div>
        <div className="admin-password">
          <label htmlFor="admin-password">Password</label>
          <input type="password" name="admin-password" id="admin-password" placeholder=" ••••••••••" required/>
        </div>

        <button type="submit">Login</button>
      </form>
      <p>Are you a Student? <span onClick={()=>{setSignin(()=>"signin")}}>Login</span></p>

    </div>
  )
}

export default Admin