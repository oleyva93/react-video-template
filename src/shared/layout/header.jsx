import { memo, useState } from "react";
import {
  Avatar,
  Grid,
  IconButton,
  Menu,
  styled,
  Tooltip,
  alpha,
  MenuItem,
  Divider,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import GlobalSearch from "../components/global-search";

const Header = ({ onCollapse }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav
      className="flex-no-wrap px-6 min-h-[55px] max-h-[55px] relative flex w-full items-center justify-between border-b border-[#3e3e3e] dark-gbl-border bg-gray-100 dark:bg-zinc-800 py-2 shadow-md shadow-black/5 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <Grid container>
        <Grid xs={3} item>
          <IconButton
            className="!text-white"
            aria-label="upload picture"
            component="label"
            onClick={onCollapse}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid xs={6} display="flex" justifyContent="space-around">
          <GlobalSearch />
        </Grid>
        <Grid xs={3} display="flex" justifyContent="end">
          <Tooltip title="vlad.safin@lighthousetech.io.com" placement="left">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>V</Avatar>
            </IconButton>
          </Tooltip>
          <StyledMenu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <AccountBoxIcon />
              Account
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <SettingsIcon />
              Settings
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => {
                handleClose();
              }}
              disableRipple
            >
              <LogoutIcon />
              Logout
            </MenuItem>
          </StyledMenu>
        </Grid>
      </Grid>
    </nav>
  );
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    background: "#1e1e1e",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

export default memo(Header);
