import React from "react";
import Image from "next/image";

import Email from "../../../assets/icons/email.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Insta from "../../../assets/icons/instagram.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import { IconImg, List } from "@/components/Footer/IconsList/IconsList.style";

function IconsList() {
  return (
    <List>
      {iconsList.map((icon, index) => (
        <li key={index}>
          <IconImg href={icon.href}>
            <Image alt={icon.alt} src={icon.image}></Image>
          </IconImg>
        </li>
      ))}
    </List>
  );
}

export const iconsList = [
  {
    image: Facebook,
    alt: "Facebook",
    href: "/",
  },
  {
    image: Insta,
    alt: "Instagram",
    href: "/",
  },
  {
    image: Linkedin,
    alt: "Linkedin",
    href: "/",
  },
  {
    image: Email,
    alt: "Email",
    href: "/",
  },
];

export default IconsList;
