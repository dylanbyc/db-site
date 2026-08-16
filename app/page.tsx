import Link from "next/link";
import { Footer, Header } from "./components";
import { posts, projects } from "./content";

export default function Home() {
  const featuredPost = posts[0];

  return (
    <main>
      <Header />

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Dylan Bai · Field Notes</p>
          <h1 id="hero-title">
            Learning
            <span>in public.</span>
          </h1>
          <p className="hero-intro">
            Notes from the mat, the model, and the messy middle — an open log
            of what I&apos;m learning, building, and changing my mind about.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/writing">
              Read the notes <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/projects">
              Explore projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <aside className="hero-orbit" aria-label="Topics I write about">
          <div className="orbit-ring">
            <span className="orbit-label orbit-ai">AI</span>
            <span className="orbit-label orbit-bjj">BJJ</span>
            <span className="orbit-label orbit-life">LIFE</span>
            <span className="orbit-label orbit-build">BUILD</span>
            <div className="orbit-core">
              <span>Current state</span>
              <strong>Curious.</strong>
              <small>Melbourne · AU</small>
            </div>
          </div>
        </aside>

        <div className="scroll-note" aria-hidden="true">
          <span /> Scroll to explore
        </div>
      </section>

      <section className="ticker" aria-label="Site themes">
        <div>
          <span>Artificial intelligence</span><i>✦</i>
          <span>Brazilian jiu-jitsu</span><i>✦</i>
          <span>Building things</span><i>✦</i>
          <span>Living deliberately</span><i>✦</i>
        </div>
      </section>

      <section className="section shell" aria-labelledby="latest-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Notebook / 001</p>
            <h2 id="latest-heading">Latest writing</h2>
          </div>
          <Link className="text-link" href="/writing">
            View all notes <span aria-hidden="true">→</span>
          </Link>
        </div>

        <article className="featured-post">
          <Link className="featured-visual" href={`/writing/${featuredPost.slug}`}>
            <div className="grid-lines" aria-hidden="true" />
            <span className="visual-word">ITERATE</span>
            <span className="visual-stamp">NOTE {featuredPost.number}</span>
          </Link>
          <div className="featured-copy">
            <div className="post-meta">
              <span>{featuredPost.category}</span>
              <span>{featuredPost.date}</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <h3>
              <Link href={`/writing/${featuredPost.slug}`}>{featuredPost.title}</Link>
            </h3>
            <p>{featuredPost.excerpt}</p>
            <Link className="round-link" href={`/writing/${featuredPost.slug}`} aria-label={`Read ${featuredPost.title}`}>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>

        <div className="post-list">
          {posts.slice(1, 4).map((post) => (
            <article className="post-row" key={post.slug}>
              <span className="post-number">{post.number}</span>
              <div className="post-row-copy">
                <div className="post-meta">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3>
                  <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                </h3>
              </div>
              <span className="post-read-time">{post.readTime}</span>
              <Link className="arrow-link" href={`/writing/${post.slug}`} aria-label={`Read ${post.title}`}>
                ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" aria-labelledby="projects-heading">
        <div className="shell">
          <div className="section-heading section-heading-light">
            <div>
              <p className="eyebrow">Workshop / Ongoing</p>
              <h2 id="projects-heading">Things I&apos;m building</h2>
            </div>
            <p>Small experiments, useful tools, and ideas with their sleeves rolled up.</p>
          </div>

          <div className="project-grid">
            {projects.slice(0, 3).map((project, index) => (
              <article className={`project-card project-card-${index + 1}`} key={project.slug}>
                <div className="project-card-top">
                  <span>{project.status}</span>
                  <span>{project.year}</span>
                </div>
                <div className="project-mark" aria-hidden="true">
                  {project.mark}
                </div>
                <div className="project-card-copy">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>

          <Link className="button button-light" href="/projects">
            See the project log <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="about-strip shell" aria-labelledby="about-heading">
        <p className="eyebrow">A note on the notes</p>
        <div>
          <h2 id="about-heading">
            This is a record of practice, <em>not perfection.</em>
          </h2>
          <div className="about-strip-copy">
            <p>
              I&apos;m Dylan. I use this corner of the internet to make sense of
              ideas by writing them down — from AI systems and software projects
              to what grappling teaches me about attention, resilience, and ego.
            </p>
            <Link className="text-link" href="/about">
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
