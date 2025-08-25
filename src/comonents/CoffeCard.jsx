import "./coffe-card.css"

export const CoffeCard = ({coffee}) => {
    return (
        <div className="coffee-card-container">
            {
                    coffee.popular && (<div className="coffee-card-tag">Popular</div>)
            }
            <img src={coffee.image} alt={coffee.name} />

            <div className="coffee-name-price-container flex">
                <p className="coffee-name">{coffee.name}</p>
                <p className="coffee-price">{coffee.price}</p>
            </div>

            <div className="coffee-rating-available-container flex">
                {
                    parseInt(coffee.votes) > 0 && (<div className="coffee-rating flex"><img src="/assets/resources/Star_fill.svg" alt="Star" /><p><span>{coffee.rating}</span><span>({coffee.votes})</span></p></div>)
                }
                {
                    parseInt(coffee.votes) === 0 && (<div className="coffee-rating flex"><img src="/assets/resources/Star.svg" alt="Star" /><p><span></span><span>{"(No ratings)"}</span></p></div>)
                }
                {
                    !coffee.available && (<div className="coffee-available">Sold out</div>)
                }

            </div>
        </div>
    )
}