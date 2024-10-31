import { login, logout, loggedInUserDisplayName, loggedInUserImage } from "../services/authService.js";

export function SignIn() {
  return <button onClick={login}>Sign In</button>;
}

export function SignOut() {
  const userName = loggedInUserDisplayName();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src={loggedInUserImage()} 
        alt="Profile" 
        className="user-profile-image"
      />
      <span className="bounce-text">
        {"Hello,".split("").map((letter, index) => ( 
          <span key={index} className="letter" style={{ "--i": index }}>{letter}</span>
        ))}
        {userName && (
          <>
            <span className="letter" style={{ "--i": 7 }}> &nbsp;</span>
            {userName.split("").map((letter, index) => (
              <span key={index + 8} className="letter" style={{ "--i": index + 8 }}>{letter}</span> // Start indexing from 8
            ))}
          </>
        )}
      </span>
      <button onClick={logout} style={{ marginLeft: '10px' }}>Sign Out</button>
    </div>
  );
}
