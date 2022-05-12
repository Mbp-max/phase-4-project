import React from 'react';
import { useState, useEffect } from 'react';
import Feed from './Feed'

function HomeSignIn() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")
  const [pass, setPass] = useState("")

  function handleSubmit(x) {
    x.preventDefault()
    setLoading(true)

    fetch('/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })

    .then(resp => resp.json())
    .then(data=>console.log(data))
    // .then(data => {

    //     setLoading(false);

    //     if (data.ok){

    //         data.json().then(el=> onLogin(el) )
    //     }else{
    //         data.json().catch(err=> {
    //             setError( "wrong email")
    //             setPass("wrong password")
    //         })
    //     }
    // })



  }


  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const [userData, setUserData] = useState([])
  // const [loginInfo, setLoginInfo] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/users")
  //     .then(response => response.json())
  //     .then(data => setLoginInfo(data));
  //   console.log(loginInfo)
  // }, []);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   var { uname, pass } = document.forms[0];

  // const userData = loginInfo.find((user) => user.username === uname.value);
  // console.log(userData);
  // setTaskData(userData.tasks);

  // setCurrentUser(userData.id)

  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };

  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  console.log(password)

  const renderForm = (
    <div className="login-form">
      <div className="banner">Sign In</div>
      <div className="title"></div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" className="formName" placeholder="username" name="username" required value={username} onChange={e => setUsername(e.target.value)} />
            {/* <input onChange={e => setUsername(e.target.value)} type="text" name="uname" required value={username} /> */}
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <label>Password </label>
            {/* <input type="password" name="pass" required /> */}
            {/* {renderErrorMessage("pass")} */}
            <input type="text" className="formName"  placeholder="password" name="pasword"  required value={password} onChange={e => setPassword(e.target.value) }/>
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
  const handleSignUp = () => { console.log("hello") }

  return (
    <div className="Home">
      <div className="app">
        <div className="login-form">
          <div className="title"></div>
          {isSubmitted
            ? <div>User is successfully logged in</div> && (
              <Feed />
            )
            : renderForm}
        </div>
        {/* <button onClick={handleSignUp}> SignUp</button> */}
      </div>

    </div>
  );
}

export default HomeSignIn;