function collect_rating()
{
    var rating={count:0,sum:0,average:0};
    let rating=0;
    const elements=document.querySelectorAll(".rating");
    elements.forEach(function(element){
    rating=parseInt(element.id.replace('stars',''));
    rating.count+=parseInt(element.value);
    rating.sum+=parseInt(element.value)*rating;
    if(rating.count!=0)
    {
        rating.average=rating.sum/rating.count;
    }
    }
    )
    return rating;
}
document.addEventListener("change",()=>{
    const ratings=collect_rating;
})