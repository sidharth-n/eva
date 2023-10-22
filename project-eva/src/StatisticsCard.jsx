// StatisticsCard.js
import React from "react";
import "./StatisticsCard.css";

function StatisticsCard({ title, value }) {
  return (
    <div className="statistics-card">
      <h2 className="title">{title}</h2>
      <p className="value">{value}</p>
    </div>
  );
}

export default StatisticsCard;
