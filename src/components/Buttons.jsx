import React, { useState } from "react";
import Btn from "./Btn";
import { Link } from "react-router-dom";


const Buttons = () => {
    const [classTitle, setClassTitle] = useState('text-black')
    const [classBtn, setClassBtn] = useState('bg-blue-700 text-white')
    const [classTitle2, setClassTitle2] = useState('')
    const [classBtn2, setClassBtn2] = useState('bg-gray-200 ')
    const [classTitle3, setClassTitle3] = useState('')
    const [classBtn3, setClassBtn3] = useState('bg-gray-200 ')
  const handleFirst = () => {
    setClassTitle('text-black')
    setClassBtn('bg-blue-700 text-white')
    setClassTitle2('')
    setClassBtn2('bg-gray-200')
    setClassTitle3('')
    setClassBtn3('bg-gray-200')
  };
  const handleFirst2 = () => {
    setClassTitle2('text-black')
    setClassBtn2('bg-blue-700 text-white')
    setClassTitle3('')
    setClassBtn3('bg-gray-200')
    
  };
  const handleFirst3 = () => {
    setClassTitle3('text-black')
    setClassBtn3('bg-blue-700 text-white')
  };
  return (
    <div>
      <Link to="" onClick={()=>handleFirst()}>
        <Btn classBtn={classBtn} classTitle={classTitle} number="1" title="Choose title" />
      </Link>
      <Link to="2" onClick={() => handleFirst2() }>
        <Btn classBtn={classBtn2} classTitle={classTitle2} number="2" title="Choose component" />
      </Link>
      <Link to="3" onClick={()=>handleFirst3()}>
        <Btn classBtn={classBtn3} classTitle={classTitle3} number="3" title="Confirm data" />
      </Link>
    </div>
  );
};

export default Buttons;
