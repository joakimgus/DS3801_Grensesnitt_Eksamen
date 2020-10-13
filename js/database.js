var users = [
    {
        id: 1,
        firstName: "Tina",
        lastName: "Eilertsen",
        userName: "tinaeile",
        password: "qwerty1234",
        userimg: "../img/user/female.png",
    },
    {
        id: 2,
        firstName: "Joakim",
        lastName: "Gustavsen",
        userName: "joakimgus",
        password: "qwerty1234",
        userimg: "../img/user/male.png",
    },
    {
        id: 3,
        firstName: "Isar Kristoffer",
        lastName: "Buzza",
        userName: "nightDuck",
        password: "qwerty1234",
        userimg: "../img/user/male.png",
    },
    {
        id: 4,
        firstName: "Jan Robert",
        lastName: "Gjøstøl",
        userName: "fryLama",
        password: "qwerty1234",
        userimg: "../img/user/male.png",
    },
];

var menu = [
    {
        coffee: [
            {
                hot: [
                    {
                        productId: 1,
                        productName: "Black Coffee",
                        // productImage: ,
                        price: [28, 32, 36],
                        allergies: "none",
                        description: "to be continued..",
                        favourite: false
                    },
                    {
                        productId: 2,
                        productName: "Americano",
                        // productImage: ,
                        price: [32, 36, 40],
                        allergies: "none",
                        description: "to be continued..",
                        favourite: false
                    },
                    {
                        productId: 3,
                        productName: "Espresso",
                        // productImage: ,
                        price: [34, 38, 42],
                        allergies: "none",
                        description: "to be continued..",
                        favourite: false
                    },
                    {
                        productId: 4,
                        productName: "Cortado",
                        // productImage: ,
                        price: [36, 40, 44],
                        allergies: "none",
                        description: "to be continued..",
                        favourite: false
                    },
                    {
                        productId: 5,
                        productName: "Café Latte",
                        // productImage: ,
                        price: [38, 44, 48],
                        allergies: "Milk",
                        description: "to be continued..",
                        favourite: true
                    },
                    {
                        productId: 6,
                        productName: "Cappuccino",
                        // productImage: ,
                        price: [38, 42, 46],
                        allergies: "Milk",
                        description: "to be continued..",
                        favourite: false
                    },
                    {
                        productId: 7,
                        productName: "Café Mocha",
                        // productImage: ,
                        price: [38, 42, 46],
                        allergies: "Milk, Cocoa powder",
                        description: "to be continued..",
                        favourite: true
                    },
                    {
                        productId: 8,
                        productName: "Caramel Macchiato",
                        // productImage: ,
                        price: [45, 48, 51],
                        allergies: "Milk",
                        description: "to be continued..",
                        favourite: true
                    },
                ],
                cold: [
                    {
                        productId: 9,
                        productName: "Iced Coffee",
                        // productImage: ,
                        price: [36, 42, 50],
                        allergies: "none",
                        description: "to be continued..",
                        favourite: false
                    },
                    {
                        productId: 10,
                        productName: "Iced Latte",
                        // productImage: ,
                        price: [38, 44, 48],
                        allergies: "Milk",
                        description: "to be continued..",
                        favourite: false
                    },
                    {
                        productId: 11,
                        productName: "Iced Cappuccino",
                        // productImage: ,
                        price: [38, 42, 46],
                        allergies: "Milk",
                        description: "to be continued..",
                        favourite: false
                    },
                    {
                        productId: 12,
                        productName: "Iced Mocha",
                        // productImage: ,
                        price: [38, 42, 46],
                        allergies: "Milk, Cocoa powder",
                        description: "to be continued..",
                        favourite: true
                    },
                    {
                        productId: 13,
                        productName: "Iced Caramel Macchiato",
                        // productImage: ,
                        price: [45, 48, 51],
                        allergies: "Milk",
                        description: "to be continued..",
                        favourite: true
                    },
                ]
            }
        ],
        drinks: [
            {
                productId: 14,
                productName: "Lemon Iced Tea",
                //productImage: ,
                price: [38, 47, 55],
                allergies: "Lemon",
                description: "to be continued",
                favourite: false
            },
            {
                productId: 15,
                productName: "Peach Iced Tea",
                //productImage: ,
                price: [38, 47, 55],
                allergies: "Peach",
                description: "to be continued",
                favourite: true
            },
            {
                productId: 16,
                productName: "Raspberry Iced Tea",
                //productImage: ,
                price: [38, 47, 55],
                allergies: "Raspberry",
                description: "to be continued",
                favourite: false
            },
            {
                productId: 17,
                productName: "Pineapple Iced Tea",
                //productImage: ,
                price: [38, 47, 55],
                allergies: "Pineapple",
                description: "to be continued",
                favourite: false
            },
        ],
        food: [
            {
                productId: 18,
                productName: "Scones",
                //productImage: ,
                price: 37,
                allergies: "Wheat, Milk, Eggs, Butter, Cocoa powder",
                description: "to be continued",
                favourite: false
            },
            {
                productId: 19,
                productName: "Croissant",
                //productImage: ,
                price: 38,
                allergies: "Wheat, Milk, Eggs, Butter",
                description: "to be continued",
                favourite: false
            },
            {
                productId: 20,
                productName: "Brioche",
                //productImage: ,
                price: 44,
                allergies: "Wheat, Milk, Eggs, Butter",
                description: "to be continued",
                favourite: false
            },
            {
                productId: 21,
                productName: "Cinnamon Bun",
                //productImage: ,
                price: 46,
                allergies: "Wheat, Milk, Eggs, Butter, Cinnamon",
                description: "to be continued",
                favourite: true
            },
            {
                productId: 22,
                productName: "Brownie",
                //productImage: ,
                price: 44,
                allergies: "Wheat, Milk, Eggs, Butter, Cocoa powder",
                description: "to be continued",
                favourite: false
            },
            {
                productId: 23,
                productName: "Oreo Slice",
                //productImage: ,
                price: 54,
                allergies: "Wheat, Milk, Eggs, Butter, but can also contain: Soy, Crustacean Shellfish, Peanuts, Tree nuts, Lupin, Mollusks, Sesame seeds",
                description: "to be continued",
                favourite: false
            },
            {
                productId: 24,
                productName: "Chia pudding",
                //productImage: ,
                price: 42,
                allergies: "Chia seeds, Coconut, Cocoa powder",
                description: "to be continued",
                favourite: false
            },
        ],
    }
];