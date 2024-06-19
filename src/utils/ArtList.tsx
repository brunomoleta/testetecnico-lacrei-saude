import Polaroid from "@/data/art/Polaroid";
import React from "react";
import { art } from "@/types/types";
import Camera from "@/data/art/Camera";
import Muson from "@/data/art/Muson";

export const illustrations: art[] = [
  {
    objeto: <Polaroid />,
    nome: "Câmera Polaroid",
    subtitulo: "Ilustração feita em 2020",
  },
  {
    objeto: <Camera />,
    nome: "Câmera analógica La Sardina",
    subtitulo: "2021",
  },
  {
    objeto: <Muson />,
    nome: "Sintetizador sonoro infantil Muson",
    subtitulo: "2022",
  },
];
