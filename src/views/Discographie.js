import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from "../NavBar"

import Rien100Rien from "../img/Rien100Rien.jpg";
import Albumgratuit from "../img/AlbumGratuitVol4.jpg";
import LaTeteDansLesNuages from "../img/LaTeteDansLesNuages.jpg";
import LaZoneEnPersonne from "../img/LaZoneEnPersonne.jpg";
import LOvni from "../img/LOvni.jpg";


const Discographie = () => {
    return (
        <div className="App bg-dark">

          <NavBar/>
          <div class="col border border-secondary text-light">
            <h2>Discographie</h2>
            <div class="container-fluid">
              <div class="row">
                <div class="col m-3">
                  <img width="180" alt="Rien100Rien" src={Rien100Rien}></img>
                </div>
                <div class="col m-3">
                <img width="180" alt="Rien100Rien" src={Albumgratuit}></img>
                
                </div>
                <div class="col m-3">
                <img width="180" alt="Rien100Rien" src={LaTeteDansLesNuages}></img>
                
                </div>
                <div class="col m-3">
                <img width="180" alt="Rien100Rien" src={LaZoneEnPersonne}></img>
                
                </div>
                <div class="col m-3">
                <img width="180" alt="Rien100Rien" src={LOvni}></img>
                
                </div>
              </div>
            </div>
            </div>
      </div>
    );
};

export default Discographie;