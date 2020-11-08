const users = [
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

const menuItems = [
    {
        productId: 1,
        productName: "Black Coffee",
        productImage: require("../img/app_POS/black-coffee.jpeg"),
        price: [28, 32, 36],
        allergies: "none",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
        favourite: false,
        category: "hotCoffee"
    },
    {
        productId: 2,
        productName: "Americano",
        productImage: require("../img/app_POS/americano.jpg"),
        price: [32, 36, 40],
        allergies: "none",
        description: "to be continued..",
        favourite: false,
        category: "hotCoffee"
    },
    {
        productId: 3,
        productName: "Espresso",
        productImage: require("../img/app_POS/espresso.jpg"),
        price: [34, 38, 42],
        allergies: "none",
        description: "to be continued..",
        favourite: false,
        category: "hotCoffee"
    },
    {
        productId: 4,
        productName: "Cortado",
        productImage: require("../img/app_POS/cortado.jpg"),
        price: [36, 40, 44],
        allergies: "none",
        description: "to be continued..",
        favourite: false,
        category: "hotCoffee"
    },
    {
        productId: 5,
        productName: "Café Latte",
        productImage: require("../img/app_POS/Café-Latte.jpeg"),
        price: [38, 44, 48],
        allergies: "Milk",
        description: "to be continued..",
        favourite: true,
        category: "hotCoffee"
    },
    {
        productId: 6,
        productName: "Cappuccino",
        productImage: require("../img/app_POS/cappuccino.jpeg"),
        price: [38, 42, 46],
        allergies: "Milk",
        description: "to be continued..",
        favourite: false,
        category: "hotCoffee"
    },
    {
        productId: 7,
        productName: "Café Mocha",
        productImage: require("../img/app_POS/Café-Mocha.jpg"),
        price: [38, 42, 46],
        allergies: "Milk, Cocoa powder",
        description: "to be continued..",
        favourite: true,
        category: "hotCoffee"
    },
    {
        productId: 8,
        productName: "Caramel Macchiato",
        productImage: require("../img/app_POS/Caramel-Macchiato.jpg"),
        price: [45, 48, 51],
        allergies: "Milk",
        description: "to be continued..",
        favourite: true,
        category: "hotCoffee"
    },
    {
        productId: 9,
        productName: "Iced Coffee",
        productImage: require("../img/app_POS/Iced-Coffee.jpg"),
        price: [36, 42, 50],
        allergies: "none",
        description: "to be continued..",
        favourite: false,
        category: "coldCoffee"
    },
    {
        productId: 10,
        productName: "Iced Latte",
        productImage: require("../img/app_POS/Iced-Latte.jpg"),
        price: [38, 44, 48],
        allergies: "Milk",
        description: "to be continued..",
        favourite: false,
        category: "coldCoffee"
    },
    {
        productId: 11,
        productName: "Iced Cappuccino",
        productImage: require("../img/app_POS/Iced-cappuccino.jpg"),
        price: [38, 42, 46],
        allergies: "Milk",
        description: "to be continued..",
        favourite: false,
        category: "coldCoffee"
    },
    {
        productId: 12,
        productName: "Iced Mocha",
        productImage: require("../img/app_POS/Iced-mocha.jpg"),
        price: [38, 42, 46],
        allergies: "Milk, Cocoa powder",
        description: "to be continued..",
        favourite: true,
        category: "coldCoffee"
    },
    {
        productId: 13,
        productName: "Iced Caramel Macchiato",
        productImage: require("../img/app_POS/Iced-caramel-macchiato.jpg"),
        price: [45, 48, 51],
        allergies: "Milk",
        description: "to be continued..",
        favourite: true,
        category: "coldCoffee"
    },
    {
        productId: 14,
        productName: "Lemon Iced Tea",
        productImage: require("../img/app_POS/Lemon-Iced-Tea.jpg"),
        price: [38, 47, 55],
        allergies: "Lemon",
        description: "to be continued",
        favourite: false,
        category: "drink"
    },
    {
        productId: 15,
        productName: "Peach Iced Tea",
        productImage: require("../img/app_POS/Peach-Iced-tea.jpg"),
        price: [38, 47, 55],
        allergies: "Peach",
        description: "to be continued",
        favourite: true,
        category: "drink"
    },
    {
        productId: 16,
        productName: "Raspberry Iced Tea",
        productImage: require("../img/app_POS/Raspberry-Iced-Tea.jpg"),
        price: [38, 47, 55],
        allergies: "Raspberry",
        description: "to be continued",
        favourite: false,
        category: "drink"
    },
    {
        productId: 17,
        productName: "Pineapple Iced Tea",
        productImage: require("../img/app_POS/Pineapple-Iced-Tea.jpg"),
        price: [38, 47, 55],
        allergies: "Pineapple",
        description: "to be continued",
        favourite: false,
        category: "drink"
    },
    {
        productId: 18,
        productName: "Scones",
        productImage: require("../img/app_POS/scones.jpg"),
        price: 37,
        allergies: "Wheat, Milk, Eggs, Butter, Cocoa powder",
        description: "to be continued",
        favourite: false,
        category: "food"
    },
    {
        productId: 19,
        productName: "Croissant",
        productImage: require("../img/app_POS/croissant.jpg"),
        price: 38,
        allergies: "Wheat, Milk, Eggs, Butter",
        description: "to be continued",
        favourite: false,
        category: "food"
    },
    {
        productId: 20,
        productName: "Brioche",
        productImage: require("../img/app_POS/brioche.jpg"),
        price: 44,
        allergies: "Wheat, Milk, Eggs, Butter",
        description: "to be continued",
        favourite: false,
        category: "food"
    },
    {
        productId: 21,
        productName: "Cinnamon Bun",
        productImage: require("../img/app_POS/Cinnamon-bun.jpg"),
        price: 46,
        allergies: "Wheat, Milk, Eggs, Butter, Cinnamon",
        description: "to be continued",
        favourite: true,
        category: "food"
    },
    {
        productId: 22,
        productName: "Brownie",
        productImage: require("../img/app_POS/brownie.jpg"),
        price: 44,
        allergies: "Wheat, Milk, Eggs, Butter, Cocoa powder",
        description: "to be continued",
        favourite: false,
        category: "food"
    },
    {
        productId: 23,
        productName: "Oreo Slice",
        productImage: require("../img/app_POS/oreo.jpg"),
        price: 54,
        allergies: "Wheat, Milk, Eggs, Butter, but can also contain: Soy, Crustacean Shellfish, Peanuts, Tree nuts, Lupin, Mollusks, Sesame seeds",
        description: "to be continued",
        favourite: false,
        category: "food"
    },
    {
        productId: 24,
        productName: "Chia pudding",
        productImage: require("../img/app_POS/Chia-pudding.jpg"),
        price: 42,
        allergies: "Chia seeds, Coconut, Cocoa powder",
        description: "to be continued",
        favourite: false,
        category: "food"
    }
];

const footerIcons = [
    {
        id: 1,
        name: "home",
        image: require("../img/footer_icons/home.png"),
        alt: "navigate home"
    },
    {
        id: 2,
        name: "user",
        image: require("../img/footer_icons/user.png"),
        alt: "go to user profile"
    },
    {
        id: 3,
        name: "favorite",
        image: require("../img/footer_icons/favorite.png"),
        alt: "show your favorite items"
    },
    {
        id: 4,
        name: "cart",
        image: require("../img/footer_icons/cart.png"),
        alt: "navigate to your shopping cart"
    },
    {
        id: 5,
        name: "options",
        image: require("../img/footer_icons/more.png"),
        alt: "display your user settings"
    },
];

const posFooterIcons = [
    {
        id: 1,
        name: "Coffee",
        image: require("../img/POS_footer_icons/Coffee-bean.png"),
    },
    {
        id: 2,
        name: "Drinks",
        image: require("../img/POS_footer_icons/Drinks.png"),
    },
    {
        id: 3,
        name: "Orders",
        image: require("../img/POS_footer_icons/Orders.png"),
    },
    {
        id: 4,
        name: "Food",
        image: require("../img/POS_footer_icons/Croissant.png"),
    },
    {
        id: 5,
        name: "Calculator",
        image: require("../img/POS_footer_icons/Calculator.png"),
    },
    {
        id: 6,
        name: "Receipts",
        image: require("../img/POS_footer_icons/Receipt.png"),
    },
    {
        id: 7,
        name: 'Menu',
        image: require("../img/POS_footer_icons/Menu.png"),
    }
];

const orderHistory = [
    {
        id: 1,
        number: 1001,
        items: [
            {
                name: "Café Latte",
                quantity: 1,
                size: "Small",
            },
            {
                name: "Iced Cappuccino",
                quantity: 1,
                size: "Medium",
            },
            {
                name: "Scones",
                quantity: 1,
                size: "One size"
            }
        ],
        total: 117
    },
    {
        id: 2,
        number: 1002,
        items: [
            {
                name: "Black Coffee",
                quantity: 1,
                size: "Medium",
            },
            {
                name: "Cappuccino",
                quantity: 1,
                size: "Large",
            },
            {
                name: "Brownie",
                quantity: 2,
                size: "One size"
            }
        ],
        total: 122
    },
    {
        id: 3,
        number: 1003,
        items: [
            {
                name: "Café Mocha",
                quantity: 2,
                size: "Medium",
            },
            {
                name: "Cinnamon Bun",
                quantity: 1,
                size: "One size",
            },
            {
                name: "Oreo Slice",
                quantity: 1,
                size: "One size"
            }
        ],
        total: 184
    },
    {
        id: 4,
        number: 1004,
        items: [
            {
                name: "Black Coffee",
                quantity: 2,
                size: "Medium",
            },
            {
                name: "Brioche",
                quantity: 2,
                size: "One size"
            }
        ],
        total: 152
    },
    {
        id: 5,
        number: 1005,
        items: [
            {
                name: "Raspberry Iced Tea",
                quantity: 1,
                size: "Medium",
            },
            {
                name: "Cinnamon Bun",
                quantity: 1,
                size: "One size"
            }
        ],
        total: 93
    },
    {
        id: 6,
        number: 1006,
        items: [
            {
                name: "Iced Caramel Macchiato",
                quantity: 1,
                size: "Large"
            }
        ],
        total: 51
    },
    {
        id: 7,
        number: 1007,
        items: [
            {
                name: "Espresso",
                quantity: 1,
                size: "Small",
            },
            {
                name: "Chia pudding",
                quantity: 1,
                size: "One size"
            }
        ],
        total: 76
    }
];

const cartIcons = [
    {
        id: 1,
        name: "Add",
        image: require("../img/app_POS/add.png"),
    },
    {
        id: 2,
        name: "Subtract",
        image: require("../img/app_POS/sub.png"),
    },
    {
        id: 3,
        name: "Discard",
        image: require("../img/app_POS/bin.png"),
    }
];

const posCartIcons = [
    {
        name: "Park",
        image: require("../img/app_POS/parking.png"),
        alt: "Park Icon"
    },
    {
        name: "Checkout",
        image: require("../img/app_POS/cashRegister.png"),
        alt: "Register Icon"
    },
    {
        name: "More",
        image: require("../img/app_POS/more-alt.png"),
        alt: "More Icon"
    },
    {
        name: "Trash",
        image: require("../img/app_POS/Trash.png"),
        alt: "Trash Icon"
    }
]

let singleItem = 
    {
        productId: 1,
        productName: "Black Coffee",
        productImage: require("../img/app_POS/black-coffee.jpeg"),
        price: [28, 32, 36],
        allergies: "none",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
        favourite: false,
        category: "hotCoffee"
    }
;

export {users, menuItems, footerIcons, posFooterIcons, cartIcons, orderHistory, posCartIcons, singleItem};
