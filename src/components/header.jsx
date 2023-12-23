import React from "react";
import { BurgerMenu } from "./header/burgerMenu";
import { MenuLinks } from "./header/MenuList";
import { Buttons } from "./header/buttons";


const links = ['Home', 'Actividades', "Reglas", "Prensa"]

export const Header = () => {
    return(
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="#">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>
      <BurgerMenu />
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <MenuLinks links={links}/>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className='buttons'>
          <Buttons />
        </div>
      </div>
    </div>
  </div>
</nav>

    )
}