import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "123reads affiliate disclosure and transparency notice.",
};

export default function AffiliateDisclosure() {
  return (
    <div className="container">
      <header>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>123<span>READS</span></h1>
        </Link>
      </header>

      <main>
        <div className="list-page-header">
          <Link href="/" className="back-link">&larr; Home</Link>
          <h2 className="list-page-title">Affiliate Disclosure</h2>
        </div>

        <div className="disclosure-content">
          <p>
            123reads is a participant in the Amazon Services LLC Associates Program,
            an affiliate advertising program designed to provide a means for sites to
            earn advertising fees by advertising and linking to Amazon.com.
          </p>

          <h3>How It Works</h3>
          <p>
            When you click on a book link on 123reads and make a purchase on Amazon,
            we may earn a small commission at no additional cost to you. This commission
            helps us maintain and improve 123reads, keeping it free for all users.
          </p>

          <h3>Our Commitment</h3>
          <p>
            Our recommendations are never influenced by affiliate partnerships.
            Every book suggestion — whether from our AI engine, our curated influencer
            lists, or our thematic collections — is selected purely on merit and relevance
            to your reading preferences.
          </p>

          <h3>Third-Party Services</h3>
          <p>
            123reads uses Google Gemini AI to generate personalized book recommendations.
            Book cover images are provided by the Open Library API. Influencer avatars
            are sourced from publicly available social media profiles.
          </p>

          <h3>Data & Privacy</h3>
          <p>
            123reads does not collect personal data. Your &ldquo;My Shelf&rdquo; bookmarks are
            stored locally in your browser using localStorage and are never transmitted
            to our servers. Search queries are processed through our AI recommendation
            engine but are not stored or associated with any user identity.
          </p>

          <h3>Contact</h3>
          <p>
            If you have questions about this disclosure or our affiliate relationships,
            please reach out via our website.
          </p>
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} 123reads. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/lists">All Lists</Link>
          <Link href="/insights">Insights</Link>
        </div>
      </footer>
    </div>
  );
}
