import { GrHomeRounded } from "react-icons/gr";
import { IoBagOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { BsCollectionPlay } from "react-icons/bs";

export const mobileIcons = [
  { Icon: GrHomeRounded, href: "/", label: "Home" },
  { Icon: IoBagOutline, href: "/", label: "Store" },
  { Icon: MdLiveTv, href: "/", label: "Live TV" },
  {
    Icon: PiSquaresFour,
    label: "Categories",
    subCategories: [
      {
        label: "Genres",
        links: [{ label: "Action and adventure", href: "/" }, {label: "Anime", href: "/"}],
      },
      {
        label: "Featured Collections",
        links: [{ label: "Sports", href: "/" }, { label: "Home Premiere", href: "/" }],
      },
    ],
  },
  { Icon: BsCollectionPlay, href: "/", label: "My Stuff" },
];
