import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";
const SocialIcons: React.FC = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://fb.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://youtube.com">
          <FaYoutube />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
