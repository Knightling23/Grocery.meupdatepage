import hero from './assets/hero.jpg'
import Avataricon from './assets/Avataricon.png'
import { NavBar } from '../navBar';

export const Login = ({updatePage}) => {

  return <>
 <div className="Background"/>
 <div className="ctaWrap">
     <h3>Login with your username and password</h3><img className="logosignImage" src={Avataricon} alt="Sample Logo"/>
      <div className="ctatext">Username</div><br/>
      <input type="text" className="ctaInput" placeholder="Username"/><br/>
      
      <div className="ctatext">Password</div><br/>
      <input type="text" className="ctaInput" placeholder="Password"/><br/>

      <label class="container">Remeber me
        
        <input type="checkbox" checked="checked"/>
        
        
        </label>
      
   <button className="ctaButton"> <b> cancel </b></button> <b></b><button className="ctaButton"> <b> Login </b> </button>

 
  
  </div>
</>


}







