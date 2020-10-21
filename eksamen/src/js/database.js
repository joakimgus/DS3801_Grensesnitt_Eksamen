let users = [
    {
        id: 1,
        firstName: "Tina",
        lastName: "Eilertsen",
        userName: "tinaeile",
        password: "qwerty1234",
        userimg: require("../img/user/female.png"),
    },
    {
        id: 2,
        firstName: "Joakim",
        lastName: "Gustavsen",
        userName: "joakimgus",
        password: "qwerty1234",
        userimg: require("../img/user/male.png"),
    },
    {
        id: 3,
        firstName: "Isar Kristoffer",
        lastName: "Buzza",
        userName: "nightDuck",
        password: "qwerty1234",
        userimg: require("../img/user/male.png"),
    },
    {
        id: 4,
        firstName: "Jan Robert",
        lastName: "Gjøstøl",
        userName: "fryLama",
        password: "qwerty1234",
        userimg: require("../img/user/male.png"),
    },
];

let hotcoffee = [
    {
        productId: 1,
        productName: "Black Coffee",
        productImage: require("../img/app_POS/black-coffee.jpeg"),
        price: [28, 32, 36],
        allergies: "none",
        description: "to be continued..",
        favourite: false,
        category: "hot"
    },
    {
        productId: 2,
        productName: "Americano",
        productImage: require("../img/app_POS/americano.jpg"),
        price: [32, 36, 40],
        allergies: "none",
        description: "to be continued..",
        favourite: false,
        category: "hot"
    },
    {
        productId: 3,
        productName: "Espresso",
        productImage: require("../img/app_POS/espresso.jpg"),
        price: [34, 38, 42],
        allergies: "none",
        description: "to be continued..",
        favourite: false,
        category: "hot"
    },
    {
        productId: 4,
        productName: "Cortado",
        productImage: require("../img/app_POS/cortado.jpg"),
        price: [36, 40, 44],
        allergies: "none",
        description: "to be continued..",
        favourite: false,
        category: "hot"
    },
    {
        productId: 5,
        productName: "Café Latte",
        productImage: require("../img/app_POS/Café-Latte.jpeg"),
        price: [38, 44, 48],
        allergies: "Milk",
        description: "to be continued..",
        favourite: true,
        category: "hot"
    },
    {
        productId: 6,
        productName: "Cappuccino",
        productImage: require("../img/app_POS/cappuccino.jpeg"),
        price: [38, 42, 46],
        allergies: "Milk",
        description: "to be continued..",
        favourite: false,
        category: "hot"
    },
    {
        productId: 7,
        productName: "Café Mocha",
        productImage: require("../img/app_POS/Café-Mocha.jpg"),
        price: [38, 42, 46],
        allergies: "Milk, Cocoa powder",
        description: "to be continued..",
        favourite: true,
        category: "hot"
    },
    {
        productId: 8,
        productName: "Caramel Macchiato",
        productImage: require("../img/app_POS/Caramel-Macchiato.jpg"),
        price: [45, 48, 51],
        allergies: "Milk",
        description: "to be continued..",
        favourite: true,
        category: "hot"
    }
];

let coldcoffee = [
    {
        productId: 9,
        productName: "Iced Coffee",
        productImage: require("../img/app_POS/Iced-Coffee.jpg"),
        price: [36, 42, 50],
        allergies: "none",
        description: "to be continued..",
        favourite: false,
        category: "cold"
    },
    {
        productId: 10,
        productName: "Iced Latte",
        productImage: require("../img/app_POS/Iced-Latte.jpg"),
        price: [38, 44, 48],
        allergies: "Milk",
        description: "to be continued..",
        favourite: false,
        category: "cold"
    },
    {
        productId: 11,
        productName: "Iced Cappuccino",
        productImage: require("../img/app_POS/Iced-cappuccino.jpg"),
        price: [38, 42, 46],
        allergies: "Milk",
        description: "to be continued..",
        favourite: false,
        category: "cold"
    },
    {
        productId: 12,
        productName: "Iced Mocha",
        productImage: require("../img/app_POS/Iced-mocha.jpg"),
        price: [38, 42, 46],
        allergies: "Milk, Cocoa powder",
        description: "to be continued..",
        favourite: true,
        category: "cold"
    },
    {
        productId: 13,
        productName: "Iced Caramel Macchiato",
        productImage: require("../img/app_POS/Iced-caramel-macchiato.jpg"),
        price: [45, 48, 51],
        allergies: "Milk",
        description: "to be continued..",
        favourite: true,
        category: "cold"
    }
];

let drinks = [
    {
        productId: 14,
        productName: "Lemon Iced Tea",
        productImage: require("../img/app_POS/Lemon-Iced-Tea.jpg"),
        price: [38, 47, 55],
        allergies: "Lemon",
        description: "to be continued",
        favourite: false
    },
    {
        productId: 15,
        productName: "Peach Iced Tea",
        productImage: require("../img/app_POS/Peach-Iced-tea.jpg"),
        price: [38, 47, 55],
        allergies: "Peach",
        description: "to be continued",
        favourite: true
    },
    {
        productId: 16,
        productName: "Raspberry Iced Tea",
        productImage: require("../img/app_POS/Raspberry-Iced-Tea.jpg"),
        price: [38, 47, 55],
        allergies: "Raspberry",
        description: "to be continued",
        favourite: false
    },
    {
        productId: 17,
        productName: "Pineapple Iced Tea",
        productImage: require("../img/app_POS/Pineapple-Iced-Tea.jpg"),
        price: [38, 47, 55],
        allergies: "Pineapple",
        description: "to be continued",
        favourite: false
    }
];

let food = [
    {
        productId: 18,
        productName: "Scones",
        productImage: require("../img/app_POS/scones.jpg"),
        price: 37,
        allergies: "Wheat, Milk, Eggs, Butter, Cocoa powder",
        description: "to be continued",
        favourite: false
    },
    {
        productId: 19,
        productName: "Croissant",
        productImage: require("../img/app_POS/croissant.jpg"),
        price: 38,
        allergies: "Wheat, Milk, Eggs, Butter",
        description: "to be continued",
        favourite: false
    },
    {
        productId: 20,
        productName: "Brioche",
        productImage: require("../img/app_POS/brioche.jpg"),
        price: 44,
        allergies: "Wheat, Milk, Eggs, Butter",
        description: "to be continued",
        favourite: false
    },
    {
        productId: 21,
        productName: "Cinnamon Bun",
        productImage: require("../img/app_POS/Cinnamon-bun.jpg"),
        price: 46,
        allergies: "Wheat, Milk, Eggs, Butter, Cinnamon",
        description: "to be continued",
        favourite: true
    },
    {
        productId: 22,
        productName: "Brownie",
        productImage: require("../img/app_POS/brownie.jpg"),
        price: 44,
        allergies: "Wheat, Milk, Eggs, Butter, Cocoa powder",
        description: "to be continued",
        favourite: false
    },
    {
        productId: 23,
        productName: "Oreo Slice",
        productImage: require("../img/app_POS/oreo.jpg"),
        price: 54,
        allergies: "Wheat, Milk, Eggs, Butter, but can also contain: Soy, Crustacean Shellfish, Peanuts, Tree nuts, Lupin, Mollusks, Sesame seeds",
        description: "to be continued",
        favourite: false
    },
    {
        productId: 24,
        productName: "Chia pudding",
        productImage: require("../img/app_POS/Chia-pudding.jpg"),
        price: 42,
        allergies: "Chia seeds, Coconut, Cocoa powder",
        description: "to be continued",
        favourite: false
    }
];

export {users, hotcoffee, coldcoffee, drinks, food};