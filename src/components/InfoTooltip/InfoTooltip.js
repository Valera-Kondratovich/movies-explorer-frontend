import React from "react";
// import checkImage from "../../images/check.svg";
// import crossImage from "../../images/cross.svg";

import './InfoTooltip.css'

function InfoTooltip({ isOpen, onClose, onError }) {

  function selectionText(onError) {
    if (onError) {
      const textError = "Что-то пошло не так! Попробуйте ещё раз.";
      return textError;
    } else {
      const textCheck  = "Данные сохранены!";
      return textCheck;
    }
  }


  return (
    <>
    <div className={`popup ${isOpen && 'popup__opened'}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <p>{selectionText(onError)}</p>
      </div>
    </div>
    </>
  );
}

export default InfoTooltip;
