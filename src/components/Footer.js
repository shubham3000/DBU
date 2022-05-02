import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <footer>
            <div className="container footer-wrapper">
                <div>
                    <h1>Have an Idea?</h1>
                    <h2>Let’s discuss </h2>
                </div>
                <div className="icon">
                    <a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                    <a href="#"><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
                </div>
            </div>
            <div className="container copyright">
                <hr />
                <p>© 2021 DB Universe</p>
            </div>
        </footer>
    )
}
