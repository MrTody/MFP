function Food() {
    
    const food1 = "Burger";
    const food2 = "Pizza";
    const food3 = "Noodles";


    return( 
        <ul class="food-list">
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3}</li>
        </ul>
    );
}

export default Food