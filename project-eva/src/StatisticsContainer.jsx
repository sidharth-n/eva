// StatisticsContainer.js
import React from "react";
import StatisticsCard from "./StatisticsCard";
import "./StatisticsContainer.css";

function StatisticsContainer({ statistics }) {
  return (
    <div className="statistics-container">
      {statistics.map((stat, index) => (
        <StatisticsCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
}

export default StatisticsContainer;
