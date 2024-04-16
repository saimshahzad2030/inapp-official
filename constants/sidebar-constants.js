import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const goLinkedin = () => {
    window.open("https://www.linkedin.com/company/Inappsolutions", "_blank");
  };
  const goFacebook = () => {
    window.open("https://www.facebook.com/inappsolutions", "_blank");
  };
  const goInstagram = () => {
    window.open("https://www.instagram.com/inappsolutions/", "_blank");
  };
  const goTwitter = () => {
    window.open("https://twitter.com/InAppSolutions", "_blank");
  };

export const socialItemsSectionOne = [
    {
        icon: <FaLinkedinIn />,
        link: goLinkedin
    },
    {
        icon:  <FaFacebookF />,
        link: goFacebook
    },
    {
        icon: <FaInstagram />,
        link: goInstagram
    }
];

export const socialItemsSectionTwo = [
    {
        icon: <FaInstagram />,
        link: goInstagram
    },
    {
        icon: <FaTwitter />,
        link: goTwitter
    },
    {
        icon: <FaFacebookF />,
        link: goFacebook
    },
    {
        icon: <FaLinkedinIn />,
        link: goLinkedin
    }
];
