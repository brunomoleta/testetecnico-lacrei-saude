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
          <IconImg target="_blank" href={icon.href}>
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
    href: "https://www.facebook.com/lacrei.saude",
  },
  {
    image: Insta,
    alt: "Instagram",
    href: "https://www.instagram.com/lacrei.saude",
  },
  {
    image: Linkedin,
    alt: "Linkedin",
    href: "https://www.linkedin.com/company/lacrei-saude/",
  },
  {
    image: Email,
    alt: "Email",
    href: "contato@lacreisaude.com.br",
  },
];

export default IconsList;
