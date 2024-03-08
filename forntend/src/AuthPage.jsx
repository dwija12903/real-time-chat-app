import axios from "axios";

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value  }))
      .catch((e) => console.log("Error", e));
    };

    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <h1 className="website-name"><u>Splendid Chat Hub</u></h1>
          <div className="form-title">Welcome's you</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
        <footer className="footer">
          <p>Created by</p>
            <a href="https://www.linkedin.com/in/dwijapanchal" target="_blank" rel="noopener noreferrer">
            Dwija Panchal</a>
        </footer>
      </div>
    );
  };

  export default AuthPage;