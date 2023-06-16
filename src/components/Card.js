import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="Card">
      {data.map((data) => (
        <a
          href={data.links.download}
          rel="noreferrer"
          key={data.id}
          target="_blank"
        >
          <div
            style={{
              backgroundImage: `url(${data.urls.regular})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minWidth: "250px",
              height: "200px",
            }}
          ></div>
        </a>
      ))}
    </div>
  );
};

export default Card;
