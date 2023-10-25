import React from "react";

function About( {img="https://via.placeholder.com/215", title, aboutme}){
    return(
        <aside>
            <div>
                <img>{img} {title}</img>
                <p>{aboutme}</p>
            </div>
        </aside>
    )
}
export default About