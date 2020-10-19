import React, {useState} from 'react';
// import './App.css';
// import './App.js';


const StarRating = () => {
        const [rating, setRating] = useState(null);
        const [hover, setHover] = useState(null);
        return (
            <div>
     {/* NULL MEANS IF NEVER RATED BEFORE, UNRATED
    USE STATE ALLOWS YOU TO GET AND SET RATING */}
    {[...Array(5)].map((star, i) => {
    const ratingValue = i + 1;
    return (
    <label>
        <input
        type="radio"
        name="rating"
        value={ratingValue}
        onClick={() => setRating(ratingValue)}
         />
        {/* ^^SETTING THE STAR VALUE ONCLICK */}
        <i
        className="fas fa-star"
        id="star"
        color={ratingValue < (hover || rating) ? "#ffc107" : "#e4e5e9"}
        size={100}
        onMouseEnter={() => setHover(ratingValue)}
        onMouseLeave={() => setHover(null)}>
            {/* HOVER FIRST THEN RATING, IF NONE, THEN NULL */}
        </i>
    </label>
    );
})}
<h6>Rating: {rating}</h6>
</div>
);
};


export default StarRating;
