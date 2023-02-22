import React from "react";

interface card {
  id: number;
  coverImg: string;
  stats: {
    rating: number;
    reviewCount: number;
  };
  location: string;
  title: string;
  price: number;
  openSpots: number;
}

export default function Card(props: card) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <img
        src={`./public/images/${props.coverImg}`}
        alt="kate zaferes"
        className="card-image"
      />
      {badgeText && (
        <div className="status">
          <span>{badgeText}</span>
        </div>
      )}

      <div className="card-info">
        <img src="public\images\star.png" alt="star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) · </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="price-from">From ${props.price}</span>/ person
      </p>
    </div>
  );
}
