import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: 'React Up & Running', author: 'Stoyan Stefanov', price: 450 },
    { id: 2, title: 'Learning JavaScript', author: 'Elliott Hulse', price: 380 },
    { id: 3, title: 'You Don\'t Know JS', author: 'Kyle Simpson', price: 520 },
  ];

  return (
    <div style={{ margin: '20px 0' }}>
      <h2 style={{ color: '#2c3e50' }}>Book Details</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price (INR)</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookDetails;