import React, { useState, useEffect } from "react";
import Aux from "../HOCs/Aux";

const All_Blogs = (props) => {
  return (
    <section className={"blog-lists"}>
      {props.blogs.map((blog) => {
        const btnChild =
          blog.likes < 1 ? (
            <Aux>
              <i className={"fi fi-rs-heart"}></i> {blog.likes}
            </Aux>
          ) : (
            <Aux>
              <i style={{ color: "red" }} className={"fi fi-ss-heart"}></i>{" "}
              {blog.likes}
            </Aux>
          );
        return (
          <div key={blog.id} className={"blog"}>
            <a href={blog.url}>{blog.title}</a>
            <div>
              <p onClick={props.authorFilter}>{blog.author}</p>
              <button onClick={() => props.updateLikes(blog)}>
                {btnChild}
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default All_Blogs;
