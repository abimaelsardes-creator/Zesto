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

// Vérification de la base Zesto
console.log("Zesto Africa chargé");
console.log("Restaurants disponibles :", getZestoRestaurants().length);
