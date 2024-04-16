import { AiFillAndroid, AiFillApple, AiFillHtml5 } from "react-icons/ai";
import { DiAws } from "react-icons/di";
import {
  FaAngular,
  FaNode,
  FaReact,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoVue } from "react-icons/io5";
import {
  SiAmazondynamodb,
  SiDigitalocean,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiStrapi,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const mobile = [
  {
    title: "Android",
    icon: <AiFillAndroid size={50} className="logo" color="#252B33" />,
  },
  {
    title: "Ios",
    icon: <AiFillApple size={50} className="logo" color="#252B33" />,
  },
  {
    title: "React Native",
    icon: <FaReact size={50} className="logo" color="#252B33" />,
  },
];

const frontend = [
  {
    title: "Angular",
    icon: <FaAngular size={50} className="logo" color="#252B33" />,
  },
  {
    title: "React js",
    icon: <FaReact size={50} className="logo" color="#252B33" />,
  },
  {
    title: "Vue js",
    icon: <IoLogoVue size={50} className="logo" color="#252B33" />,
  },
  {
    title: "Next js",
    icon: <TbBrandNextjs size={50} className="logo" color="#252B33" />,
  },
  {
    title: "Html5",
    icon: <AiFillHtml5 size={50} className="logo" color="#252B33" />,
  },
];

const database = [
  {
    title: "Dynamodb",
    icon: <SiAmazondynamodb size={40} className="logo" color="#252B33" />,
  },
  {
    title: "MySQL",
    icon: <GrMysql size={40} className="logo" color="#252B33" />,
  },
  {
    title: "Postgresql",
    icon: <SiPostgresql size={40} className="logo" color="#252B33" />,
  },
  {
    title: "Firebase",
    icon: <SiFirebase size={40} className="logo" color="#252B33" />,
  },
  {
    title: "Mongodb",
    icon: <SiMongodb size={40} className="logo" color="#252B33" />,
  },
];

const backend = [
  {
    title: "Node js",
    icon: <FaNode size={70} className="logo" color="#252B33" />,
  },
  {
    title: "Express js",
    icon: <SiExpress size={70} className="logo" color="#252B33" />,
  },
];

const cms = [
  {
    title: "Strapi",
    icon: <SiStrapi size={50} className="logo" color="#252B33" />,
  },
  {
    title: "Graphql",
    icon: <SiGraphql size={50} className="logo" color="#252B33" />,
  },
];

const infraDevops = [
  {
    title: "Aws",
    icon: <DiAws size={60} className="logo" color="#252B33" />,
  },
  {
    title: "Digital ocean",
    icon: <SiDigitalocean size={60} className="logo" color="#252B33" />,
  },
];

const website = [
  {
    title: "Wordpress",
    icon: <FaWordpress size={50} className="logo" color="#252B33" />,
  },
  {
    title: "Shopify",
    icon: <FaShopify size={50} className="logo" color="#252B33" />,
  },
];

const technologiesTab = [
  {
    title: "Mobile",
  },
  {
    title: "Front end",
  },
  {
    title: "Database",
  },
  {
    title: "Back end",
  },
  {
    title: "CMS",
  },
  {
    title: "Infra and devops",
  },
  {
    title: "Website",
  },
];

export {
  mobile,
  database,
  backend,
  frontend,
  infraDevops,
  website,
  cms,
  technologiesTab,
};
