import React from 'react';
import logo from './logo.svg';
import TwitterContainer from "./TwitterContainer";
import NavBar from "./NavBar"
import './App.css';
import {Link} from 'react-router-dom';

// Images
import Rien100Rien from "./img/Rien100Rien.jpg";
import Albumgratuit from "./img/AlbumGratuitVol4.jpg";
import LaTeteDansLesNuages from "./img/LaTeteDansLesNuages.jpg";
import LaZoneEnPersonne from "./img/LaZoneEnPersonne.jpg";
import LOvni from "./img/LOvni.jpg";



function App() {
  return (
    <div className="App bg-dark">

      <NavBar/>

      <div class="container-fluid text-light">
        <div class="row">
          <div class="col border border-secondary">
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
          <div class="col-5 border border-secondary">
            <h2>Concerts</h2>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 border m-2 p-0">
                <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm text-right m-auto">
                        <p>Mercredi<br/>
                        <h1>13</h1>
                        Novembre 2019<br/>
                        19h00
                        </p>
                      </div>
                      <div class="col-sm text-left m-auto">
                        Accorhotels Arena - Popb Bercy<br/>
                        <strong>Paris (75)</strong>
                      </div>
                      <div class="col-sm m-auto">
                      <button type="button" class="btn btn-light">Réservez vite !</button>
                      </div>
                    </div>
                  </div>
                 </div>
                 <div class="col-12 border m-2 p-0">
                <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm text-right m-auto">
                        <p>Mercredi<br/>
                        <h1>20</h1>
                        Novembre 2019<br/>
                        20h00
                        </p>
                      </div>
                      <div class="col-sm text-left m-auto">
                      Musikhall - Parc Expo Rennes Aeroport<br/>
                        <strong>Rennes (35)</strong>
                      </div>
                      <div class="col-sm m-auto">
                      <button type="button" class="btn btn-light">Réservez vite !</button>
                      </div>
                    </div>
                  </div>
                 </div>
                 <div class="col-12 border m-2 p-0">
                <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm text-right m-auto">
                        <p>Jeudi<br/>
                        <h1>21</h1>
                        Novembre 2019<br/>
                        20h00
                        </p>
                      </div>
                      <div class="col-sm text-left m-auto">
                      Zenith De Nantes Metropole<br/>
                        <strong>Nantes (44)</strong>
                      </div>
                      <div class="col-sm m-auto">
                      <button type="button" class="btn btn-light">Réservez vite !</button>
                      </div>
                    </div>
                  </div>
                 </div>
                 <div class="col-12 border m-2 p-0">
                <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm text-right m-auto">
                        <p>Mercredi<br/>
                        <h1>27</h1>
                        Novembre 2019
                        </p>
                      </div>
                      <div class="col-sm text-left m-auto">
                      Le Galaxie A Amneville<br/>
                        <strong>Amneville (57)</strong>
                      </div>
                      <div class="col-sm m-auto">
                      <button type="button" class="btn btn-light">Réservez vite !</button>
                      </div>
                    </div>
                  </div>
                 </div>
                 <div class="col-12 border m-2 p-0">
                <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm text-right m-auto">
                        <p>Jeudi<br/>
                        <h1>28</h1>
                        Novembre 2019<br/>
                        20h00
                        </p>
                      </div>
                      <div class="col-sm text-left m-auto">
                      Zenith D'auvergne<br/>
                        
                        <strong>Cournon (63)</strong>
                      </div>
                      <div class="col-sm m-auto">
                      <button type="button" class="btn btn-light">Réservez vite !</button>
                      </div>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          </div>
          <div class="col-3 border border-secondary">
          <h2>Actualités</h2>
          <TwitterContainer/>
          </div>
        </div>
      </div>

      <div class="container-fluid text-light">
        <div class="row">
          <div class="col border border-secondary">
            <h2>A propos</h2>
            <br/>
            <p>Jul (/Djoul/), de son vrai nom Julien Mari1, est un rappeur et chanteur français, né le 14 janvier 1990 à Marseille.  </p>
            <p>Il sort son premier single, Sort le cross volé, en novembre 2013. Le single est suivi en février 2014 d'un album entier, Dans ma paranoïa, le premier d'une série prolifique : 2 albums complets par an depuis le début de sa carrière, tous primés au moins d'un disque de platine. </p>
            <p>En 2015, Jul quitte le label Liga One Industry à la suite de désaccords financiers et fonde son propre label indépendant, D'or et de platine. L'année suivante, il reçoit la récompense du meilleur album de musique urbaine aux 32e Victoires de la musique pour l'album My World. </p>
            </div>
        </div>
      </div>

      <div id="Test">

      </div>



            
      
      
      
    </div>
    
  );
}

export default App;
