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
export const AdminSidebarData = [
  {
    title: "Overview",
    subTitle: [
      { title: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
      {
        title: "Manage",
        icon: <Manage />,
        link: "/manage",
        subNav: [{ title: "Customer", link: "/manage/customer" }],
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

export const Entries = [
  {
    name: "Bolaji Oladele",
    status: "Successful",
    amount: "N2,012,1234.23",
    type: "Bills",
    ref: "12432322342",
    date: "01-12-2022",
  },
  {
    name: "Bolaji Oladele",
    status: "Failed",
    amount: "N2,012,1234.23",
    type: "Loan",
    ref: "12432322342",
    date: "01-12-2022",
  },
  {
    name: "Bolaji Oladele",
    status: "Failed",
    amount: "N2,012,1234.23",
    type: "Loan",
    ref: "12432322342",
    date: "01-12-2022",
  },
  {
    name: "Bolaji Oladele",
    status: "Successful",
    amount: "N2,012,1234.23",
    type: "Bills",
    ref: "12432322342",
    date: "01-12-2022",
  },
  {
    name: "Bolaji Oladele",
    status: "Successful",
    amount: "N2,012,1234.23",
    type: "Bills",
    ref: "12432322342",
    date: "01-12-2022",
  },
  {
    name: "Bolaji Oladele",
    status: "Failed",
    amount: "N2,012,1234.23",
    type: "Loan",
    ref: "12432322342",
    date: "01-12-2022",
  },
  {
    name: "Bolaji Oladele",
    status: "Successful",
    amount: "N2,012,1234.23",
    type: "Bills",
    ref: "12432322342",
    date: "01-12-2022",
  },

  {
    name: "Bolaji Oladele",
    status: "Successful",
    amount: "N2,012,1234.23",
    type: "Bills",
    ref: "12432322342",
    date: "01-12-2022",
  },

  {
    name: "Bolaji Oladele",
    status: "Failed",
    amount: "N2,012,1234.23",
    type: "Loan",
    ref: "12432322342",
    date: "01-12-2022",
  },

  {
    name: "Bolaji Oladele",
    status: "Successful",
    amount: "N2,012,1234.23",
    type: "Bills",
    ref: "12432322342",
    date: "01-12-2022",
  },
  {
    name: "Bolaji Oladele",
    status: "Successful",
    amount: "N2,012,1234.23",
    type: "Bills",
    ref: "12432322342",
    date: "01-12-2022",
  },
];

export const Customers = [
  {
    name: "Bolaji Oladele",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
    date: "23 Jun 2022",
  },
  {
    name: "Adewunmi Emmanuel",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
    date: "03 Aug 2022",
  },
  {
    name: "Olalekan Peter",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
    date: "23 Jun 2022",
  },
  {
    name: "Bamidele Olawale",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
    date: "03 Aug 2022",
  },
  {
    name: "Bamidele Olawale",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
    date: "23 Jun 2022",
  },
  {
    name: "Bamidele Olawale",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
    date: "14 Dec 2012",
  },
  {
    name: "Bolaji Oladele",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
    date: "23 Jun 2022",
  },
];

export const Orders = [
  {
    name: "Bolaji Oladele",
    vendor: "Slot",
    price: "N100,345",
    installment: "12 months",
    date: "23 Jun 2022",
    interest: "10%",
    status: "Active",
    ref: "12432322342",
  },
  {
    name: "Bolaji Oladele",
    vendor: "Apple",
    price: "N100,345",
    installment: "12 months",
    date: "23 Jun 2022",
    interest: "10%",
    status: "Ordered",
    ref: "12432322342",
  },
  {
    name: "Bolaji Oladele",
    vendor: "Samsung",
    price: "N100,345",
    installment: "12 months",
    date: "23 Jun 2022",
    interest: "10%",
    status: "Delivered",
    ref: "12432322342",
  },
  {
    name: "Bolaji Oladele",
    vendor: "Samsung",
    price: "N100,345",
    installment: "12 months",
    date: "23 Jun 2022",
    interest: "10%",
    status: "Complete",
    ref: "12432322342",
  },
  {
    name: "Bolaji Oladele",
    vendor: "Apple",
    price: "N100,345",
    installment: "12 months",
    date: "23 Jun 2022",
    interest: "10%",
    status: "Active",
    ref: "12432322342",
  },
  {
    name: "Bolaji Oladele",
    vendor: "Samsung",
    price: "N100,345",
    installment: "12 months",
    date: "23 Jun 2022",
    interest: "10%",
    status: "Active",
    ref: "12432322342",
  },
];

export const Transactions = [
  {
    name: "Adedeji K...",
    subject: "Inability to Liquidate Loan: ",
    ticket: "ref324253gdg..",
    phone: "07050395563",
    status: "Completed",
    date: "28 September 2022 | 04:20 pm",
  },
  {
    name: "Adedeji K...",
    subject: "Inability to Liquidate Loan: ",
    ticket: "ref324253gdg..",
    phone: "07050395563",
    status: "Pending",
    date: "28 September 2022 | 04:20 pm",
  },
  {
    name: "Adedeji K...",
    subject: "Inability to Liquidate Loan: ",
    ticket: "ref324253gdg..",
    phone: "07050395563",
    status: "Completed",
    date: "28 September 2022 | 04:20 pm",
  },
  {
    name: "Adedeji K...",
    subject: "Inability to Liquidate Loan: ",
    ticket: "ref324253gdg..",
    phone: "07050395563",
    status: "Completed",
    date: "28 September 2022 | 04:20 pm",
  },
  {
    name: "Adedeji K...",
    subject: "Inability to Liquidate Loan: ",
    ticket: "ref324253gdg..",
    phone: "07050395563",
    status: "Failed",
    date: "28 September 2022 | 04:20 pm",
  },
];

export const Reports = [
  {
    title: "Loans Generated Report",
    generate: "Adedeji K...",
    ref: "ref324253gdg..",
    status: "Downloaded",
    date: "28 September 2022 | 04:20 pm",
  },
  {
    title: "Loans Generated Report",
    generate: "Adedeji K...",
    ref: "ref324253gdg..",
    status: "Draft",
    date: "28 September 2022 | 04:20 pm",
  },
  {
    title: "Loans Generated Report",
    generate: "Adedeji K...",
    ref: "ref324253gdg..",
    status: "Downloaded",
    date: "28 September 2022 | 04:20 pm",
  },
  {
    title: "Loans Generated Report",
    generate: "Adedeji K...",
    ref: "ref324253gdg..",
    status: "Downloaded",
    date: "28 September 2022 | 04:20 pm",
  },
  {
    title: "Loans Generated Report",
    generate: "Adedeji K...",
    ref: "ref324253gdg..",
    status: "Downloaded",
    date: "28 September 2022 | 04:20 pm",
  },
];

export const Admin = [
  {
    name: "Bolaji Oladele",
    status: "Active",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
  },
  {
    name: "Adewunmi Emmanuel",
    status: "Active",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
  },
  {
    name: "Olalekan Peter",
    status: "Active",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
  },
  {
    name: "Bamidele Olawale",
    status: "Active",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
  },
  {
    name: "Bamidele Olawale",
    status: "Active",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
  },
  {
    name: "Bamidele Olawale",
    status: "Active",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
  },
  {
    name: "Bamidele Olawale",
    status: "Active",
    mail: "bolajiladele@gmail",
    phone: "07050395563",
  },
];

export const Investment = [
  {
    name: "Bolaji Oladele",
    amount: "N2,012,1234.23",
    yield: "N201,1234.23",
    growth: "Lorem",
    rate: "23 Jun 2022",
    tenure: "12 months",
    type: "Lorem Ip",
    status: "Active",
    ref: "12432322342",
  },
  {
    name: "Bolaji Oladele",
    amount: "N2,012,1234.23",
    yield: "N201,1234.23",
    growth: "Lorem",
    rate: "23 Jun 2022",
    tenure: "12 months",
    type: "Lorem Ip",
    status: "Active",
    ref: "12432322342",
  },
  {
    name: "Bolaji Oladele",
    amount: "N2,012,1234.23",
    yield: "N201,1234.23",
    growth: "Lorem",
    rate: "23 Jun 2022",
    tenure: "12 months",
    type: "Lorem Ip",
    status: "Active",
    ref: "12432322342",
  },
  {
    name: "Bolaji Oladele",
    amount: "N2,012,1234.23",
    yield: "N201,1234.23",
    growth: "Lorem",
    rate: "23 Jun 2022",
    tenure: "12 months",
    type: "Lorem Ip",
    status: "Complete",
    ref: "12432322342",
  },
  {
    name: "Bolaji Oladele",
    amount: "N2,012,1234.23",
    yield: "N201,1234.23",
    growth: "Lorem",
    rate: "23 Jun 2022",
    tenure: "12 months",
    type: "Lorem Ip",
    status: "Active",
    ref: "12432322342",
  },
  {
    name: "Bolaji Oladele",
    amount: "N2,012,1234.23",
    yield: "N201,1234.23",
    growth: "Lorem",
    rate: "23 Jun 2022",
    tenure: "12 months",
    type: "Lorem Ip",
    status: "Active",
    ref: "12432322342",
  },
];
