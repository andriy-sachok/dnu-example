import React, { useEffect, useState } from "react";
// import LoremIpsum from "react-lorem-ipsum";

import AnnouncementsItem from "./AnnouncementsItem";
import Loading from "../UI/Loading";
import ErrorComponent from "../UI/ErrorComponent";

import classes from "./AnnouncementsList.module.css";

const AnnouncementsList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchAnnouncements = async () => {
    setIsLoading(true);

    try {
      let response = await fetch(
        "https://dnu-news-default-rtdb.europe-west1.firebasedatabase.app/announcements.json"
      );

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`Error! Can't get data from database.`);
      }

      const data = await response.json();

      setIsLoading(false);

      setAnnouncements(Object.entries(data));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Announcements | All announcements</h1>
      <div>
        {error && <ErrorComponent text={error} />}
        {isLoading ? (
          <Loading />
        ) : (
          announcements
            .sort((a, b) => a[1].title.localeCompare(b[1].title))
            .map((element) => (
              <AnnouncementsItem
                key={element[1].title}
                title={element[1].title}
                text={element[1].text}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default AnnouncementsList;
