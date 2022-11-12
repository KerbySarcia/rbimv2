import React, { useState } from "react";
import "../style/Sidebar.css";
import Logo from "../images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import LogoutIcon from "@mui/icons-material/Logout";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 13,
    position: "relative",
    left: "0.5rem",
  },
}));

const Sidebar = () => {
  const [alignment, setAlignment] = useState("home");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div className="Sidebar">
      <div className="Sidebar__top">
        <img src={Logo} alt="logo" />
        <ToggleButtonGroup
          color="secondary"
          orientation="vertical"
          exclusive
          value={alignment}
          onChange={handleAlignment}
        >
          <ToggleButton value="home" aria-label="home">
            <LightTooltip
              TransitionComponent={Zoom}
              title="Home"
              placement="right"
            >
              <HomeIcon />
            </LightTooltip>
          </ToggleButton>

          <ToggleButton value="photos" aria-label="photos">
            <LightTooltip
              title="Individual Record"
              placement="right"
              TransitionComponent={Zoom}
            >
              <LibraryAddIcon />
            </LightTooltip>
          </ToggleButton>

          <ToggleButton value="house" aria-label="house">
            <LightTooltip
              title="Household Record"
              placement="right"
              TransitionComponent={Zoom}
            >
              <MapsHomeWorkIcon />
            </LightTooltip>
          </ToggleButton>

          <ToggleButton value="table" aria-label="table">
            <LightTooltip
              title="Reports"
              placement="right"
              TransitionComponent={Zoom}
            >
              <BackupTableIcon />
            </LightTooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="Sidebar__bottom" placement="right">
        <ToggleButtonGroup orientation="vertical">
          <ToggleButton>
            <LightTooltip
              title="Account"
              placement="right"
              TransitionComponent={Zoom}
            >
              <AccountCircleIcon />
            </LightTooltip>
          </ToggleButton>

          <ToggleButton>
            <LightTooltip
              title="Logout"
              placement="right"
              TransitionComponent={Zoom}
            >
              <LogoutIcon />
            </LightTooltip>
          </ToggleButton>

          <LightTooltip
            title="Settings"
            placement="right"
            TransitionComponent={Zoom}
          >
            <ToggleButton>
              <SettingsIcon />
            </ToggleButton>
          </LightTooltip>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default Sidebar;
