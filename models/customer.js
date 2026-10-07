class ZestoCustomer {
    constructor({
        id,
        firstName = "",
        lastName = "",
        email = "",
        phone = "",
        country = "ma",
        city = "",
        addresses = [],
        favorites = [],
        createdAt = new Date().toISOString()
    }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.country = country;
        this.city = city;
        this.addresses = addresses;
        this.favorites = favorites;
        this.createdAt = createdAt;
    }
}
