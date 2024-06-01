import React from "react";
import HelpItem from "../../../component/Help/HelpItem";
const SearchItems = [
  {
    children: "Earnings",
    item: <HelpItem type="Fixtures" children={"Earnings"} />,
  },
  {
    children: "Guides",
    item: <HelpItem type="Fixtures" children={"Guides"} />,
  },
  {
    children: "Item Delivery",
    item: <HelpItem type="Fixtures" children={"Item Delivery"} />,
  },
  {
    children: "Safety",
    item: <HelpItem type="Fixtures" children={"Safety"} />,
  },
  {
    children: "Appointments",
    item: <HelpItem type="Fixtures" children={"Appointments"} />,
  },
  {
    children: "Support",
    item: <HelpItem children={"Support"} />,
  },
  {
    children: "Call support",
    item: <HelpItem type="Call support" children={"Call support"} />,
  },
  {
    children: "Unable to sign in",
    item: <HelpItem type="forward" children={"Unable to sign in"} />,
  },
  {
    children: "Remove vehicle",
    item: (
      <HelpItem
        type="forward"
        children={"Remove vehice"}
        navigateTo="Remove-Vehicle"
      />
    ),
  },
  {
    children: "Changing account settings",
    item: (
      <HelpItem
        type="forward"
        children={"Changing account settings"}
        navigateTo="ChangeAcc-Setting"
      />
    ),
  },
  {
    children: "Trips",
    item: <HelpItem children={"Trips"} />,
  },
  {
    children: "What iOS version do I need to accept trips?",
    item: (
      <HelpItem
        type="forward"
        children={"What iOS version do I need to accept trips?"}
      />
    ),
  },
  {
    children: "Checking the status of your driver referrals",
    item: (
      <HelpItem
        type="forward"
        children={"Checking the status of your driver referrals"}
      />
    ),
  },
  {
    children: "Tracking acceptance and cancellation rates",
    item: (
      <HelpItem
        type="forward"
        children={"Tracking acceptance and cancellation rates"}
        navigateTo="Tracking-Acceptance"
      />
    ),
  },
  {
    children: "Understanding trip ratings",
    item: <HelpItem type="forward" children={"Understanding trip ratings"} />,
  },
  {
    children: "Support",
    item: <HelpItem children={"Support"} />,
  },
  {
    children: "Account & App",
    item: <HelpItem children={"Account & App"} />,
  },
];

export default SearchItems;
