"use client";
import {
  RiFacebookBoxFill,
  RiGoogleFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiSteamFill,
} from "react-icons/ri";

import Link from "next/link";
import { Icon } from "lucide-react";

const icons = [
  {
    path: "#facebook",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "#google",
    name: <RiGoogleFill />,
  },
  {
    path: "#github",
    name: <RiGithubFill />,
  },
  {
    path: "#linkein",
    name: <RiLinkedinBoxFill />,
  },
  {
    path: "#steam",
    name: <RiSteamFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
