import React from 'react';
import './App.css';

import { SplashScreen } from './splashScreen';
import { Shop } from './shop';
import { Login } from './Login';

function App() {

  const [page, updatePage] = React.useState("Splash");

  return <>
    <div className="App">
      {
        page === "Splash" ? <SplashScreen updatePage={updatePage}/> :
        page === "Shop"   ? <Shop updatePage={updatePage}/>         :
        page === "Login"   ? <Login updatePage={updatePage}/>         :
        <null/>
      }
    </div>
  </>;
}

export default App;
