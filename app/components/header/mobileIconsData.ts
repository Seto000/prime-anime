import { GrHomeRounded } from "react-icons/gr";
import { IoBagOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { BsCollectionPlay } from "react-icons/bs";

import { subCategories } from "./subCategoriesData";

export const mobileIcons = [
  { Icon: GrHomeRounded, href: "/", label: "Home" },
  { Icon: IoBagOutline, href: "/", label: "Store" },
  { Icon: MdLiveTv, href: "/", label: "Live TV" },
  {
    Icon: PiSquaresFour,
    label: "Categories",
    subCategories,
  },
  { Icon: BsCollectionPlay, href: "/", label: "My Stuff" },
];
