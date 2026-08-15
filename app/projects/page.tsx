import type { Metadata } from "next";
import { Footer, Header } from "../components";
import { projects } from "../content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Experiments, tools, and things built by Dylan Bai.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <section className="page-hero project-page-hero shell">
        <p className="eyebrow">Projects / Workshop</p>
        <h1>Small bets.<br /><em>Real things.</em></h1>
        <p>A running log of experiments, tools, and ideas I&apos;m taking seriously enough to make.</p>
      </section>

      <section className="project-archive shell" aria-label="Project archive">
        {projects.map((project, index) => (
          <article className="project-archive-row" key={project.slug}>
            <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="project-archive-copy">
              <div className="post-meta"><span>{project.category}</span><span>{project.year}</span></div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="project-status"><span />{project.status}</div>
            <div className="project-archive-mark" aria-hidden="true">{project.mark}</div>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
