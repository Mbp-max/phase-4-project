// import React from 'react';
// import { useState, useEffect} from 'react'

// function HomeSignUp({setIsAuthenticated, setUser, user}) {
//   const [newUsername, setNewUsername] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [newEmail, setNewEmail] = useState("");
  

//   const handleSignUp = (event) => {
//     event.preventDefault();
//     const newUser = {
//         newUsername,
//         newPassword,
//         newEmail
//     }
    
//     fetch(`/users`,{
//         method:'POST',
//         headers:{'Content-Type': 'application/json'},
//         body:JSON.stringify(newUser)
//       })
//       .then(res => {
//         if(res.ok){
//           res.json()
//           .then(user=>{
//             setUser(user)
//             setIsAuthenticated(true)
//           })
          
//         } else {
//           res.json()
//           .then(json => setErrors(json.errors))
//         }
//       })
//   }
  
 

//   return (
//     <>
//       <form onSubmit={handleSignUp}>
//         <label>
//           Username
//           <input
//             type="text"
//             value={newUsername}
//             onChange={(e) => setNewUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="newPassword"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//         </label>
//         <label>
//           newEmail
//           <input
//             type="newEmail"
//             value={newEmail}
//             onChange={(e) => setNewEmail(e.target.value)}
//           />
//         </label>

//         <input type="submit" value="Login!" />
//       </form>
//       {errors ? <div>{errors}</div> : null}
//     </>
//   );
// }

// export default HomeSignUp;
