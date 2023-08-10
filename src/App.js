import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPosts] = useState();
  const [input, setInput] = useState();
  const [query, setQuery] = useState("as");

  const fetchPosts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${query}`
    );
    const result = await res.json();
    setPosts(result);
  };
  useEffect(() => {
    fetchPosts();
  }, [query]);

  const handleClick = () => {
    setQuery(input);
  };
  console.log(posts);
  return (
    <>
      <div className="search_container">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a text..."
        />
        <button onClick={() => handleClick()}>Search</button>
      </div>
      <Posts posts={posts}/>
    </>
  );
};

export default App;
