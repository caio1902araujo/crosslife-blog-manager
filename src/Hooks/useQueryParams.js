import React from 'react';
import { useSearchParams } from 'react-router-dom';

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = React.useRef(Object.fromEntries(searchParams.entries()));

  const setQueryParams = (param) => {
    setSearchParams(param);
    queryParams.current = param;
  }

  return [
    queryParams.current,
    setQueryParams
  ]
}

export default useQueryParams;
