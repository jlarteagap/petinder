import React from "react";
import { Card } from "./card/card";

export const ListCards = () => {
  return (
    <main className="content is-flex is-justify-content-center my-5 is-flex-direction-column is-align-items-center">
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
};
