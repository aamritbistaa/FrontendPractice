import React from "react";
import LeftHeadingComponent from "./LeftHeadingComponent";
import RightHeadingComponent from "./RightHeadingComponent";
import DummyImage from "./DummyImage";

const Graph = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <LeftHeadingComponent
        Title={"Specific Location Transaction"}
        Secondary={"Location"}
        value={"Downtown"}
      />
      <DummyImage />
      <RightHeadingComponent
        Title={"Price Range-wise Transactions"}
        Secondary={"Type"}
        value={"Ultra-Luxury"}
      />
      <DummyImage />
      <LeftHeadingComponent Title={"Total Sale Transactions"} />
      <DummyImage />
      <RightHeadingComponent Title={"Price Rent Transactions"} />
      <DummyImage />
      <LeftHeadingComponent
        Title={"Property Type-wise  & Bedrooms-wise Transactions Distributions"}
      />
      <DummyImage />
      <RightHeadingComponent Title={"All Developers Transactions"} />
      <DummyImage />
      <LeftHeadingComponent Title={"All Locations Transactions"} />
      <DummyImage />
      <RightHeadingComponent Title={"All Projects Transactions"} />
      <DummyImage />
      <LeftHeadingComponent Title={"Top 10 Locations Transactions"} />
      <DummyImage />

      <RightHeadingComponent
        Title={"Top 10 Locations: Bedroom-wise Transactions"}
        Secondary={"no. of Rooms"}
        value={"10"}
      />
      <DummyImage />
      <LeftHeadingComponent
        Title={"Top 10 Locations: Bedroom-wise Transactions"}
        Secondary={"Property Type"}
        value={"Villa"}
      />
      <DummyImage />
      <RightHeadingComponent Title={"Top 10 Projects Transactions"} />
      <DummyImage />
      <LeftHeadingComponent
        Title={"Top 10 Projects: Bedroom-wise Transactions"}
        Secondary={"Property Type"}
        value={"Villa"}
      />
      <DummyImage />
    </div>
  );
};

export default Graph;
