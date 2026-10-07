// ================================
// ZESTO AFRICA
// Affichage des restaurants
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("restaurants");

    if (!container) {
        console.error("ZESTO : le conteneur restaurants est introuvable.");
        return;
    }

    if (typeof ZESTO_DATA === "undefined") {
        container.innerHTML = `
            <div class="empty">
                ❌ Impossible de charger les restaurants.
            </div>
        `;

        console.error("ZESTO_DATA n'est pas chargé.");
        return;
    }

    const restaurants = ZESTO_DATA.restaurants || [];

    if (restaurants.length === 0) {
        container.innerHTML = `
            <div class="empty">
                😔 Aucun restaurant disponible.
            </div>
        `;
        return;
    }

    container.innerHTML = restaurants.map(function (restaurant) {

        return `
            <article class="restaurant-card">

                <div class="restaurant-image">
                    ${
                        restaurant.image
                        ? `<img
                            src="${restaurant.image}"
                            alt="${restaurant.name}"
                            style="width:100%;height:100%;object-fit:cover;"
                        >`
                        : `<div style="
                            width:100%;
                            height:100%;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            font-size:60px;
                            background:#f3f3f3;
                        ">🍽️</div>`
                    }
                </div>

                <div class="restaurant-content">

                    <div class="restaurant-title">
                        <h3>${restaurant.name}</h3>

                        <span class="restaurant-rating">
                            ⭐ ${restaurant.rating}
                        </span>
                    </div>

                    <p>
                        ${restaurant.description}
                    </p>

                    <div class="restaurant-info">
                        ⏱️ ${restaurant.deliveryTime} min
                        · 🛵 ${restaurant.deliveryFee} DH
                    </div>

                    <div class="restaurant-meta">
                        ${
                            (restaurant.categories || [])
                            .map(category =>
                                `<span class="meta-badge">${category}</span>`
                            )
                            .join("")
                        }
                    </div>

                    <button
                        class="primary-button"
                        onclick="alert('Menu de ${restaurant.name}')"
                    >
                        Voir le menu
                    </button>

                </div>

            </article>
        `;

    }).join("");

    console.log(
        "Zesto chargé correctement :",
        restaurants.length,
        "restaurant(s)"
    );
});
