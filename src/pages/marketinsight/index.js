import React from "react";
import Description from "./components/Description";
import Filter from "./components/Filter";
import DateRange from "./components/DateRange";
import Graph from "./components/Graph";
import Landing from "./components/Landing";

const index = () => {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <Landing />
      <Description />
      <Filter />
      <DateRange />
      <Graph />
    </div>
  );
};

export default index;
