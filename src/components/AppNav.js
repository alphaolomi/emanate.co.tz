import React, { Component } from 'react'

export class AppNav extends Component {
    render() {
        return (
            <nav id="mobile-menu">
                <ul>
                    <li>
                        <a href="index.php">home</a>
                    </li>

                    <li>
                        <a href="contact.php">contact us</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default AppNav
