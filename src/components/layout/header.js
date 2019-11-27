import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import cx from "classnames"

import Navigation from "./navigation"
import styles from "./header.module.css"

const Header = ({ siteTitle, className }) => (
  <header className={cx(className, styles.header)}>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
