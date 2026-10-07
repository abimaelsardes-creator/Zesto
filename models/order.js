class ZestoOrder {
    constructor({
        id,
        customerId,
        restaurantId,
        driverId = null,
        items = [],
        subtotal = 0,
        deliveryFee = 0,
        discount = 0,
        total = 0,
        currency = "MAD",
        customerName = "",
        customerPhone = "",
        deliveryAddress = "",
        latitude = null,
        longitude = null,
        notes = "",
        status = "pending",
        paymentMethod = "cash",
        createdAt = new Date().toISOString()
    }) {
        this.id = id;
        this.customerId = customerId;
        this.restaurantId = restaurantId;
        this.driverId = driverId;
        this.items = items;
        this.subtotal = subtotal;
        this.deliveryFee = deliveryFee;
        this.discount = discount;
        this.total = total;
        this.currency = currency;
        this.customerName = customerName;
        this.customerPhone = customerPhone;
        this.deliveryAddress = deliveryAddress;
        this.latitude = latitude;
        this.longitude = longitude;
        this.notes = notes;
        this.status = status;
        this.paymentMethod = paymentMethod;
        this.createdAt = createdAt;
    }
}
