class ZestoDriver {
    constructor({
        id,
        firstName = "",
        lastName = "",
        phone = "",
        country = "ma",
        city = "",
        vehicleType = "motorcycle",
        isAvailable = false,
        isVerified = false,
        latitude = null,
        longitude = null,
        rating = 0,
        totalDeliveries = 0,
        createdAt = new Date().toISOString()
    }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.country = country;
        this.city = city;
        this.vehicleType = vehicleType;
        this.isAvailable = isAvailable;
        this.isVerified = isVerified;
        this.latitude = latitude;
        this.longitude = longitude;
        this.rating = rating;
        this.totalDeliveries = totalDeliveries;
        this.createdAt = createdAt;
    }
}
