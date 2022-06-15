import React,{useState} from 'react';
import './Ambas.css';
import {FaCheck,FaChevronDown,FaChevronRight} from 'react-icons/fa';



const Question = ({title,answers}) => {
  const [showInfo,setShowInfo]= useState(false);
  const style={ marginRight:"7px",
               borderRadius:"50%",
                backgroundColor:"#deeded",
               fontWeight:"bold",
                color:"#167c80",
                 padding:"8px",
                  fontSize:"20px", 
                  marginTop:"9px"}

  return (
    <article className='question'>
       <header className='question-title'>
          <h3>{title}</h3>
            <button type='button' className='question-btn'
                onClick={()=>{
                 setShowInfo(!showInfo);
               }}> 
                {showInfo ? <FaChevronDown/> : <FaChevronRight/>}
              </button>

           </header>
  
            <div className="question-text">
               {showInfo &&  answers.map((answer)=>(
                    <li><FaCheck style={style}/>{answer.que}</li>
             
                     ))

                 }
           </div>
       
     </article>
    
      )
  }

export default Question