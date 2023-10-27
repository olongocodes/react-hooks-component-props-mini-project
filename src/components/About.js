import React from "react";

function About({ img = "https://via.placeholder.com/215", alt = "blog logo", aboutme }) {
  return (
    <aside>
      <div>
        <img src={img} alt={alt} />
        <p>{aboutme}</p>
      </div>
    </aside>
  );
}

export default About;
