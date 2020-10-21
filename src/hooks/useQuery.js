import { useLocation } from 'react-router'

function useQuery(param) {
  const search = new URLSearchParams(useLocation().search)
  return search.get(param)
}

export default useQuery
