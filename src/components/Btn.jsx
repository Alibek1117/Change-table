import React from "react";

const Btn = ({classBtn, classTitle, number, title }) => {
    
  return (
    <span className="my-3 flex items-center gap-2  text-gray-600 w-70 transition hover:text-black">
      <div className={ `${classBtn} w-10 h-10 border-2 flex justify-center align-middle rounded-full font-bold text-2xl` }>
        {number}
      </div>
      <span className={`${classTitle} text-2xl font-semibold`}>{title}</span>
    </span>
  );
};

export default Btn;
