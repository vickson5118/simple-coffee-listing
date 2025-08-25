import "./listing-container.css"
import {CoffeCard} from "./CoffeCard.jsx";
import {useEffect, useState} from "react";

export const ListingContainer = () => {

    const [coffeeData, setCoffeeData] = useState([]);

    async function getData() {
        const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
            if (response.ok) {
                return response.json();
            }
    }

    useEffect(() =>{
        getData().then(data => {
            setCoffeeData(data);
        })
    }, []);

    return (
           <div className="listing-container w-full h-12/12">
               <h1>Our collection</h1>
               <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
               <div className="listing-btn-container">
                   <a href="#">All Products</a>
                   <a href="#">Available Now</a>
               </div>
               <div className="coffee-card-container grid grid-cols-3 gap-14">
                   {
                        coffeeData.map((coffee) => (
                            <CoffeCard key={coffee.id} coffee={coffee} />
                        ))
                   }
               </div>
           </div>
    )
}