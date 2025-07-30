import React from "react";
import Layout from "./Layout/Layout";
import "./One.css";
const One = () => {
  return (
    <Layout>
      <div className="one-container">
        <div className="center-div">
          <div className="l-container">
            <div className="b-game-card">
              <div
                className="b-game-card__cover"
                style={{
                  backgroundImage:
                    "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg)",
                }}
              />
            </div>
            <div className="b-game-card">
              <div
                className="b-game-card__cover"
                style={{
                  backgroundImage:
                    "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_2.jpg)",
                }}
              />
            </div>
            <div className="b-game-card">
              <div
                className="b-game-card__cover"
                style={{
                  backgroundImage:
                    "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg)",
                }}
              />
            </div>
            <div className="b-game-card">
              <div
                className="b-game-card__cover"
                style={{
                  backgroundImage:
                    "url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_4.jpg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      
    </Layout>
  );
};

export default One;
