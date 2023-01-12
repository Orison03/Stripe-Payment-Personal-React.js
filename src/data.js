import {
  FaCreditCard,
  FaBook,
  FaBriefcase,
  FaCreativeCommonsNc,
  FaAmericanSignLanguageInterpreting,
  FaAward,
  FaBurn,
  FaBolt,
  FaCalendarDay,
  FaBullhorn,
  FaChalkboardTeacher,
  FaDollyFlatbed,
  FaCubes,
  FaFax,
  FaStripe,
} from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", icon: <FaCreditCard />, url: "/products" },
      { label: "billing", icon: <FaCreativeCommonsNc />, url: "/billing" },
      {
        label: "connect",
        icon: <FaAmericanSignLanguageInterpreting />,
        url: "/connect",
      },
      { label: "element", icon: <FaAward />, url: "/element" },
    ],
  },
  {
    page: "solutions",
    links: [
      { label: "identity", icon: <FaBurn />, url: "/identity" },
      { label: "checkout", icon: <FaBolt />, url: "/checkout" },
    ],
  },
  {
    page: "resources",
    links: [
      { label: "ecommerce", icon: <FaCalendarDay />, url: "/products" },
      { label: "support plan", icon: <FaBullhorn />, url: "/products" },
      { label: "jobs", icon: <FaChalkboardTeacher />, url: "/products" },
      { label: "news room", icon: <FaDollyFlatbed />, url: "/products" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "documtation", icon: <FaBook />, url: "/products" },
      { label: "API status", icon: <FaCubes />, url: "/products" },
      { label: "changelog", icon: <FaFax />, url: "/products" },
      { label: "build stripe", icon: <FaStripe />, url: "/products" },
    ],
  },
];

export default sublinks;
