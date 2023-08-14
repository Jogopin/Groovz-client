import React from "react";
import { githubIcon, linkedinIcon, logoIcon } from "../assets/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-zinc-800 gap-4 py-6 mt-16">
      <nav >
        <ul className="flex items-center justify-center gap-6 font-semibold text-white pb-2">
          <li className="h-10 w-10">
            <Link to="/">
              <img className="object-cover invert" src={logoIcon} />
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/#">T&C</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
      {/* contact links */}
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/Jogopin"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10"
        >
          <img className="object-cover invert" src={githubIcon} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jonnathan-gomez-pineda"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10"
        >
          <img
            className="object-cover invert"
            src={linkedinIcon}
            alt="linkedin"
          />
        </a>
      </div>
        <p className="font-semibold text-white text-sm">
          © 2023 Jonnathan Gomez Pineda. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
