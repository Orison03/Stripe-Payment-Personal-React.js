import React from "react";
import {
  FaRegMoneyBillAlt,
  FaCreativeCommonsBy,
  FaCloudscale,
  FaWordpressSimple,
  FaBusinessTime,
  FaRegNewspaper,
  FaCcStripe,
  FaSistrix,
} from "react-icons/fa";
import {
  AiOutlineGlobal,
  AiOutlineApi,
  AiOutlinePieChart,
} from "react-icons/ai";
import { SiElementary, SiMarketo, SiFoursquarecityguide } from "react-icons/si";
import {
  HiDocumentDuplicate,
} from "react-icons/hi";
import { BiArchive, BiCog, BiDonateHeart } from "react-icons/bi";
import {
  MdPermIdentity,
  MdPayment,
  MdOutlineCropLandscape,
} from "react-icons/md";

const sublinks = [
  {
    page: "products",
    links: [
      { label: "payments", icons: <MdPayment />, url: "/payment" },
      { label: "billing", icons: <FaRegMoneyBillAlt />, url: "/billing" },
      { label: "checkout", icons: <FaSistrix />, url: "/checkout" },
      { label: "element", icons: <SiElementary />, url: "/element" },
      { label: "identity", icons: <MdPermIdentity />, url: "/identity" },
      { label: "connect", icons: <BiCog />, url: "/connect" },
    ],
  },
  {
    page: "solutions",
    links: [
      { label: "ecommerce", icons: <FaCreativeCommonsBy />, url: "/ecommerce" },
      { label: "platform", icons: <FaCloudscale />, url: "/platform" },
      { label: "wordpress", icons: <FaWordpressSimple />, url: "/wordpress" },
      { label: "marketplace", icons: <SiMarketo />, url: "/marketplace" },
      { label: "crypto", icons: <MdPayment />, url: "/crypto" },
      {
        label: "global businesses",
        icons: <AiOutlineGlobal />,
        url: "/globalbusinesses",
      },
    ],
  },
  {
    page: "developers",
    links: [
      {
        label: "documentation",
        icons: <HiDocumentDuplicate />,
        url: "/documentation",
      },
      { label: "full API", icons: <AiOutlineApi />, url: "/api" },
      { label: "API status", icons: <BiArchive />, url: "/wordpress" },
      {
        label: "API changelog",
        icons: <AiOutlinePieChart />,
        url: "/apichangelog",
      },
      { label: "build stripe app", icons: <FaCcStripe />, url: "/build" },
      {
        label: "guides",
        icons: <SiFoursquarecityguide />,
        url: "/guide",
      },
    ],
  },
  {
    page: "resources",
    links: [
      {
        label: "support center",
        icons: <BiDonateHeart />,
        url: "/supportcenter",
      },
      {
        label: "support plan",
        icons: <MdOutlineCropLandscape />,
        url: "/plan",
      },
      { label: "jobs", icons: <FaBusinessTime />, url: "/time" },
      {
        label: "news room",
        icons: <FaRegNewspaper />,
        url: "/room",
      },
    ],
  },
  {
    page: "pricing",
  },
];

export default sublinks;
