class ZestoAddress {
    constructor({
        id,
        label = "Maison",
        address = "",
        city = "",
        country = "ma",
        latitude = null,
        longitude = null,
        instructions = "",
        isDefault = false
    }) {
        this.id = id;
        this.label = label;
        this.address = address;
        this.city = city;
        this.country = country;
        this.latitude = latitude;
        this.longitude = longitude;
        this.instructions = instructions;
        this.isDefault = isDefault;
    }
}
