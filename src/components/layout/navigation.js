import React from "react"
import { Link } from "gatsby"

import styles from "./navigation.module.css"

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to="/">home</Link>
    <Link to="/categories">categories</Link>
    <Link to="/">contact</Link>
  </nav>
)

export default Navigation
