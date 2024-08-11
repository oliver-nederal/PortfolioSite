import { useState, useEffect } from 'react';
import { grid } from 'ldrs'
grid.register()

const Loader = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let loadertime;

    loadertime = setTimeout(() => {
      setShowSpinner(true);
    }, 100);

    return () => {
      clearTimeout(loadertime);
    };
  }, []);

  return showSpinner ? <div className='h-screen w-screen flex flex-col items-center justify-center bg-white'>
  <l-grid size={"150"} speed={"1.5"} color={"black"} />
  <h1>Loading content...</h1>
</div> : null;
};

export default Loader;
