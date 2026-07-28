import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [showBookDetails, setShowBookDetails] = useState(true);
  const [showBlogDetails, setShowBlogDetails] = useState(true);
  const [showCourseDetails, setShowCourseDetails] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blogger App</h1>
      <p>This app demonstrates multiple ways of Conditional Rendering in React.</p>
      <hr />

      {/* ========== METHOD 1: if/else with variable ========== */}
      <h2>Method 1: If/Else with Variable</h2>
      {(() => {
        if (activeTab === 'books') {
          return <BookDetails />;
        } else if (activeTab === 'blogs') {
          return <BlogDetails />;
        } else {
          return <CourseDetails />;
        }
      })()}

      <hr />

      {/* ========== METHOD 2: Ternary Operator ========== */}
      <h2>Method 2: Ternary Operator</h2>
      <button onClick={() => setShowBookDetails(!showBookDetails)}>
        {showBookDetails ? 'Hide Book Details' : 'Show Book Details'}
      </button>
      {showBookDetails ? <BookDetails /> : <p>Book Details are hidden. Click the button to show.</p>}

      <hr />

      {/* ========== METHOD 3: Logical AND (&&) Operator ========== */}
      <h2>Method 3: Logical AND (&&) Operator</h2>
      <button onClick={() => setShowBlogDetails(!showBlogDetails)}>
        Toggle Blog Details
      </button>
      {showBlogDetails && <BlogDetails />}
      {!showBlogDetails && <p>Blog Details are hidden. Click the button to show.</p>}

      <hr />

      {/* ========== METHOD 4: Early Return ========== */}
      <h2>Method 4: Early Return Pattern</h2>
      <ConditionalCourseDetails show={showCourseDetails} />
      <button onClick={() => setShowCourseDetails(!showCourseDetails)}>
        {showCourseDetails ? 'Hide Course Details' : 'Show Course Details'}
      </button>

      <hr />

      {/* ========== METHOD 5: Switch-like with state ========== */}
      <h2>Method 5: Tab-based Switching</h2>
      <div>
        <button onClick={() => setActiveTab('books')} style={{ fontWeight: activeTab === 'books' ? 'bold' : 'normal' }}>Books</button>
        <button onClick={() => setActiveTab('blogs')} style={{ fontWeight: activeTab === 'blogs' ? 'bold' : 'normal' }}>Blogs</button>
        <button onClick={() => setActiveTab('courses')} style={{ fontWeight: activeTab === 'courses' ? 'bold' : 'normal' }}>Courses</button>
      </div>
      {activeTab === 'books' && <BookDetails />}
      {activeTab === 'blogs' && <BlogDetails />}
      {activeTab === 'courses' && <CourseDetails />}

      <hr />

      {/* ========== METHOD 6: Object mapping ========== */}
      <h2>Method 6: Object Mapping for Conditional Rendering</h2>
      <ObjectMappedDetails activeTab={activeTab} />
    </div>
  );
}

function ConditionalCourseDetails({ show }) {
  if (!show) {
    return <p>Course Details are hidden. Click the button to show.</p>;
  }
  return <CourseDetails />;
}

function ObjectMappedDetails({ activeTab }) {
  const components = {
    books: <BookDetails />,
    blogs: <BlogDetails />,
    courses: <CourseDetails />,
  };
  return components[activeTab] || <p>Select a tab to view details.</p>;
}

export default App;