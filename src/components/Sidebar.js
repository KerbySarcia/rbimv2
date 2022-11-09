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
          color="primary"
          orientation="vertical"
          exclusive
          value={alignment}
          onChange={handleAlignment}
        >
          <LightTooltip
            value="home"
            aria-label="home"
            TransitionComponent={Zoom}
            title="Home"
            placement="right"
          >
            <ToggleButton>
              <HomeIcon />
            </ToggleButton>
          </LightTooltip>

          <LightTooltip
            title="Individual Record"
            placement="right"
            value="photos"
            aria-label="photos"
            TransitionComponent={Zoom}
          >
            <ToggleButton>
              <LibraryAddIcon />
            </ToggleButton>
          </LightTooltip>

          <LightTooltip
            title="Household Record"
            placement="right"
            value="house"
            aria-label="house"
            TransitionComponent={Zoom}
          >
            <ToggleButton>
              <MapsHomeWorkIcon />
            </ToggleButton>
          </LightTooltip>

          <LightTooltip
            title="Reports"
            placement="right"
            value="table"
            aria-label="table"
            TransitionComponent={Zoom}
          >
            <ToggleButton>
              <BackupTableIcon />
            </ToggleButton>
          </LightTooltip>
        </ToggleButtonGroup>
      </div>
      <div className="Sidebar__bottom" placement="right">
        <ToggleButtonGroup orientation="vertical">
          <LightTooltip
            title="Account"
            placement="right"
            TransitionComponent={Zoom}
          >
            <ToggleButton>
              <AccountCircleIcon />
            </ToggleButton>
          </LightTooltip>

          <LightTooltip
            title="Logout"
            placement="right"
            TransitionComponent={Zoom}
          >
            <ToggleButton>
              <LogoutIcon />
            </ToggleButton>
          </LightTooltip>

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
