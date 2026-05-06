import { Link } from "react-router-dom";

function Blog() {
  return (
    <main className="section">
      <h2>My Blog Posts</h2>
      <p>
        Welcome to my blog! This is where I'll document various adventures worth mentioning.
      </p>
      <div className="blogs-grid">
        <BlogCard
          title="🐰🐇Spring Break!🐣🌷"
          to="/SpringBreak"
        />
        <BlogCard
          title="˖°𓇼🌊Bachelorete Weekend!⋆🐚🫧"
          to="/BachWeekend"
        />
      </div>
    </main>
  );
}

function BlogCard({ title, to }) {
  return (
    <Link to={to} className="blog-card">
      <h3>{title}</h3>
    </Link>
  );
}


export default Blog;