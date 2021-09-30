import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals,setMeals] =useState([]);
    const [search,setSearch] =useState('');
    useEffect(()=>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[search])
    const handleSearchField = (e) => {
        const searchTextValue = e.target.value;
        setSearch(searchTextValue);
    }
    return (
        <div>
            <Header></Header>
             <div className="container">
                 {/* Search Books  */}
                <div className="row">
                <h2 className="text-center my-3">I have total {meals?meals.length:'0'} meals</h2>
                    <div className="col">
                        <div className="searchBox text-center mt-4">
                            <h1 className="text-primary">Search your Meals!</h1>
                            <div className="input-group mt-5 mb-5 w-50 mx-auto">
                                <input onChange={handleSearchField} id="input" type="text" className="form-control" placeholder="Search Here" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            meals?.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                            ></Meal>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meals;