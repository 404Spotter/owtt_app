  import { POSTS } from '../data/BlogPosts';
  import { formatDate } from '../utils/formatDate';

export default function BlogPage() {
return (
<main className="blog-page">
<a className="back-btn back-btn--static" href="#/">← Back</a>
<header className="blog-header">
<h1 className="blog-title">Blog &amp; Site Updates</h1>
<p className="subtitle">The latest from Open World Transit Tracker.</p>
</header>
<div className="blog-list">
{POSTS.map((post) => (
<article key={post.id} className="blog-article">
<time className="post-date" dateTime={post.date}>{formatDate(post.date)}</time>
<h2 className="post-title">{post.title}</h2>
<p className="post-body">{post.body}</p>
</article>
))}
</div>
</main>
);
}