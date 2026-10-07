class ZestoMenuItem {
    constructor({
        id,
        restaurantId,
        name,
        description = "",
        price = 0,
        currency = "MAD",
        image = "",
        category = "Plats",
        available = true,
        ingredients = [],
        allergens = [],
        options = []
    }) {
        this.id = id;
        this.restaurantId = restaurantId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.currency = currency;
        this.image = image;
        this.category = category;
        this.available = available;
        this.ingredients = ingredients;
        this.allergens = allergens;
        this.options = options;
    }
}
