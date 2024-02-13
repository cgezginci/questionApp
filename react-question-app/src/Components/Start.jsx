import React from "react";

function Start({ onStart }) {
  return (
    <div className="content">
      <h2>Teste Hoş Geldiniz!</h2>
      <p>
        Bu test 10 sorudan oluşmaktadır. Her soru için 30 saniyeniz vardır.
        Hazırsanız, başlamak için "Teste Başla" butonuna tıklayın.
      </p>
      <button id="start" onClick={onStart}>
        Teste Başla
      </button>
    </div>
  );
}

export default Start;
