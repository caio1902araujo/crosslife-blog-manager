import React from 'react'

const useOutsideClick = (ref, setActive) => {
  React.useEffect(() => {
    const buttonVisibilityControl = ref.current.previousElementSibling;
    
    const handleClickOutside = (event) =>{
      if(event.target.contains(buttonVisibilityControl) && !ref.current.contains(event.target)){
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ref, setActive])
}

export default useOutsideClick
