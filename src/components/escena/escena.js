import React from "react";
import {Borde} from './styled';

export const Escena = ({isSelected, txt}) => (<Borde className={`"txt" ${isSelected ? "fonsActiu" : ""}`}>{txt}</Borde>);