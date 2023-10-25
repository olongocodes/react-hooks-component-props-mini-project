import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <> 
    <div className="App">
      <Header name="Animals"/>
      < img src="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600" title="Lion"/>
      
    </div>
    
    </>
  
  );
}

export default App;


