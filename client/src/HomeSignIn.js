import React from 'react';
import { useState, useEffect } from 'react';
import Feed from './Feed'
import HomeAbout from './HomeAbout'

function HomeSignIn({setIsAuthenticated, setUser, error}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 
  const [errors, setError] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)




  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: username,
      password
  }
 
  fetch(`/login`,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(user)
  })
  .then(res => {
    if(res.ok){
      res.json()
      .then(user=>{
        setUser(user)
        setIsAuthenticated(true)
      })
      
    } else {
      res.json()
      .then(json => setError(json.error))
    }
  })
  };

    return (
<>
      <div className="Home">
      <div className="Banner">
        <h1 className="Tittle"> Ticket Stubs </h1>
      </div>
      {/* <HomeSignIn setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/> */}
      <HomeAbout />
    </div>

<form onSubmit={handleSubmit}>
          <label>
            Username
    
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
          Password
      
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        
          <input type="submit" value="Login!" />
        </form>
        {errors?<div>{errors}</div> : null}
          

      </>

    );
}
export default HomeSignIn;