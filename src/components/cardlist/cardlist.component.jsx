// cardlist.component.jsx

import React from "react";
// import card component
import Card from '../card/card.component'

import "./cardlist.styles.css";

// create functional component

const CardList = ({ monsters }) => (
<div className="cardlist">
    {monsters.map(monster => (
    <Card key={monster.id} monster={monster} />
    ))}
    </div>
    );

export default CardList;