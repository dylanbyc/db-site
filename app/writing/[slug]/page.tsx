import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components";
import { posts } from "../../content";

type ArticleProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <Header />
      <article className="article shell">
        <header className="article-header">
          <Link className="back-link" href="/writing">← All writing</Link>
          <div className="post-meta"><span>{post.category}</span><span>{post.date}</span><span>{post.readTime}</span></div>
          <h1>{post.title}</h1>
          <p>{post.dek}</p>
        </header>
        <div className="article-layout">
          <aside aria-label="Article number"><span>Field note</span><strong>{post.number}</strong></aside>
          <div className="article-body">
            {post.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <blockquote>
              <span>Keep this</span>
              <p>{post.takeaway}</p>
            </blockquote>
          </div>
        </div>
        <nav className="article-next" aria-label="More writing">
          <span>Continue reading</span>
          <Link href="/writing">Browse the full notebook <span aria-hidden="true">↗</span></Link>
        </nav>
      </article>
      <Footer />
    </main>
  );
}
