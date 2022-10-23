import React, { useEffect, useState } from "react";
// import LoremIpsum from "react-lorem-ipsum";

import AnnouncementsItem from "./AnnouncementsItem";

import classes from "./AnnouncementsList.module.css";

const AnnouncementsList = () => {
  const [announcements, setAnnouncements] = useState([]);

  const fetchAnnouncements = async () => {
    let response = await fetch(
      "https://dnu-news-default-rtdb.europe-west1.firebasedatabase.app/announcements.json"
    );

    const data = await response.json();

    setAnnouncements(Object.entries(data));
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Announcements | All announcements</h1>
      <div>
        {announcements.map((element) => (
          <AnnouncementsItem
            key={element[1].title}
            title={element[1].title}
            text={element[1].text}
          />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsList;
