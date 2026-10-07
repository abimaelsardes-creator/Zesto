class ZestoCart {
    constructor() {
        this.restaurantId = null;
        this.items = [];
    }

    addItem(item) {
        const existingItem = this.items.find(
            cartItem => cartItem.id === item.id
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...item,
                quantity: 1
            });
        }
    }

    removeItem(itemId) {
        this.items = this.items.filter(
            item => item.id !== itemId
        );
    }

    increase(itemId) {
        const item = this.items.find(
            cartItem => cartItem.id === itemId
        );

        if (item) {
            item.quantity += 1;
        }
    }

    decrease(itemId) {
        const item = this.items.find(
            cartItem => cartItem.id === itemId
        );

        if (!item) return;

        item.quantity -= 1;

        if (item.quantity <= 0) {
            this.removeItem(itemId);
        }
    }

    getSubtotal() {
        return this.items.reduce(
            (total, item) => total + (item.price * item.quantity),
            0
        );
    }

    clear() {
        this.restaurantId = null;
        this.items = [];
    }
}
