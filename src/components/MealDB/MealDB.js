
import { useState,useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

const MealDB = () => {
    const {mealId} = useParams();
    console.log(mealId);
    const [meal,setMeal] = useState({});
    
    const history = useHistory();
    useEffect(()=>{
        const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data?.meals[0]))
    } , []);

    const handleClick = () => {
        history.push('/meals');
    }
    return (
        <div>
            <h4>Meal Deatails of: {mealId}</h4>
            
            <img className="img-fluid" src={meal.strMealThumb} alt="" />
            <h5>{meal.strMeal}</h5>
            <p>{meal.strInstructions}</p>
            <br />
            <button className="btn btn-info" onClick={handleClick}>See All Meals</button>
        </div>
    );
};

export default MealDB;