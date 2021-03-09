import hamburger from './assets/hamburger.svg';

export const NavBar = ({fullWidth, updatePage}) => {

  const hamburgerClass = fullWidth ? "hamburgerMenuFull" : "hamburgerMenu";
  const signUpClass = fullWidth ? "signUpFull" : "signUp";
  const LoginClass = fullWidth ? "LoginFull" : "Login";
  const navBarClass = fullWidth ? "navBarFull" : "navBar";
  const onClick = () => updatePage("Login");
  return <>
    <div className={navBarClass}>
      <img className={hamburgerClass} src={hamburger} alt="Menu" height="50" width="50"/>
      {
        fullWidth ? <input type="text" className="searchBar" placeholder="🔍 Search for groceries..."/> : <null/>
      }
      <div className="signUpLogInWrapper">
        <button className={LoginClass}  onClick={onClick} > <b> Log in </b> </button>
        <button className={signUpClass}> <b> Sign up </b> </button>
      </div>
    </div>
  </>
}
