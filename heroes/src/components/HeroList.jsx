
import React, { useState } from "react";

const HeroList = ({ heroes }) => {
    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = (hero) => {
        setShowDetails((prevState) => ({
            ...prevState,
            [hero.id]: !prevState[hero.id],
        }));
    };

    return (
        <ul>
            {heroes.map((hero) => (
                <li key={hero.id}>
                    <h2>{hero.name}</h2>
                    <img src={hero.url} alt={hero.name} />
                    <p>Вселенная: {hero.universe}</p>
                    <p>Альтер эго: {hero.alterego}</p>
                    <p>Род деятельности: {hero.occupation}</p>
                    <p>Друзья: {hero.friends}</p>
                    <p>Суперспособности: {hero.superpowers}</p>
                    <button onClick={() => toggleDetails(hero)}>Подробнее</button>
                    {showDetails[hero.id] && (
                        <div>
                            <p>{hero.info}</p>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default HeroList;