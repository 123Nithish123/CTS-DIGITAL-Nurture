import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: 'Introduction to React', author: 'John Doe', date: '2026-01-15', content: 'React is a JavaScript library for building user interfaces.' },
    { id: 2, title: 'Understanding Hooks', author: 'Jane Smith', date: '2026-03-20', content: 'Hooks let you use state and other React features without writing a class.' },
    { id: 3, title: 'React Context API', author: 'Bob Wilson', date: '2026-05-10', content: 'Context provides a way to pass data through the component tree without having to pass props down manually.' },
  ];

  return (
    <div style={{ margin: '20px 0' }}>
      <h2 style={{ color: '#8e44ad' }}>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
          <h3>{blog.title}</h3>
          <p><strong>Author:</strong> {blog.author} | <strong>Date:</strong> {blog.date}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;