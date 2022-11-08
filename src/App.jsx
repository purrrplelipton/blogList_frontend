import React, { useState, useEffect } from "react";
import Aux from "./COMPS/HOCs/Aux";
import Input from "./COMPS/INPUT/Input";
import Footer from "./COMPS/FOOTER/Footer";
import BlogServices from "./SERVICES/BlogServices";
import Notification from "./COMPS/NOTIFICATION/Notification";
import Logo from "./COMPS/LOGO/Logo";

import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    success: null,
    message: null,
  });

  useEffect(() => {
    BlogServices.getBlogs()
      .then((dbBlogs) => setBlogs([...dbBlogs]))
      .catch((err) => {
        setErrorMessage({ success: false, message: err.message });
        setTimeout(
          () => setErrorMessage({ success: null, message: null }),
          7000
        );
      });
  }, []);

  function createBlog(e) {
    e.preventDefault();

    const newBlog = { title, author, url };

    const duplicateTitleCheck = blogs.find(
      (blog) => blog.title.toLowerCase() === newBlog.title.toLowerCase()
    );

    const duplicateUrlCheck = blogs.find(
      (blog) => blog.url.toLowerCase() === newBlog.url.toLowerCase()
    );

    if (duplicateTitleCheck) {
      setErrorMessage({
        success: false,
        message: `“${duplicateTitleCheck.title}” already exists`,
      });
      setTimeout(() => setErrorMessage({ message: null, success: null }), 7000);
      return;
    } else if (duplicateUrlCheck) {
      setErrorMessage({
        success: false,
        message: `“${duplicateUrlCheck.title}” already exists`,
      });
      setTimeout(() => setErrorMessage({ message: null, success: null }), 7000);
      return;
    }

    BlogServices.createBlog(newBlog)
      .then((addedBlog) => {
        setBlogs([...blogs, addedBlog]);
        setErrorMessage({
          success: true,
          message: `“${newBlog.title}” blog created`,
        });
        setTitle("");
        setAuthor("");
        setUrl("");
        setTimeout(
          () => setErrorMessage({ success: null, message: null }),
          7000
        );
      })
      .catch((err) => {
        setErrorMessage({ success: false, message: err.message });
        setTimeout(
          () => setErrorMessage({ success: null, message: null }),
          7000
        );
      });
  }

  function slideUp() {
    return setErrorMessage({ success: null, message: null });
  }

  return (
    <Aux>
      <Notification slideUp={slideUp} errorMessage={errorMessage} />
      <form onSubmit={createBlog}>
        <Logo
          wrapperStyle={{
            width: "6rem",
            top: "-3rem",
            left: "0",
            zIndex: "-1",
          }}
        />
        <Input
          name={"title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          name={"author"}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Input
          name={"url"}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">create blog</button>
      </form>
      <Footer />
    </Aux>
  );
}

export default App;
