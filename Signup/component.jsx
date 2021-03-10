import hero from './assets/hero.jpg'
import trucklogo from './assets/trucklogo.PNG'
import { NavBar } from '../navBar';

export const Signup = ({updatePage}) => {

  return <>
 <div className="Background"/>
 
 <div className="ctaWrap">
     <h3>Sign up for free</h3><img className="logosignImage" src={trucklogo} alt="Sample Logo"/>
     <p>And enhance your experience</p>
      <div className="ctatext">Username</div><br/>
      <input type="text" className="ctaInput" placeholder="Username"/><br/>
      <div className="ctatext">Password</div><br/>
      <input type="text" className="ctaInput" placeholder="Password"/><br/>
      <div className="ctatext">Email</div><br/>
      <input type="text" className="ctaInput" placeholder="Email"/><br/>
  <button className="ctaButton"> <b> cancel </b></button> <b></b><button className="ctaButton"> <b> submit </b> </button>

  </div>
</>

}







