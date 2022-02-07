import React from 'react';
import PropTypes from 'prop-types';

const useChangeParams = (key, filterValue, defautValues, setQueryString) => {
  React.useEffect(()=>{
    const url = new URL(window.location);
    const params = url.searchParams;
    if(params.get(key) || filterValue !== defautValues[key]){
      params.set(key, filterValue);
      window.history.pushState({}, '', url);
      setQueryString(params.toString());
    }
  }, [filterValue, key, defautValues, setQueryString]);
  return null;
};

useChangeParams.propTypes = {
  key: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  defautValues: PropTypes.object.isRequired,
  setQueryString: PropTypes.func.isRequired,
}

export default useChangeParams;
