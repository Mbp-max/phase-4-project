import React from 'react';
import {useState, useEffect} from 'react';
import Feed from './Feed'

function HomeSignIn() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginInfo, setLoginInfo] = useState([]);
  const [userData, setUserData] = useState([])
 
  function employeeDatabase() {
    
    fetch("http://localhost:3000/users", )
      .then((response) => response.json())
      .then((data) => setLoginInfo(data));
      console.log(loginInfo)
  }

  useEffect(employeeDatabase, []);
  

  
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // const userData = loginInfo.find((user) => user.username === uname.value);
    // console.log(userData);
    // setTaskData(userData.tasks);
    
    // setCurrentUser(userData.id)

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="login-form">
        <div className="banner">Sign In</div>
        <div className="title"></div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
  const handleSignUp = () => {console.log("hello")}
    return (
        <div className="Home">
            <div className="app">
      <div className="login-form">
        <div className="title"></div>
        {isSubmitted
          ? <div>User is successfully logged in</div> && (
              <Feed/>
            )
          : renderForm}
      </div>
      <button onclick={handleSignUp}> SignUp</button>
    </div>

        </div>
    );
}

export default HomeSignIn;