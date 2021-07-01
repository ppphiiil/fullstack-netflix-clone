import React from 'react'
import "./footer.css"


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-icon-container"><i class="footer-icon fab fa-facebook-square fa-2x"></i><i class="footer-icon fab fa-instagram fa-2x"></i><i class="footer-icon fab fa-youtube fa-2x"></i><i class="footer-icon fab fa-twitter fa-2x"></i></div>
            <div className="footer-link-container">
                <span className="footer-links-item" href="/">Audio and Subtitles</span>
                <span className="footer-links-item" href="/">Media Center</span>
                <span className="footer-links-item" href="/">Jobs</span>
                <span className="footer-links-item" href="/">Help Center</span>
                <span className="footer-links-item" href="/">Privacy</span>
                <span className="footer-links-item" href="/">Cookie Preferences</span>

                <span className="footer-links-item" href="/">Audio Description</span>
                <span className="footer-links-item" href="/">Gift Cards</span>
                <span className="footer-links-item" href="/">Investor Relations</span>
                <span className="footer-links-item" href="/">Terms of Use</span>
                <span className="footer-links-item" href="/">Jobs</span>
                <span className="footer-links-item" href="/">Legal Notice</span>
                <span className="footer-links-item" href="/">Impressum</span>
                <span className="footer-links-item" href="/">Contact Us</span>
            </div>
            <span className="btn-servicecode" href="/">Service Code</span>
            <p className="copyright">&copy; 1997-2021 Netflix,Inc.</p>
        </div>
    )
}
