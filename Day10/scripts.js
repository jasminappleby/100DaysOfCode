const get_meal_btn = document.getElementById('getMeal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
	});
});

const createMeal = (meal) => {
	const ingredients = [];
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			break;
		}
	}
	
	const newInnerHTML = `
		<div class="container" style="text-align:center">
			   
            <img src="${meal.strMealThumb}" alt="Meal Image">
            <h4 p style="padding-top: 20px">${meal.strMeal}</h4>
            ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
            ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
            ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}


            <div style="width:1000px; padding:50px;">

                <div style="width:300px; float:left;">
                    <h5>Ingredients:</h5>                
                    <ul style="list-style-position: inside;">
                        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>  
                </div>

                <div style="width:500px; float:right;">
                    <h5>Instructions:</h5>
                    <p>${meal.strInstructions}</p>
                </div>

            </div>
            
            <div style="clear: both;"></div>

            <div style="padding:50px;">
                ${meal.strYoutube ? `
                <h5>Video Recipe</h5>

                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
                </iframe>
            </div>

        </div>` : ''}
	`;
	
	meal_container.innerHTML = newInnerHTML;
}
