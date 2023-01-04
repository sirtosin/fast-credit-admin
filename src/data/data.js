import DashboardIcon from "../components/svgComponents/dashboard/dashboard";
import Manage from "../components/svgComponents/manage/manage";
import Wallet from "../components/svgComponents/wallet/wallet";
import Loans from "../components/svgComponents/loans/loans";
import Investments from "../components/svgComponents/investments/investments";
import Vas from "../components/svgComponents/vas/vas";
import Bnpl from "../components/svgComponents/bnpl/bnpl";
import Card from "../components/svgComponents/card/card";
import Help from "../components/svgComponents/help/help";
export const SidebarData = [
  {
    title: "Overview",
    subTitle: [
      { title: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
      {
        title: "Manage",
        icon: <Manage />,
        link: "/manage",
        subNav: [
          { title: "Admin", link: "/manage/admin" },
          { title: "Customer", link: "/manage/customer" },
        ],
      },
    ],
  },
  {
    title: "Management",
    subTitle: [
      { title: "Wallet", icon: <Wallet />, link: "/wallet" },
      {
        title: "Loans",
        icon: <Loans />,
        link: "/loans",
        subNav: [
          { title: "Work Loans", link: "/workloans" },
          { title: "Health Loans", link: "/healthloans" },
        ],
      },
      { title: "Investments", icon: <Investments />, link: "/investments" },
      { title: "VAS", icon: <Vas />, link: "/vas" },
      { title: "BNPL", icon: <Bnpl />, link: "/bnpl" },
      { title: "Cards", icon: <Card />, link: "/cards" },
      { title: "Help & Support", icon: <Help />, link: "/help" },
      { title: "Reports", icon: <Help />, link: "/reports" },
    ],
  },
];
