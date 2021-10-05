import React, { useEffect, useState } from 'react';
import './Goals.css'

const Goals = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch("./goals.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
    <div className="cardsContainer">
        <div className="titleText">
            <span className="cardsTitle">
                উদ্দেশ্য 
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
    const {icon, title} = props.data
    console.log(props.data);
    return(
        <div className="card-body card text-center">
            <div>
            <h5 className="card-title"><i className={icon}></i></h5>
            <h5 className="card-subtitle mb-2 mt-4 cardTitle">{title}</h5>
            </div>   
        </div>
    )
}

export default Goals;