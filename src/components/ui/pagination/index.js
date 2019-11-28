import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { Link } from "gatsby"

import Button from "../button"
import styles from "./styles.module.css"

const Pagination = ({
  baseUrl,
  currentPage,
  hasNextPage,
  className,
  ...rest
}) => {
  const isPreviousDisabled = currentPage <= 1
  const isNextDisabled = !hasNextPage

  return (
    <div className={cx(styles.pagination, className)}>
      <Button
        level="secondary"
        className={cx({ [styles.disabled]: isPreviousDisabled })}
        element={Link}
        to={`${baseUrl}?p=${currentPage - 1}`}
        disabled={isPreviousDisabled}
        alt="previous"
      >
        &larr;
      </Button>
      <Button
        level="secondary"
        className={cx({ [styles.disabled]: isNextDisabled })}
        element={Link}
        to={`${baseUrl}?p=${currentPage + 1}`}
        disabled={isNextDisabled}
        alt="next"
      >
        &rarr;
      </Button>
    </div>
  )
}

Pagination.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  hasNextPage: PropTypes.bool,
}

export default Pagination
