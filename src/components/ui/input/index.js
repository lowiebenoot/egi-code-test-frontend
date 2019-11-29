import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "./styles.module.css"

const Input = ({ className, inputClassName, label, element, ...rest }) => {
  const classNames = cx(styles.inputContainer, className)
  const inputClassNames = cx(styles.input, className)

  const ElementToUse = element

  return (
    <label className={classNames}>
      <span className={styles.label}>{label}</span>
      <ElementToUse className={inputClassNames} {...rest} />
    </label>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Input.defaultProps = {
  element: "input",
}

export default Input
