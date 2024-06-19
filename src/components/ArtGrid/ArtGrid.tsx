import React from "react";
import Polaroid from "../../data/art/Polaroid";
import Camera from "../../data/art/Camera";
import Muson from "../../data/art/Muson";
import { Ul } from "@/components/ArtGrid/ArtGrid.style";

function ArtGrid() {
  return (
    <section>
      <Ul>
        <li>
          <Polaroid />
        </li>
        <li>
          <Camera />
        </li>
        <li>
          <Muson />
        </li>
      </Ul>
    </section>
  );
}

export default ArtGrid;
