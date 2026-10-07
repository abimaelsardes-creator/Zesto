const ZESTO_DATA = {
    restaurants: [
        {
            id: "restaurant-africa-food",
            name: "Africa Food",
            country: "ma",
            city: "Casablanca",
            address: "Casablanca",
            description: "Cuisine africaine, plats traditionnels et spécialités maison.",
            image: "",
            rating: 4.8,
            deliveryTime: 25,
            deliveryFee: 8,
            isOpen: true,

            categories: [
                "Cuisine africaine",
                "Plats africains",
                "Pâtes",
                "Boissons",
                "Desserts"
            ],

            menu: [
                {
                    id: "poulet-braise",
                    name: "Poulet braisé",
                    description: "Poulet braisé accompagné de riz et de légumes.",
                    price: 45,
                    currency: "MAD",
                    image: "",
                    category: "Plats",
                    available: true,
                    ingredients: [
                        "poulet",
                        "riz",
                        "légumes"
                    ],
                    allergens: [],
                    options: []
                },

                {
                    id: "spaghetti-bolognaise",
                    name: "Spaghetti bolognaise",
                    description: "Spaghetti avec sauce tomate et viande hachée.",
                    price: 40,
                    currency: "MAD",
                    image: "",
                    category: "Pâtes",
                    available: true,
                    ingredients: [
                        "spaghetti",
                        "tomate",
                        "viande hachée"
                    ],
                    allergens: [
                        "gluten"
                    ],
                    options: []
                },

                {
                    id: "jus-gingembre",
                    name: "Jus de gingembre",
                    description: "Jus de gingembre frais préparé maison.",
                    price: 15,
                    currency: "MAD",
                    image: "",
                    category: "Boissons",
                    available: true,
                    ingredients: [
                        "gingembre",
                        "eau",
                        "sucre"
                    ],
                    allergens: [],
                    options: []
                }
            ]
        }
    ]
};
