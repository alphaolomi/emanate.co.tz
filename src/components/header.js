import AppNav from "./AppNav"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="home">
    <div class="main-navigation">
      <div class="container">
        <div class="row">
          <div class="col-xl-2 col-lg-3 col-md-3">
            <div class="logo-area">
              <a href="/"><img src="img/logo.png" alt="enventer" /></a>
            </div>
          </div>
          <div class="col-xl-10 col-lg-9 col-md-9">
            <div class="main-menu f-right">
              <AppNav />
            </div>
            <div class="mobile-menu"></div>
          </div>
        </div>
      </div>
    </div>
  </header>


)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
