import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "./styles.module.css"

const Button = ({ children, className, level, element, disabled, ...rest }) => {
  const ElementToUse = element
  const classNames = cx(styles.button, className, {
    [styles.disabled]: disabled,
    [styles.primary]: level === "primary",
    [styles.secondary]: level === "secondary",
  })

  return (
    <ElementToUse className={classNames} disabled={disabled} {...rest}>
      {children}
    </ElementToUse>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  level: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  element: PropTypes.elementType.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  level: "primary",
  element: "button",
}

export default Button
