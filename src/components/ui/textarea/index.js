import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "./styles.module.css"

const Input = ({ className, inputClassName, label, ...rest }) => {
  const classNames = cx(styles.inputContainer, className)
  const inputClassNames = cx(styles.input, className)

  return (
    <label className={classNames}>
      <span className={styles.label}>{label}</span>
      <input className={inputClassNames} {...rest} />
    </label>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Input
