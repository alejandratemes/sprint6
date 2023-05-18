import React from "react";
import {Borde} from './styled';

export const Escena = ({isSelected, frase}) => (<Borde className={`"frase" ${isSelected ? "fonsActiu" : ""}`}>{frase}</Borde>);