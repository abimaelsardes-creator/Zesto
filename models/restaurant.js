class ZestoRestaurant {
    constructor({
        id,
        name,
        country,
        city,
        address = "",
        phone = "",
        description = "",
        image = "",
        rating = 0,
        deliveryTime = 0,
        deliveryFee = 0,
        isOpen = false,
        categories = [],
        menu = []
    }) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.city = city;
        this.address = address;
        this.phone = phone;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.deliveryTime = deliveryTime;
        this.deliveryFee = deliveryFee;
        this.isOpen = isOpen;
        this.categories = categories;
        this.menu = menu;
    }
}
