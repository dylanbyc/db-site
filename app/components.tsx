import Link from "next/link";

export function Header() {
  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="Dylan Bai home">
        <span className="brand-mark">DB</span>
        <span className="brand-name">Dylan Bai</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/writing">Writing</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </nav>
      <a className="header-contact" href="mailto:hello@dylanbai.com">
        Say hello <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">Keep exploring</p>
          <p className="footer-line">
            Stay curious.<br />Keep showing up.
          </p>
        </div>
        <div className="footer-nav">
          <Link href="/writing">Writing</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <a href="mailto:hello@dylanbai.com">Email</a>
        </div>
        <div className="footer-meta">
          <p>Built with curiosity in Melbourne.</p>
          <p>© {new Date().getFullYear()} Dylan Bai</p>
        </div>
      </div>
      <div className="footer-word" aria-hidden="true">DYLAN BAI</div>
    </footer>
  );
}
