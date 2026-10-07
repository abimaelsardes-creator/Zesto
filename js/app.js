// ================================
// ZESTO AFRICA - APPLICATION
// ================================

function getZestoRestaurants() {
    return ZESTO_DATA.restaurants || [];
}

function getZestoRestaurantById(id) {
    return getZestoRestaurants().find(
        restaurant => restaurant.id === id
    );
}

function getZestoSearchResults(query) {
    return searchZestoRestaurants(
        getZestoRestaurants(),
        query
    );
}

function renderZestoRestaurants(restaurants = getZestoRestaurants()) {
    const container = document.getElementById("restaurants");

    if (!container) {
        console.warn("Conteneur des restaurants introuvable.");
        return;
    }

    if (restaurants.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>😔 Aucun restaurant disponible</h3>
                <p>Essayez une autre recherche.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = restaurants.map(restaurant => `
        <article class="restaurant-card">
            <div class="restaurant-image">
                ${
                    restaurant.image
                    ? `<img src="${restaurant.image}" alt="${restaurant.name}">`
                    : `<div class="restaurant-placeholder">🍽️</div>`
                }
            </div>

            <div class="restaurant-content">
                <h3>${restaurant.name}</h3>

                <p>${restaurant.description}</p>

                <div class="restaurant-info">
                    ⭐ ${restaurant.rating}
                    · ⏱️ ${restaurant.deliveryTime} min
                    · 🛵 ${restaurant.deliveryFee} DH
                </div>

                <button
                    type="button"
                    onclick="openZestoRestaurant('${restaurant.id}')"
                >
                    Voir le menu
                </button>
            </div>
        </article>
    `).join("");
}

function openZestoRestaurant(id) {
    const restaurant = getZestoRestaurantById(id);

    if (!restaurant) {
        return;
    }

    console.log("Restaurant sélectionné :", restaurant);

    if (typeof window.openRestaurantMenu === "function") {
        window.openRestaurantMenu(restaurant);
        return;
    }

    alert(
        `${restaurant.name}\n\n` +
        `${restaurant.description}\n` +
        `⭐ ${restaurant.rating}\n` +
        `⏱️ ${restaurant.deliveryTime} min`
    );
}

document.addEventListener("DOMContentLoaded", () => {
    renderZestoRestaurants();
});
