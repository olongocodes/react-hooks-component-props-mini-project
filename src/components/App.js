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
    date: "September 25, 2020",
    preview: "Don't joke around with wild animals",
    minutesToRead: 1, // Add minutesToRead value
  },
  {
    id: 2,
    title: "Pet",
    date: "July 13, 2023",
    preview: "I am a pet, I can stay with human beings",
    minutesToRead: 5, 
  },
  {
    id: 3,
    title: "Wild Animal",
    date: "October 25, 2023",
    preview: "I am just a simple zebra, I am not so wild",
    minutesToRead: 4, // Add minutesToRead value
  },
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
