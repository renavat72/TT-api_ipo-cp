import React from 'react'

import './Footer.css'

const Footer = () => {
    return(
      <div className="footer">
        <div className="footer_card" style={{background: "#2D2C2A"}}>
          <div className="footer_card_title">Практические модули</div>
          <div className="footer_card_description">Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе</div>
        </div>
        <div className="footer_card" style={{background: "#FF3535"}}>
          <div className="footer_card_title">Итоговая аттестация</div>
          <div className="footer_card_description">
            <li>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</li>
            <li>Защита итоговой аттестационной работы</li>
          </div>
        </div>
      </div>  
    )
} 

export default Footer