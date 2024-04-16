import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const socialLinks = [
    {
        icon:  <FaInstagram />,
        link: function(){
            window.open("https://www.instagram.com/inappsolutions/", "_blank");
        }
    },
    {
        icon:  <FaTwitter />,
        link: function(){
            window.open("https://twitter.com/InAppSolutions", "_blank");
        }
    },
    {
        icon:  <FaFacebookF />,
        link: function(){
            window.open("https://www.facebook.com/Inappsolutions", "_blank");
        }
    },
    {
        icon: <FaLinkedinIn />,
        link: function(){
            window.open("https://www.linkedin.com/company/inappsolutions", "_blank");
        }
    }
]