import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  const emojis = "☕️🍱"; // Define the available emojis

  // Calculate the number of emojis to display based on minutesToRead
  const emojiCount =
    minutesToRead < 30
      ? Math.ceil(minutesToRead / 5)
      : Math.ceil(minutesToRead / 10);

  // Create a string of emojis to display
  const emojiString = emojis.repeat(emojiCount);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {emojiString} {minutesToRead} min read
      </p>
    </article>
  );
}

export default Article;
