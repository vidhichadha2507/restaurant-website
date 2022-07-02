import React from "react";
import { urlFor } from "../lib/client";
import "../styles/card.module.css";
import Link from "next/link";
const Card = ({ name, image, price, slug, type }) => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const item = localStorage.setItem("path", type);
  }
  console.log(name);
  return (
    <Link href={`/product/${slug.current}`}>
      <div className="cards">
        <div className="cards-header">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="cards-img"
          />
        </div>
        <div className="cards-body">
          <h4>{name}</h4>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
