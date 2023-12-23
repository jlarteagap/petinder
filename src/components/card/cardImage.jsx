import React from "react";
import { CardContent } from "./CardContent";
import { CardInfo } from "./cardInfo";
import { CardIcons } from "./cardIcons";

export const CardImage = () => {
  return (
    <div className='card-image'>
      <figure className='card__pet__image'>
        <img
          src='https://picsum.photos/id/40/4106/2806'
          alt='Placeholder image'
        />
      </figure>
      <div className='card__pet__info p-3'>
        <CardInfo />
        <CardIcons />
        </div>
    </div>
  );
};
