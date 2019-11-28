import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import Item from "./item"
import styles from "./styles.module.css"

const Breadcrumbs = ({ children, className, ...rest }) => {
  return (
    <div className={cx(styles.breadcrumbs, className)} {...rest}>
      {React.Children.map(children, (child, index) => {
        const isLastChild = index === React.Children.count(children) - 1
        return (
          <div>
            {child}
            {!isLastChild && (
              <span className={styles.itemDevider}>&raquo;</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

Breadcrumbs.propTypes = {
  children: PropTypes.any.isRequired,
}

Breadcrumbs.Item = Item

export default Breadcrumbs
