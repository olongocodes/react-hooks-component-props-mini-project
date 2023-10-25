import React from "react";
import Article from "./Article";

function ArticleList() {
  let animals = [
    { id: 1, name: "Lion", park: "Amboseli" },
    { id: 2, name: "Leopard", park: "Ruma" },
    { id: 3, name: "Flamingo", park: "Naivasha" },
  ];
  return (
    <main>
      {animals.map((animal) => (
        <ArticleList name={animal.name} park={animal.park} key={animal.id} />
      ))}

      <Article />
    </main>
  );
}
export default ArticleList;
