import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="">Jul</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="">Accueil <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="Discographie">Discographie</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="Concerts">Concerts</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="Actualites">Actualités</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="Apropos">A Propos</Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      
    );
};


export default NavBar;


