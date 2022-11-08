import axios from "axios";

const url = "api/blogs";

async function getBlogs() {
  const req = axios.get(url);
  const res = await req;
  return res.data;
}

async function createBlog(blog) {
  const req = axios.post(url, blog);
  const res = await req;
  return res.data;
}

async function updateBlogDetails(id, newDetails) {
  const req = axios.put(url + "/" + id, newDetails);
  const res = await req;
  return res.data;
}

async function deleteBlog(id) {
  const req = axios.delete(url + "/" + id);
  const res = await req;
  return res.data;
}

const BlogServices = { getBlogs, createBlog, updateBlogDetails, deleteBlog };

export default BlogServices;
