import axios from "axios";
import React from "react";
const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function AllUsers() {
  const [post, setPost] = React.useState(null);
  // const userList = useSelector((state) => state?.userReducer?.list?.data)
  // const postData = useSelector((state) => state?.userReducer?.postData)
  // const postDeleted = useSelector((state) => state?.userReducer?.postDeleted)
  
  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  function deletePost() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Post deleted!");
        setPost(null)
      });
  }
  if (!post) return "No post!"

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}