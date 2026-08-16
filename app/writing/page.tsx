import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";
import { posts } from "../content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Field notes on AI, BJJ, projects, and the rest of life.",
};

export default function WritingPage() {
  return (
    <main>
      <Header />
      <section className="page-hero shell">
        <p className="eyebrow">Writing / Field notes</p>
        <h1>Ideas get clearer<br /><em>when they leave my head.</em></h1>
        <p>Notes on learning, practice, technology, and the occasional useful detour.</p>
      </section>

      <section className="archive shell" aria-labelledby="archive-heading">
        <div className="archive-bar">
          <h2 id="archive-heading">All notes</h2>
          <div className="topic-key" aria-label="Topics">
            <span>AI</span><span>BJJ</span><span>Life</span><span>Projects</span>
          </div>
        </div>
        {posts.map((post) => (
          <article className="archive-row" key={post.slug}>
            <span className="post-number">{post.number}</span>
            <div>
              <div className="post-meta"><span>{post.category}</span><span>{post.date}</span></div>
              <h3><Link href={`/writing/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.excerpt}</p>
            </div>
            <span className="post-read-time">{post.readTime}</span>
            <Link className="arrow-link" href={`/writing/${post.slug}`} aria-label={`Read ${post.title}`}>↗</Link>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
