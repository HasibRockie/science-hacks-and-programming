import React, { useEffect, useState } from 'react';
import './Services.css'


const Services = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch("./services.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    
    return (
    <div className="cardsContainer">
        <div className="titleText">
            <span className="cardsTitle">
                All Courses   
            </span>
        </div>
        
        <div className="cards">
            {
                cards.map(card => <IconCard data={card} key={card.id}></IconCard>)
            }
        </div>
    </div>
    );
};

const IconCard = (props) => {
    const {icon, name, price, image} = props.data
    // const background = `"url(${image})"`;
    console.log(props.data);
    return(
        <div className="card-body card text-center">
            <div>
                <img src={image} alt="" height='100px' />
            <h5 className="service-title"><i className={icon}></i></h5>
            <h5 className="card-subtitle mb-2 mt-4 cardTitle">Course Name : {name}</h5>
            <h2 className="card-subtitle mb-2 mt-4 cardTitle">Course Price : {price}</h2>
            </div>   
        </div>
    )
};

export default Services;