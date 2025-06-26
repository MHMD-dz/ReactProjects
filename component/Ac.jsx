import { useState } from "react";
import "./style/Ac.css";



export const Ac = ({title , content }) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="accordion-card" key={Math.random()}>
        <div  className="header" >
            <div>{title}</div>
            <p className="icon" onClick={() => setIsOpen(!isOpen)} >{isOpen? "-" : "+" }</p>
        </div>
        <div className="content">
            {isOpen && <p className="card-info">{content}</p>}
        </div>
    </section>
  )
}
