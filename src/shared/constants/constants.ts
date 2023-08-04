import {
  AllProductsIcon,
  EyeglassIcon,
  FaceMaskIcon,
  HomeIcon,
  LotionIcon,
  MakeupIcon,
  MascaraIcon,
  PowderIcon,
  PumpIcon,
  ThermoMeterIcon,
  TrendIcon,
  TrophyIcon,
  WheelIcon,
} from "../icons/category-icons";
import { ShoppingBagOutlined } from "@mui/icons-material";

export const HOME_CATEGORIES = [
  {
    id: "1",
    name: "Home",
    icon: HomeIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCategories: [],
  },
  {
    id: "2",
    name: "Popular Product",
    icon: TrophyIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCategories: [],
  },
  {
    id: "3",
    name: "Trending Product",
    icon: TrendIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCategories: [],
  },
  {
    id: "4",
    name: "All Product",
    icon: AllProductsIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCategories: [],
  },
  {
    id: "5",
    name: "Heath and Beauty",
    icon: MakeupIcon,
    link: "",

    subCategories: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "6",
    name: "Maskara",
    icon: MascaraIcon,
    link: "",
    subCategories: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "7",
    name: "Lotion",
    icon: LotionIcon,
    link: "",
    subCategories: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "8",
    name: "Makeup",
    icon: MakeupIcon,
    link: "",
    subCategories: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "9",
    name: "Powder",
    icon: PowderIcon,
    link: "",
    subCategories: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "10",
    name: "Face Mask",
    icon: FaceMaskIcon,
    link: "",
    subCategories: [
      {
        id: "1",
        name: "Beauty Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "2",
        name: "Medicine Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
      {
        id: "3",
        name: "Mackup Item",
        link: "https://bazaar.ui-lib.com/healthbeauty-shop",
      },
    ],
  },
  {
    id: "11",
    name: "Digital Thermometer",
    icon: ThermoMeterIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCategories: [],
  },
  {
    id: "12",
    name: "Oxyzen Pump",
    icon: PumpIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCategories: [],
  },
  {
    id: "13",
    name: "Lens Case Kit",
    icon: EyeglassIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCategories: [],
  },
  {
    id: "14",
    name: "Automotive",
    icon: WheelIcon,
    link: "https://bazaar.ui-lib.com/healthbeauty-shop",
    subCategories: [],
  },
];

export const DRAWER_WIDTH: number = 240;

export const PROFILE_GROUPS = ["Dashboard", "Account Settings"];
export const PROFILE_ITEMS = [
  {
    name: "Orders",
    icon: ShoppingBagOutlined,
    group: "Dashboard",
    route: "orders",
  },
  {
    name: "WishList",
    icon: ShoppingBagOutlined,
    group: "Dashboard",
    route: "wishlist",
  },
  {
    name: "Support Tickets",
    icon: ShoppingBagOutlined,
    group: "Dashboard",
    route: "support-tickets",
  },
  {
    name: "Profile Info",
    icon: ShoppingBagOutlined,
    group: "Account Settings",
    route: "",
  },
  {
    name: "Addresses",
    icon: ShoppingBagOutlined,
    group: "Account Settings",
    route: "addresses",
  },
  {
    name: "Payment Methods",
    icon: ShoppingBagOutlined,
    group: "Account Settings",
    route: "payment-methods",
  },
];
