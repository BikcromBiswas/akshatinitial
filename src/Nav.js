import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Link,useNavigate} from 'react-router-dom';
const Nav = () => {
  const { loginWithRedirect ,isAuthenticated,user} = useAuth0();
  const { logout } = useAuth0();
  return (
    <div className="navi">
    <div>
      <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/stats">Stats</Link></li>
            <li>{isAuthenticated && <p>{user.name}</p>}</li>
            <li className="log">
              {isAuthenticated?(<li> <button style={{backgroundColor:'#333'}}onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button></li>):(<li><button style={{backgroundColor:'#333'}} onClick={() => loginWithRedirect()}>Log In</button></li>)}
            </li>
  
      </ul>
    </div>
    <div>
    </div>
   
   
    </div>
  )
}

export default Nav