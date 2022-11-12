import React from "react";

import Aux from "../../HOCs/Aux";

const All_Blogs = (props) => {
  return (
    <section className={"blog-lists"}>
      {props.blogs.length < 1 ? (
        <h1 className={"empty-bloglist"}>No blog has been added.</h1>
      ) : (
        props.blogs.map((blog) => {
          const btnChild =
            blog.likes < 1 ? (
              <Aux>
                <i
                  onMouseOver={(e) => (e.target.style.color = "#f91880")}
                  onMouseLeave={(e) => (e.target.style.color = "inherit")}
                  className={"fi fi-rs-heart"}
                ></i>{" "}
                {blog.likes}
              </Aux>
            ) : (
              <Aux>
                <i
                  style={{ color: "#f91880" }}
                  className={"fi fi-ss-heart"}
                ></i>{" "}
                {blog.likes}
              </Aux>
            );
          return (
            <div key={blog.id} className={"blog"}>
              <a href={blog.url}>{blog.title}</a>
              <div className={"blog-details"}>
                <p onClick={props.authorFilter}>{blog.author}</p>
                <div className={"delete-like"}>
                  <button
                    type={"button"}
                    onClick={() => props.deleteBlog(blog.id)}
                    name={"delete blog"}
                  >
                    <i
                      className={"fi fi-rs-trash"}
                      onMouseOver={(e) => {
                        e.target.className = "fi fi-ss-trash";
                        e.target.style.color = "#de0a0a";
                      }}
                      onMouseLeave={(e) => {
                        e.target.className = "fi fi-rs-trash";
                        e.target.style.color = "inherit";
                      }}
                    ></i>
                  </button>
                  <button
                    type={"button"}
                    onClick={() => props.updateLikes(blog.id)}
                  >
                    {btnChild}
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default All_Blogs;
