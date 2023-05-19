import React from "react";
import {DivBotones, BotonEstilos} from './styled';

export const Botones = ({previous, next}) => (
    <DivBotones>
        <BotonEstilos onClick={previous}>Anterior</BotonEstilos>
        <BotonEstilos onClick={next}>Següent</BotonEstilos>
    </DivBotones>
);