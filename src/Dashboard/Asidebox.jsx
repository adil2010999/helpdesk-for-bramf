import React from "react"
import './navbar.css'; 
import home from '../assets/home-icon.png';
import analyze from '../assets/analytics.png';
import ticket from '../assets/ticket.png'
const Asidebox = () => {
    return ( 
            <aside>
            <div className="for-dashboard">
                <a href="#" className="dashboard">Dashboard</a>
                <img src={home} alt="home" className="home" />
            </div>
            <div className="for-analytics">
                <a href="#" className="analytics">Аналитика</a>
                <img src={analyze} alt="analyze" className="analyze" />
            </div>
            <div className="for-tickets">
                <a href="#" className="ticket">Tickets</a>
                <img src={ticket} alt="ticket-logo" className="ticket-logo" />
            </div>
            </aside>
    )
}
            
            
    

export default Asidebox;