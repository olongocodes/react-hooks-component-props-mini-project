import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <>
      <div className="App">
        <Header name="Animals" />
        <About
          img="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Lion"
          aboutme="I am a lion, I am a big five Animal."
        />
      </div>

      <div>
        <ArticleList />
        <ArticleList />
        <ArticleList />
      </div>
    </>
  );
}

export default App;
