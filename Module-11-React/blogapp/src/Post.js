import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    alert('An error occurred: ' + error.message);
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="posts-container">
        <h1>Blog Posts</h1>
        <div className="posts-list">
          {posts.map(post => (
            <div key={post.id} className="post-item">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;