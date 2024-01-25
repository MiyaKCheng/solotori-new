import React, { useEffect, useState } from "react";
import "./elf.css";

function InsSection() {
  const [width, setWidth] = useState(225);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      if (newWidth < 1040) {
        setWidth(260);
      } else {
        setWidth(260);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="p-0 relative  h-[455px] m-auto overflow-hidden" style={{ width: `${width}px` }}>
        <div className="elfsight-app-44a4595f-15ed-4915-b2a5-334bdbb5a8d1 absolute t-[-15%] l-[8%] w-[300px] h-[500px]" data-elfsight-app-lazy></div>
      </div>
    </>
  );
}

export default InsSection;
