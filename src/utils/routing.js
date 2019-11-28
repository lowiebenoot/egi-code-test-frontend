import { useEffect } from "react"
import { useQueryParam, NumberParam } from "use-query-params"

export const usePaginationParam = () => {
  const [pageNumber] = useQueryParam("p", NumberParam)

  if (!pageNumber) {
    return 1
  }

  return Math.max(1, pageNumber)
}
