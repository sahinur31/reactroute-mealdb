import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';

const Meal = (props) => {
    const {idMeal,strMeal, strInstructions, strMealThumb} = props.meal;
    const url = `/meal/${idMeal}`;
    return (
        <div className="col-md-4 ">
            <div className="p-3 border mb-3">
                <img src={strMealThumb} alt="" />
                <h4 className="my-3">Meal Name: {strMeal}</h4>
                <p>Instructions: {strInstructions.slice(0,150)}</p>
                <Link to={url} className="btn btn-info">Show Details</Link>
                
            </div>
        </div>
    );
};

export default Meal;