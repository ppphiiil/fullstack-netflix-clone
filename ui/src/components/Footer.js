import React from 'react'
import "./footer.css"


export default function Footer() {

    const footerLinks = ["Audio and Subtitles", "Media Center", "Jobs", "Help Center", "Privacy", "Cookie Preferences", "Audio Description", "Gift Cards", "Investor Relations", "Terms of Use", "Legal Notice", "Impressum", "Contact Us"]
    return (
        <div className="footer-container">
            <div className="footer-icon-container"><i class="footer-icon fab fa-facebook-square fa-2x"></i><i class="footer-icon fab fa-instagram fa-2x"></i><i class="footer-icon fab fa-youtube fa-2x"></i><i class="footer-icon fab fa-twitter fa-2x"></i></div>
            <div className="footer-link-container">
                { footerLinks.map( ( link ) => {
                    return <span className="footer-links-item" href="/">{ link }</span>
                } ) }
            </div>
            <span className="btn-servicecode" href="/">Service Code</span>
            <p className="copyright">&copy; 1997-2021 Netflix,Inc.</p>
        </div>
    )
}
