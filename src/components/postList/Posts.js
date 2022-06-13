import { Component } from "react";
import './Posts.css';
import Post from "./Post.js";

class Posts extends Component {

  render() {

    let posts = this.props.posts;

    let items = posts.map(post => {
      return <Post key={post.id} post={post} />;
    });

    if (items.length === 0) {
      return <h1>Loading...</h1>
    }

    return (
      <div>
          <h1>Posts</h1>
          { items }
      </div>
    );
  }
}

export default Posts;