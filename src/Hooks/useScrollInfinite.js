import React from 'react';

const useScrollInfinite = () => {
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(()=>{
    let wait = false;

    const infiniteScroll = () => {
      if(infinite){
        const scrollY = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if(scrollY > height * .75 && !wait){
          setPages((pages) => [...pages, pages.length + 1]);

          wait = true;
        }
        else if(scrollY < height * .75 && wait){
          wait = false;
        }
      }
    }
    
    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    }
  }, [infinite]);

  return {
    pages,
    resetPage: () => setPages([1]),
    setInfinite,
  }
}

export default useScrollInfinite;
