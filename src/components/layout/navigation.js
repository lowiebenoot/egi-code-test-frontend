import React from "react"
import { Link } from "gatsby"

import styles from "./navigation.module.css"

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to="/home">home</Link>
    <Link to="/home">categories</Link>
    <Link to="/home">contact</Link>
  </nav>
)

export default Navigation
