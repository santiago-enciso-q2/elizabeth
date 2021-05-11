import courseImage from "../static/images/icons/courses.svg";
import tutorialsImage from "../static/images/icons/tutorials.svg";
import pricingImage from "../static/images/icons/pricing.svg";
import searchImage from "../static/images/icons/search.svg";
import accountImage from "../static/images/icons/account.svg";

export const menuData = [
  { title: "Courses", icon: `${courseImage}`, link: "/courses" },
  { title: "Tutorials", icon: `${tutorialsImage}`, link: "/tutorials" },
  { title: "Pricing", icon: `${pricingImage}`, link: "/Pricing" },
  { title: "", icon: `${searchImage}`, link: "/search" },
  { title: "", icon: `${accountImage}`, link: "/account" },
];
