import { useRouteMatch } from 'react-router'

function useRouteParam(param) {
  const match = useRouteMatch()
  return match.params[param]
}

export default useRouteParam
