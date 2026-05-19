// SEARCH RECIPES
function searchRecipes() {
    const input = document.getElementById("recipe-search");
    const filter = input.value.toUpperCase();
    const resultsBox = document.getElementById("search-results");
    const ul = document.getElementById("recipe-menu");
    const items = ul.getElementsByTagName("li");

    // show/hide dropdown
    resultsBox.style.display = input.value.length > 0 ? "block" : "none";

    // filter list items
    for (let i = 0; i < items.length; i++) {
        const a = items[i].getElementsByTagName("a")[0];
        const recipeName = a.textContent.toUpperCase();

        items[i].style.display = recipeName.includes(filter) ? "block" : "none";
    }
}

// HAMBURGER MENU (small screens nav)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("#nav-right");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// CAROUSEL SLIDESHOW
let currentIndex = 0;
const slides = document.querySelectorAll(".slide, .slide-active");
const dots = document.querySelectorAll(".dot, .dot-active");

// updates dot styling
function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle("dot-active", i === currentIndex);
        dot.classList.toggle("dot", i !== currentIndex);
    });
}

// auto slide
function showNextSlide() {
    if (slides.length === 0) return;

    slides[currentIndex].classList.remove("slide-active");
    slides[currentIndex].classList.add("slide");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.remove("slide");
    slides[currentIndex].classList.add("slide-active");

    updateDots();
}


// dot click navigation
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        slides[currentIndex].classList.remove("slide-active");
        slides[currentIndex].classList.add("slide");

        currentIndex = i;

        slides[currentIndex].classList.remove("slide");
        slides[currentIndex].classList.add("slide-active");

        updateDots();
    });
});

if (slides.length > 0) {
    updateDots();
    setInterval(showNextSlide, 5000);
}

// RECIPE FILTER BUTTONS
function filterRecipes(category) {
    const cards = document.querySelectorAll(".recipe-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
        
        // makes buttons active
        if (btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add("active");
        }
    });

    // Show or hide the recipe cards
    cards.forEach(card => {
        const categories = card.dataset.category ? card.dataset.category.split(" ") : [];
        const show = category === "all" || categories.includes(category);
        card.style.display = show ? "block" : "none";
    });
}

// RECIPE DATA 
const recipes = {
    "cookies": {
        title: "Chocolate Chip Peanut Butter Cookies",
        img: "images/cookie.jpeg",
        alt: "Thick and chewy peanut butter cookies studded with chocolate chips",
        stats: ["snack", "easy"],
        totalTime: "22 mins",
        ingredients: [
            "115g butter, softened",
            "1/2 cup creamy peanut butter",
            "1/2 cup light brown sugar",
            "1/2 cup caster sugar",
            "1 large egg",
            "1 tsp vanilla extract",
            "1 1/4 cups plain flour",
            "3/4 tsp bicarbonate of soda",
            "1/2 tsp baking powder",
            "1 cup milk chocolate chips"
        ],
        method: [
            "Preheat your oven to 180°C and line a large baking tray with baking paper.",
            "In a large bowl, cream together the softened butter, peanut butter, brown sugar, and caster sugar until the mixture is light and fluffy.",
            "Beat in the egg and the vanilla extract until fully combined.",
            "In a separate bowl, whisk together the plain flour, bicarbonate of soda, baking powder, and salt.",
            "Gradually fold the dry ingredients into the butter mixture until just combined.",
            "Gently stir in the milk chocolate chips.",
            "Scoop 2 tablespoon sized balls of dough and arrange them on the baking tray, leaving a bit of room between each.",
            "Bake for 10-12 minutes until the edges are just lightly golden. The centres will still look soft.",
            "Leave the cookies to cool on the baking tray for 5 minutes before moving them to a wire rack to cool completely."
        ],
        tips: "Make sure you do not over bake these cookies! They will continue to set as they cool on the baking tray, keeping them soft and chewy.",
        sourceName: "The Baking Chocolatess",
        sourceUrl: "https://www.thebakingchocolatess.com/phenomenal-milk-chocolate-chip-peanut-butter-cookies/#recipe"
    },
    "crepe": {
        title: "Soft Crepes",
        img: "images/crepe.jpeg",
        alt: "Folded thin crepe spread with nutella and filled with sliced bananas",
        stats: ["snack", "easy", "vegetarian"],
        totalTime: "1 hour 15 mins",
        ingredients: [
            "1 cup plain flour",
            "1/2 cup milk",
            "1/2 cup water",
            "1 egg",
            "1 tsp vanilla essence",
            "Sprinkle of salt",
            "2 tsp butter, melted",
            "Nutella, sliced bananas, and sliced strawberries for the filling",
            "Vanilla ice cream (optional to serve)",
            "Chocolate sauce (optional to serve)",
            "Icing sugar (optional to serve)"
        ],
        method: [
            "In a large bowl, whisk the plain flour with the water and milk until smooth.",
            "Add the egg into the batter, followed by the vanilla essence and salt.",
            "Whisk the batter thoroughly, then add the melted butter and mix until just combined.",
            "Leave the batter to rest at room temperature for about an hour.",
            "To cook, grease a frying pan with a little butter and set it over a medium heat.",
            "Slowly pour a thin layer of the batter into the pan, swirling to cover the base.",
            "When the outer edge of the crepe starts to curl, flip the crepe and cook the other side for less than a minute.",
            "Remove the crepe, place it on a plate, and cover with a clean kitchen towel to maintain its softness.",
            "To assemble, spread Nutella over the crepe and add sliced bananas and strawberries. You can also serve them with a classic squeeze of lemon and a sprinkle of sugar, or fresh berries and maple syrup as other delicious topping options.",
            "Scoop your favourite ice cream on top, drizzle with chocolate sauce, and finish with a dusting of icing sugar."
        ],
        tips: "Make sure you rest the batter for at least an hour at room temperature to ensure your crepes are incredibly soft and thin.",
        sourceName: "Chelsea Sugar",
        sourceUrl: "https://www.chelsea.co.nz/recipes/browse-recipes/banana-and-strawberry-crepes-nutella-and-ice-cream"
    },
    "doughnuts": {
        title: "Fluffy Banana Airfryer Doughnut Holes",
        img: "images/doughnuts.jpeg",
        alt: "Bite sized golden doughnut holes rolled in cinnamon sugar",
        stats: ["snack", "under 30 mins", "easy", "vegetarian"],
        totalTime: "20 mins",
        ingredients: [
            "1 large ripe banana, mashed (approx. 1/2 cup)",
            "3/4 cup self-raising flour",
            "2 tbsp coconut oil or vegan butter, melted",
            "1/4 cup unrefined cane sugar",
            "1/2 tsp ground cinnamon",
            "Avocado oil or cooking spray for the air fryer"
        ],
        method: [
            "In a mixing bowl, mash the ripe banana into a fine puree using a fork.",
            "Add the self-raising flour and stir with a rubber spatula until the mixture begins to form lumps.",
            "Lightly oil your hands with coconut oil and knead the dough briefly to form a dough ball. The dough will be sticky and moist, but avoid adding extra flour.",
            "Pinch off tablespoon-sized portions of the dough and roll them into smooth balls.",
            "Lightly spray the air fryer basket with avocado oil and arrange the dough balls 3cm apart.",
            "Air fry at 180°C for 6 to 7 minutes until the doughnut holes are puffy and golden brown.",
            "In a small bowl, mix the cane sugar and ground cinnamon together.",
            "Brush the warm doughnut holes with the melted coconut oil or butter, then roll them in the cinnamon sugar mixture until evenly coated."
        ],
        tips: "To keep the dough from sticking to your fingers, lightly grease your hands with coconut oil before shaping. Do not add more flour, or the doughnut holes will become dense.",
        sourceName: "The Conscious Plant Kitchen",
        sourceUrl: "https://www.theconsciousplantkitchen.com/banana-donut-holes/#wprm-recipe-container-51291"
    },
    "flatbread": {
        title: "Garlic Butter Flatbread",
        img: "images/flatbread.jpeg",
        alt: "Warm, golden and soft flatbread",
        stats: ["lunch", "snack", "under 30 mins", "easy", "vegetarian"],
        totalTime: "20 mins",
        ingredients: [
            "3/4 cup Greek yoghurt",
            "1 cup self-raising flour",
            "40g butter",
            "2 cloves garlic, finely minced",
            "1 tbsp fresh parsley, finely chopped"
        ],
        method: [
            "In a large mixing bowl, combine the Greek yoghurt and self-raising flour using a spoon until a dough starts to form.",
            "Turn out the dough onto a lightly floured surface and knead gently for 1 minute until smooth.",
            "Divide the dough into 4 equal pieces and roll each one out thinly into a circle, about 3-5mm thick.",
            "Heat a dry frying pan or griddle over a medium high heat. Cook each flatbread for 2-3 minutes on the first side until large bubbles form.",
            "Flip and cook for a further 1-2 minutes until golden brown patches appear.",
            "While the flatbreads are cooking, melt the butter in a small saucepan over a low heat with the minced garlic for 1 minute.",
            "Remove the garlic butter from the heat and stir in the fresh parsley.",
            "Brush the warm cooked flatbreads with the garlic butter just before serving."
        ],
        tips: "Make sure the pan is thoroughly heated before adding the flatbreads. This creates the best bubbles and lovely toasted spots!",
        sourceName: "The Simple Home Edit",
        sourceUrl: "https://simplehomeedit.com/recipe/2-ingredient-flatbread/"
    },
    "onion-rings": {
        title: "Crispy Onion Rings",
        img: "images/onion-rings.jpeg",
        alt: "A bowl of golden brown onion rings with a creamy aoli",
        stats: ["snack", "vegetarian"],
        totalTime: "25 mins",
        ingredients: [
            "2 large white onions, sliced into thick rings",
            "1 1/4 cups plain flour",
            "1 tsp baking powder",
            "1 tsp salt",
            "1 egg",
            "1 cup milk",
            "1 cup dried breadcrumbs or panko",
            "Vegetable oil for deep frying"
        ],
        method: [
            "Heat your oil in a large deep frying pan or deep fat fryer to 185°C.",
            "In a bowl, mix together the plain flour, baking powder, and salt.",
            "Coat the raw sliced onion rings in the flour mixture to dust them lightly, then set them aside.",
            "Whisk the egg and milk into the remaining flour mixture until a smooth batter forms.",
            "Place your breadcrumbs into a separate shallow dish.",
            "Dip each floured onion ring into the wet batter, let the excess drip off, then press it firmly into the breadcrumbs until evenly coated.",
            "Fry the coated onion rings in small batches for 2 to 3 minutes, turning once, until they are deep golden brown.",
            "Remove with a slotted spoon and place on kitchen paper to drain off any excess oil before serving."
        ],
        tips: "For the absolute crunchiest onion rings, make sure your oil is up to temperature before you start frying. Frying in small batches keeps the temperature from dropping.",
        sourceName: "Eating on a Dime",
        sourceUrl: "https://www.eatingonadime.com/deep-fried-onion-rings/#wprm-recipe-container-58476"
    },
    "potato-salad": {
        title: "Creamy Potato Salad",
        img: "images/potato-salad.jpeg",
        alt: "A bowl of classic creamy potato salad",
        stats: ["lunch", "easy", "vegetarian"],
        totalTime: "40 mins",
        ingredients: [
            "1.3kg baby potatoes, halved",
            "1 tsp salt for boiling",
            "1 cup mayonnaise",
            "2 tbsp lemon juice",
            "1 tbsp Dijon mustard",
            "2 celery stalks, finely chopped",
            "4 hard-boiled eggs, chopped",
            "Pinch of paprika for dusting",
            "Fresh dill or parsley for garnish"
        ],
        method: [
            "Place the halved baby potatoes in a large saucepan, cover with cold water, add the salt, and bring to the boil.",
            "Simmer the potatoes for about 15 minutes or until they are tender when pierced with a fork.",
            "Drain the cooked potatoes in a colander and leave them to cool completely.",
            "In a large bowl, whisk together the mayonnaise, lemon juice, and Dijon mustard.",
            "Add the cooled potatoes, celery, and chopped hard-boiled eggs to the dressing.",
            "Gently toss everything together until the potatoes are well coated.",
            "Garnish with a light dusting of paprika and a handful of fresh chopped dill or parsley before serving."
        ],
        tips: "Always allow the potatoes to cool completely before adding the mayonnaise dressing. If the potatoes are too hot, the dressing will melt and become oily.",
        sourceName: "Delish",
        sourceUrl: "https://www.delish.com/cooking/recipe-ideas/a53128/classic-potato-salad-recipe/"
    },
    "scone": {
        title: "Fluffy Scones",
        img: "images/scone.jpeg",
        alt: "Warm, light homemade scones on a baking tray",
        stats: ["snack", "lunch", "under 30 mins", "easy", "vegetarian"],
        totalTime: "25 mins",
        ingredients: [
            "3 cups plain flour",
            "6 tsp baking powder",
            "1/4 tsp salt",
            "75g cold butter, cubed",
            "1 1/4 cups milk",
            "Extra milk for brushing"
        ],
        method: [
            "Preheat your oven to 220°C and line a baking tray with baking paper.",
            "In a large bowl, sift together the plain flour, baking powder, and salt.",
            "Add the cubes of cold butter to the flour and rub them in with your fingertips until the mixture resembles fine breadcrumbs.",
            "Pour in the milk and mix quickly with a knife until a soft dough begins to form.",
            "Turn out the dough onto a lightly floured surface and gently pat it down to a thickness of 2cm. Do not roll it too heavily.",
            "Cut the dough into 12 equal squares or use a round scone cutter to press out rounds.",
            "Place the scones onto the baking tray close together so they support each other as they rise.",
            "Brush the tops lightly with extra milk and bake for 10-12 minutes until they are tall and golden brown."
        ],
        tips: "The secret to fluffy scones is handling the dough as little as possible. Work quickly and avoid over-kneading, which stops them from rising well.",
        sourceName: "Edmonds Cooking",
        sourceUrl: "https://edmondscooking.co.nz/recipes/scones-and-scrolls/scones"
    },
    "sushi": {
        title: "Teriyaki Sushi",
        img: "images/sushi.jpeg",
        alt: "Fresh teriyaki chicken sushi rolls sliced and served on a plate",
        stats: ["dinner"],
        totalTime: "45 mins",
        ingredients: [
            "1 1/2 cups sushi rice",
            "1 3/4 cups water",
            "3 tbsp sushi vinegar",
            "2 chicken breasts, sliced into thin strips",
            "3 tbsp teriyaki sauce",
            "1 tbsp vegetable oil",
            "4 sheets of nori seaweed",
            "1 small cucumber, cut into matchsticks",
            "1 avocado, sliced thinly",
            "Soy sauce and pickled ginger for serving"
        ],
        method: [
            "Rinse the sushi rice thoroughly in cold water until the water runs clear. Drain well.",
            "In a saucepan, bring the sushi rice and water to a boil, then cover with a tight lid, reduce to a low heat, and cook for 12 minutes.",
            "Remove from the heat and leave the cooked rice to steam with the lid on for 10 minutes.",
            "Transfer the warm rice to a large wooden or glass dish, drizzle over the sushi vinegar, and mix gently with a flat spatula. Leave to cool completely.",
            "Heat the vegetable oil in a frying pan over a medium heat, fry the chicken strips for 6-8 minutes until cooked through, then add the teriyaki sauce to coat the chicken and set aside.",
            "Lay a sheet of nori shiny-side down on a bamboo sushi mat.",
            "Using wet hands, spread a thin layer of sushi rice over the nori, leaving a 2cm border clear at the top.",
            "Lay the strips of teriyaki chicken, cucumber, and avocado across the centre of the rice.",
            "Roll the mat firmly over the filling, pressing gently as you go to form a tight cylinder.",
            "Moisten the clear nori border with a little water to seal the roll.",
            "Using a very sharp, wet knife, slice the sushi roll into 8 pieces and serve with soy sauce."
        ],
        tips: "Dip your fingers in a small bowl of water before handling the sushi rice to keep it from sticking to your hands. Use a wet knife when slicing the rolls for clean cuts.",
        sourceName: "V-J Cooks",
        sourceUrl: "https://vjcooks.com/teriyaki-chicken-sushi/#mv-creation-671-jtr"
    },
    "bulgogi": {
        title: "Beef Bulgogi",
        img: "images/bulgogi.jpeg",
        alt: "Beef bulgogi strips served over rice with carrots, cucumber and a fried egg",
        stats: ["dinner", "under 30 mins"],
        totalTime: "25 mins",
        ingredients: [
            "500g flank steak, sliced very thinly",
            "1/2 cup soy sauce",
            "2 tbsp brown sugar",
            "1 tbsp sesame oil",
            "2 cloves garlic, finely crushed",
            "1 tbsp fresh ginger, finely grated",
            "2 tbsp avocado oil or vegetable oil for frying",
            "2 spring onions, sliced into lengths",
            "1 tbsp toasted sesame seeds"
        ],
        method: [
            "In a medium bowl, whisk together the soy sauce, brown sugar, sesame oil, crushed garlic, and grated ginger.",
            "Add the thinly sliced flank steak to the marinade and mix well to coat the beef.",
            "Heat the avocado oil in a large wok or skillet over a high heat until smoking.",
            "Add the marinated beef to the wok in small batches, frying quickly for 2-3 minutes until browned and slightly charred at the edges.",
            "Toss in the spring onions for the final 30 seconds of cooking.",
            "Transfer the cooked beef to a serving plate and sprinkle with toasted sesame seeds before serving hot over steamed rice."
        ],
        tips: "To slice your steak into paper-thin strips, pop it in the freezer for about 30 minutes before cutting. This firms up the meat and makes slicing easy.",
        sourceName: "Grove Avocado Oil",
        sourceUrl: "https://groveavocadooil.co.nz/grove-recipes/quick-korean-beef-bulgogi/"
    },
    "chicken": {
        title: "Honey Soy Chicken",
        img: "images/chicken.jpeg",
        alt: "Crisp chicken pieces coated in a light honey soy glaze",
        stats: ["dinner", "under 30 mins"],
        totalTime: "25 mins",
        ingredients: [
            "600g chicken thigh fillets, cut into bite-sized pieces",
            "2 tbsp plain flour",
            "1 tbsp vegetable oil",
            "1/4 cup soy sauce",
            "1/4 cup honey",
            "2 cloves garlic, crushed",
            "1 tsp fresh ginger, grated",
            "1 spring onion, finely chopped for garnish"
        ],
        method: [
            "Toss the chicken thigh pieces in the plain flour in a bowl until lightly coated.",
            "In a separate small jug or bowl, whisk together the soy sauce, honey, crushed garlic, and grated ginger until combined.",
            "Heat the vegetable oil in a large frying pan over a medium-high heat.",
            "Add the chicken pieces and fry for 6 to 8 minutes, turning occasionally until golden brown and cooked through.",
            "Pour the honey soy sauce mixture into the hot pan with the chicken.",
            "Simmer the sauce for 2 to 3 minutes on a medium heat until it bubbles down into a sticky, glossy glaze that coats the chicken.",
            "Remove from the heat and garnish with chopped spring onions before serving.",
        ],
        tips: "Don't skip tossing the chicken in the flour before cooking. It helps to crisp up the chicken edges and naturally thickens the honey soy sauce into a sticky glaze.",
        sourceName: "New World",
        sourceUrl: "https://www.newworld.co.nz/recipes/main-meal/quick-honey-soy-chicken"
    }
};

// LOAD RECIPE PAGE DATA
function loadRecipe() {
    const nameEl = document.getElementById("recipe-name");
    if (!nameEl) return;

    const params = new URLSearchParams(window.location.search);
    const recipeId = params.get("id");
    const recipe = recipes[recipeId];

    if (!recipe) {
        nameEl.textContent = "Recipe not found";
        return;
    }

    document.title = recipe.title;
    nameEl.textContent = recipe.title;

    document.getElementById("recipe-img").src = recipe.img;
    document.getElementById("recipe-img").alt = recipe.alt;

    document.getElementById("recipe-source-link").href = recipe.sourceUrl;
    document.getElementById("recipe-source-link").textContent = recipe.sourceName;
    document.getElementById("recipe-source-section").style.display = "block";

    // stats
    let statsHTML = `<span class="stat-tag">Total Time: ${recipe.totalTime}</span>`;

    recipe.stats.forEach(stat => {
        const cap = stat.charAt(0).toUpperCase() + stat.slice(1);
        statsHTML += `<span class="stat-tag">${cap}</span>`;
    });

    document.getElementById("recipe-stats-container").innerHTML = statsHTML;

    // ingredients
    document.getElementById("ingredients").innerHTML =
        recipe.ingredients.map(i => `<li>${i}</li>`).join("");

    // method
    document.getElementById("method").innerHTML =
        recipe.method.map(m => `<li>${m}</li>`).join("");

    // tips 
    document.getElementById("recipe-tips-text").textContent = recipe.tips;
}


// Loading recipes
document.addEventListener("DOMContentLoaded", loadRecipe);
