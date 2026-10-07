function normalizeSearchText(value = "") {
    return value
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function searchZestoRestaurants(restaurants = [], query = "") {
    const search = normalizeSearchText(query);

    if (!search) {
        return restaurants;
    }

    return restaurants.filter(restaurant => {
        const restaurantText = normalizeSearchText([
            restaurant.name,
            restaurant.description,
            restaurant.city,
            restaurant.address,
            ...(restaurant.categories || [])
        ].join(" "));

        const menuText = (restaurant.menu || [])
            .map(item => [
                item.name,
                item.description,
                item.category,
                ...(item.ingredients || []),
                ...(item.allergens || [])
            ].join(" "))
            .join(" ");

        return normalizeSearchText(
            `${restaurantText} ${menuText}`
        ).includes(search);
    });
}
