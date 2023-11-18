const calculateAvgRating = reviews=>{
    const totalRating = reviews?.reduce((acc, item)=>acc+item.rating, 0);

    var avgRating = 
    (totalRating === 0 
    ? '' 
    : totalRating === 1 
    ? totalRating 
    : totalRating/reviews?.length);

    avgRating = Math.round(avgRating*10)/10;

    return {
        totalRating, avgRating
    }
}

export default calculateAvgRating;