import React, { useEffect, useState } from "react";
import "./Cards.css";
import TinderCard from "react-tinder-card";
import database from "../firebase";

function Cards() {
  const [people, setPeople] = useState([
    // {
    //   name: "Trey Anastasio",
    //   url:
    //     "https://phish.com/wp-content/uploads/2020/07/19940708ph_great_woods_trey_narration_VHS_screenshot_02_crop.jpg",
    // },
  ]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinder__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name} </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
