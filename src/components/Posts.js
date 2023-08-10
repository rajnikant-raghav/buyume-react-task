import React from "react";

const Posts = ({ posts }) => {
  return (
    <div className="post_container">
      {posts ? posts.map((val) => 

      <div className="card">
        <p><span> Title:</span> {val.title}</p>
        <p><span> Body:</span> {val.body}</p>
      </div>
      ) : <p></p>}
    </div>
  );
};

export default Posts;
