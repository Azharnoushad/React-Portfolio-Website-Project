import React,{useState} from 'react'
import {motion} from "framer-motion"

const Toggle = ({children,title}) => {
    const [toggle,setToggle] = useState(true)
  return (
    <motion.div layout onClick={()=>setToggle(!toggle)} className='question'>
        <motion.div layout>{title}</motion.div>
        {toggle ? children : ""}
        <div className="faq-line"></div>

    </motion.div>
  )
}

export default Toggle