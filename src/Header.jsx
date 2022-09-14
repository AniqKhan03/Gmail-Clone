import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

function Header() {
  const user = useSelector(selectUser);
  const history = useHistory()

  const dispatch = useDispatch();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout);
        console.log("Logged out")
        history.go(0)
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail logo"
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search in emails" />
        <TuneIcon />
      </div>

      <div className="header__right">
        <QuestionMarkIcon />
        <SettingsIcon />
        <AppsIcon />
        <Avatar onClick={signOutUser} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
