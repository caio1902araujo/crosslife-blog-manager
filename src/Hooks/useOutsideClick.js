import React from 'react';
import PropTypes from 'prop-types';

const useOutsideClick = (wrapperRef, setActive, buttonVisibilityControlRef) => {
  React.useEffect(() => {
    const handleClickOutside = (event) =>{
      const clickOutsideButton = buttonVisibilityControlRef ? !buttonVisibilityControlRef.current.contains(event.target) : true;
      
      if(clickOutsideButton && !wrapperRef.current.contains(event.target)){
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [wrapperRef, setActive, buttonVisibilityControlRef])
}

useOutsideClick.propTypes = {
  wrapperRef: PropTypes.object.isRequired,
  buttonVisibilityControlRef: PropTypes.object,
  setActive: PropTypes.func.isRequired,
}

export default useOutsideClick
