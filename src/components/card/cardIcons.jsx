import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useLikes } from '../../hooks/useLikes'

export const CardIcons = () => {
    const { like, dislike, heartClick } = useLikes();

  return (
    <div className='mt-3 is-flex is-justify-content-space-evenly'>
      <div className='card__pet__icon__box card__pet__x is-flex is-justify-content-center is-align-items-center' onClick={dislike}>
        <IoMdClose size={18} />
      </div>
      <div
        className={`card__pet__icon__box is-flex is-justify-content-center is-align-items-center card__pet__heart ${
          like ? "card__pet__heart-active" : " "
        }`}
        onClick={heartClick}
      >
        {like ? <FaHeart size={20}/> : <FaRegHeart size={18} /> }
      </div>

      {/*  */}
    </div>
  );
};
