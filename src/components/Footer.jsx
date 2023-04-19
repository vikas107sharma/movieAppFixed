import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#03001c]">
      <div className="flex w-[90%] m-auto text-white">
        <div className="flex flex-col w-[100%]">
          <ul className="m-4 lg:m-10 md:m-10">
            <li className="m-5">FAQ</li>
            <li className="m-5">Media Centre</li>
            <li className="m-5">Privacy</li>
            <li className="m-5">Speed Test</li>
          </ul>
        </div>
        <div className="flex flex-col w-[100%]">
          <ul className="m-4 lg:m-10 md:m-10">
            <li className="m-5">Help Center</li>
            <li className="m-5">Terms of Use</li>
            <li className="m-5">Cookie Preferences</li>
            <li className="m-5">Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <div>
          <a
            href=" https://www.facebook.com/profile.php?id=100023475517573&mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="text-white text-3xl m-3" />
          </a>
          <a
            href="https://instagram.com/vikas6051sharma?igshid=ZDdkNTZiNTM="
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="text-white text-3xl m-3" />
          </a>
          <a
            href="https://twitter.com/vikas1141sharma?t=Os21udqMYyhYik3WJOvUCA&s=08"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="text-white text-3xl m-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/vikas-sharma-321055224"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="text-white text-3xl m-3" />
          </a>
        </div>
        <span className="text-white text-sm mb-10">@copywrite-2023</span>
      </div>
    </div>
  );
};

export default Footer;
