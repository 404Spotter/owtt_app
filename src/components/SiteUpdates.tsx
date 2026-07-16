import { POSTS } from '../data/BlogPosts';
import { formatDate } from '../utils/formatDate';

export default function SiteUpdates() {
    const latest = POSTS.slice(0, 4);
    return (
    <aside className="side-col updates-col">
        <div className="col-head">
            <h2 className="col-title col-title--left">Site Updates</h2>
            <a className="col-link" href="#/blog">View all</a>
        </div>
        <ul className="update-list">
            {latest.map((post) => (
                <li key={post.id}>
                    <a className="update-card" href="#/blog">
                        <time className="post-date" dateTime={post.date}>{formatDate(post.date)}</time>
                        <h3 className="update-title">{post.title}</h3>
                        <p className="update-excerpt">{post.excerpt}</p>
                    </a>
                </li>
            ))}
        </ul>
    </aside>
);
}
