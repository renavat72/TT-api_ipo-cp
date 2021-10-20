import { useEffect, useState } from "react";

import plusIcon from "../../img/plusIcon.svg";
import minusIcon from "../../img/minusIcon.svg";
import './Card.css'

const Card = ({el, index}) => {
    const [active, setActive] = useState(false);
    useEffect(()=>{
        if(window.innerWidth > 1024 ) return setActive(true)
    }, [])
    return(
      <div  className="card" >
        <div className="accordion" onClick={()=>setActive(!active)}> 
          <div className="accordion_content">
            <div className="accordion_img" alt="img">
              {!active ? 
              <img alt="plus" src={plusIcon}/> :
              <img alt="minus" src={minusIcon}/>
            }
            </div>
            <div className="accordion_text">
              <div>{index+1}</div> &nbsp;
              <div>модуль</div>
            </div>
          </div>
        </div>
        <div className="list">
          {active?  el.specializedSubjects&&el.specializedSubjects.map((x,index)=>
            <li className="list_item" key={index}>
              {x}
            </li> 
            ):null}
            </div>
      </div> 
    )
  }

export default Card