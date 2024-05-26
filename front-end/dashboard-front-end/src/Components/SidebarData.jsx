import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import SettingsIcon from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

export const SidebarData = [

  {
    title: "User",
    icon: <PersonOutlineIcon />,
    link: "/users",
  },
  {
    title: "vehicle",
    icon: <DriveEtaIcon />,
    link: "/vehicle",
  },
  {
    title: "Booking",
    icon: <LocationSearchingIcon />,
    link: "/booking",
  },
];
