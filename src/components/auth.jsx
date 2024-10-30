import { login, logout, loggedInUserDisplayName, loggedInUserImage } from "../services/authService.js"

export function SignIn() {
  return <button onClick={login}>Sign In</button>
}

export function SignOut() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src={loggedInUserImage()} 
        alt="Profile" 
        style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }} 
      />
      <span>Hello, {loggedInUserDisplayName()}</span>
      <button onClick={logout} style={{ marginLeft: '10px' }}>Sign Out</button>
    </div>
  );
}