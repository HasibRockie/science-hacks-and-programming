import Button from '@restart/ui/esm/Button';
import './ServicesHome.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesHome = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch("./services.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    const newCards = cards.filter( card => card.id < 5)
    
    return (
    <div className="cardsContainer">
        <div className="titleText">
            <span className="cardsTitle">
                Services  
            </span>
        </div>
        
        <div className="service-cards">
            {
                newCards.map(card => <IconCard data={card} key={card.id}></IconCard>)
            }
        </div>
        <Link to='/services'> <Button className="btn btn-dark"> See All Services </Button> </Link>
    </div>
    );
};

const IconCard = (props) => {
    const {icon, name, price, image} = props.data
    console.log(props.data);
    return(
        <div className="card-body card text-center">
            <div>
                <img src={image} height="100px" alt="" />
            <h5 className="card-title service-icon"><i className={icon}></i></h5>
            <h5 className="card-subtitle mb-2 mt-4 cardTitle">{name}</h5>
            <h2 className="card-subtitle mb-2 mt-4 cardTitle">{price}</h2>
            </div>   
        </div>
    )
};

export default ServicesHome;