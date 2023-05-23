import React from "react";
import { ContainerS, ContainerTextS, Boto2S} from "./InicioStyled";

export const Inicio = ({ eInici }) => {
  return (
    <ContainerS className="container-inici">
      <ContainerTextS className="container-text">
        <h1>Sprint6</h1>
        <p>
          En aquest lliurament posarem en pràctica els conceptes bàsics que hem
          après de React.
        </p>
        <p>
          Un/a client/a que té com a producte principal una web de gestió
          empresarial desenvolupada amb React, ens ha demanat que desenvolupem
          un tutorial, en el qual mitjançant dos botons els nous usuaris puguin
          avançar i retrocedir en els consells, modificant-se el text d'ajuda i
          la imatge de fons.
        </p>
      </ContainerTextS>
      <Boto2S className="boto-inici" onClick={eInici}>
        Inicio
      </Boto2S>
    </ContainerS>
  );
};