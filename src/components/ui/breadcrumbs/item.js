import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "./styles.module.css"

const Item = ({ children, className, ...rest }) => {
  return (
    <span className={cx(styles.item, className)} {...rest}>
      {children}
    </span>
  )
}

Item.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Item
