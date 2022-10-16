import React from "react";
// import LoremIpsum from "react-lorem-ipsum";

import AnnouncementsItem from "./AnnouncementsItem";

import classes from "./AnnouncementsList.module.css";

const DUMMY_ANNOUNCEMENTS = [
  {
    title: "Announcement 1",
    text: "Few words with no sense plus another word in string. Few words with no sense plus another word in string.",
    // text: <LoremIpsum />,
  },
  {
    title: "Announcement 2",
    text: "Few words with no sense plus another word in string. Few words with no sense plus another word in string.",
  },
  {
    title: "Announcement 3",
    text: "Few words with no sense plus another word in string. Few words with no sense plus another word in string.",
  },
  {
    title: "Announcement 4",
    text: "Few words with no sense plus another word in string. Few words with no sense plus another word in string.",
  },
  {
    title: "Announcement 5",
    text: "Few words with no sense plus another word in string. Few words with no sense plus another word in string.",
  },
  {
    title: "Announcement 6",
    text: "Few words with no sense plus another word in string. Few words with no sense plus another word in string.",
  },
];

const AnnouncementsList = () => {
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Announcements | All announcements</h1>
      <div>
        {DUMMY_ANNOUNCEMENTS.map((element) => (
          <AnnouncementsItem
            key={element.title}
            title={element.title}
            text={element.text}
          />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsList;
