import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const blogData = {
  name: "Animals",
  image:
    "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
  alt: "Lion",
  about: "I am a lion, I am a big five Animal.",
};

const posts = [
  {
    id: 1,
    title: "Wild Animal",
    date: "January 1, 1970",
    preview: "Don't joke around with wild animals",
  },
  // Add more posts as needed
];

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About img={blogData.image} alt={blogData.alt} aboutme={blogData.about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
