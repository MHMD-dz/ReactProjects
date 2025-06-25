import { useEffect, useState } from "react"
import "./style/Meal.css"
import axios from "axios";


export const Meal = () => {
    const [meals, setMeals] = useState([]);

    useEffect( () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res) => {
            //console.log(res.data.meals)
            setMeals(res.data.meals);
        }).then((err) => {
            console.log(err);
        })
    }, [] )

  return (
    <div className="MealCont">
        {
            meals.map( (meal) => {
                return (
                    <div className="Meal">
                        <h1>{meal.strMeal}</h1>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        // how to call the id
                        <p>id : #{meal.idMeal}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
