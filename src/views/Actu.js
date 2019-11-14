import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from "../NavBar"
import TwitterContainer from "../TwitterContainer";


const Actu = () => {
    return (
        <div className="App bg-dark">

          <NavBar/>
          <div class="col border border-secondary text-light">
          <h2>Actualités</h2>
          <TwitterContainer/>
          </div>
      </div>
    );
};

export default Actu;