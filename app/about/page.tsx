import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "About",
  description: "About Dylan Bai and this open notebook.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="about-page shell">
        <div className="about-kicker">
          <p className="eyebrow">About / The short version</p>
          <div className="about-portrait" aria-hidden="true"><span>DB</span></div>
        </div>
        <div className="about-main">
          <h1>I&apos;m Dylan.<br />I learn by <em>doing.</em></h1>
          <p className="about-lead">
            This site is my open notebook: a place to document what I&apos;m learning in AI and Brazilian jiu-jitsu, share the projects I&apos;m building, and hold onto lessons from everywhere else in life.
          </p>
          <div className="about-columns">
            <div>
              <h2>What you&apos;ll find here</h2>
              <p>Honest field notes, practical ideas, work in progress, and the occasional change of mind. I care more about useful clarity than pretending to have everything figured out.</p>
            </div>
            <div>
              <h2>Why publish it</h2>
              <p>Writing makes fuzzy thinking visible. Publishing adds just enough accountability to finish the thought — and sometimes helps the right person find it.</p>
            </div>
          </div>
          <div className="about-now">
            <span>Right now</span>
            <p>Learning how people and AI build better things together.</p>
            <p>Trying to become a more technical and thoughtful grappler.</p>
            <p>Shipping small projects instead of collecting perfect plans.</p>
          </div>
          <div className="about-contact">
            <p>If something here sparks an idea, I&apos;d like to hear it.</p>
            <a className="button button-dark" href="mailto:hello@dylanbai.com">hello@dylanbai.com <span aria-hidden="true">↗</span></a>
            <Link className="text-link" href="/writing">Start with the writing <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
