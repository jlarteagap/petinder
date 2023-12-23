import React from "react";

export const MenuLinks = ({ links }) => {
  return (
    <>
        {links.map(link=> {
            return(
                <a className='navbar-item pet__item' key={link}>{link}</a>
            )
        })}
    </>
  );
};
