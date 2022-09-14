import React, { useEffect, useState } from "react";
import "./EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { IconButton } from "@mui/material";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EmailRow from "./EmailRow";
import { collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const data = await getDocs(collection(db, "emails"));
      const emailsList = data.docs.map((doc) => ({ ...doc.data(), id:doc.id}));
      console.log(emailsList)
      setEmails(emailsList)
    };
    fetchEmails()
  });

  console.log(emails)

  return (
    <div className="EmailList">
      <div className="emailList__settings">
        <div className="emailList__settings--left">
          <IconButton>
            <CheckBoxOutlineBlankIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <RefreshIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="emailList__settings--right">
          <h2 className="emailNumber">1-50 of 7,777</h2>

          <IconButton>
            <KeyboardArrowLeftIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <KeyboardIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" selected />
        <Section Icon={LocalOfferIcon} title="Promotions" />
        <Section Icon={PeopleAltIcon} title="Social" />
      </div>

      <div className="emailList__list">
        {emails.map( ({ id, to, subject, message, timestamp })  => (
          <EmailRow
          id={id}
          key={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()} 
          />
        ))}

      </div>
    </div>
  );
}

export default EmailList;
