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
        productImage: require("../img/products/black-coffee.jpeg"),
        price: [28, 32, 36],
        allergies: "none",
        description: "Black coffee is simply coffee that is normally brewed without the addition of additives such as sugar, milk, cream or added flavours. Tt has a slightly bitter taste compared to when it is flavoured with additives.",
        favourite: false,
        category: "coffee"
    },
    {
        productId: 2,
        productName: "Americano",
        productImage: require("../img/products/americano.jpg"),
        price: [32, 36, 40],
        allergies: "none",
        description: "Caffè Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee. .",
        favourite: false,
        category: "coffee"
    },
    {
        productId: 3,
        productName: "Espresso",
        productImage: require("../img/products/espresso.jpg"),
        price: [34, 38, 42],
        allergies: "none",
        description: "Espresso is a coffee-making method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.",
        favourite: false,
        category: "coffee"
    },
    {
        productId: 4,
        productName: "Cortado",
        productImage: require("../img/products/cortado.jpg"),
        price: [36, 40, 44],
        allergies: "none",
        description: "A cortado is a beverage consisting of espresso mixed with a drizzle of warm milk to soften the taste and reduce the degree of bitterness of the coffee.",
        favourite: false,
        category: "coffee"
    },
    {
        productId: 5,
        productName: "Café Latte",
        productImage: require("../img/products/Café-Latte.jpeg"),
        price: [38, 44, 48],
        allergies: "Milk",
        description: "Caffe latte is a coffee drink made with espresso and steamed milk. The word comes from the Italian caffè e latte, caffelatte or caffellatte, which means coffee & milk.",
        favourite: true,
        category: "coffee"
    },
    {
        productId: 6,
        productName: "Cappuccino",
        productImage: require("../img/products/cappuccino.jpeg"),
        price: [38, 42, 46],
        allergies: "Milk",
        description: "A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam.",
        favourite: false,
        category: "coffee"
    },
    {
        productId: 7,
        productName: "Café Mocha",
        productImage: require("../img/products/Café-Mocha.jpg"),
        price: [38, 42, 46],
        allergies: "Milk, Cocoa powder",
        description: "A caffè mocha, also called mocaccino, is a chocolate-flavoured variant of a caffè latte. Other commonly used spellings are mochaccino and also mochachino.",
        favourite: true,
        category: "coffee"
    },
    {
        productId: 8,
        productName: "Caramel Macchiato",
        productImage: require("../img/products/Caramel-Macchiato.jpg"),
        price: [45, 48, 51],
        allergies: "Milk",
        description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle for an oh-so-sweet finish.",
        favourite: true,
        category: "coffee"
    },
    {
        productId: 9,
        productName: "Iced Coffee",
        productImage: require("../img/products/Iced-Coffee.jpg"),
        price: [36, 42, 50],
        allergies: "none",
        description: "Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division being cold brew.",
        favourite: false,
        category: "coffee"
    },
    {
        productId: 10,
        productName: "Iced Latte",
        productImage: require("../img/products/Iced-Latte.jpg"),
        price: [38, 44, 48],
        allergies: "Milk",
        description: "Iced Caffè Latte. Our dark, rich espresso combined with milk and served over ice. A perfect milk-forward cooldown.",
        favourite: false,
        category: "coffee"
    },
    {
        productId: 11,
        productName: "Iced Cappuccino",
        productImage: require("../img/products/Iced-cappuccino.jpg"),
        price: [38, 42, 46],
        allergies: "Milk",
        description: "Iced Cappuccino offers a balanced cup with a stronger espresso flavor and a velvety, frothy foam with a crisp, cool undercurrent.",
        favourite: false,
        category: "coffee"
    },
    {
        productId: 12,
        productName: "Iced Mocha",
        productImage: require("../img/products/Iced-mocha.jpg"),
        price: [38, 42, 46],
        allergies: "Milk, Cocoa powder",
        description: "Our rich, full-bodied espresso combined with bittersweet mocha sauce, milk and ice, then topped with sweetened whipped cream. The classic iced coffee drink that always sweetly satisfies.",
        favourite: true,
        category: "coffee"
    },
    {
        productId: 13,
        productName: "Iced Caramel Macchiato",
        productImage: require("../img/products/Iced-caramel-macchiato.jpg"),
        price: [45, 48, 51],
        allergies: "Milk",
        description: "We combine our rich, full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with a caramel drizzle for an oh-so-sweet finish",
        favourite: true,
        category: "coffee"
    },
    {
        productId: 14,
        productName: "Lemon Iced Tea",
        productImage: require("../img/products/Lemon-Iced-Tea.jpg"),
        price: [38, 47, 55],
        allergies: "Lemon",
        description: "Enjoy a nice cup of Iced Tea with a flavor of fresh lemon",
        favourite: false,
        category: "drink"
    },
    {
        productId: 15,
        productName: "Peach Iced Tea",
        productImage: require("../img/products/Peach-Iced-tea.jpg"),
        price: [38, 47, 55],
        allergies: "Peach",
        description: "Enjoy a nice cup of Iced Tea with a flavor of fresh Peach",
        favourite: true,
        category: "drink"
    },
    {
        productId: 16,
        productName: "Raspberry Iced Tea",
        productImage: require("../img/products/Raspberry-Iced-Tea.jpg"),
        price: [38, 47, 55],
        allergies: "Raspberry",
        description: "Enjoy a nice cup of Iced Tea with a flavor of fresh Raspberry",
        favourite: false,
        category: "drink"
    },
    {
        productId: 17,
        productName: "Pineapple Iced Tea",
        productImage: require("../img/products/Pineapple-Iced-Tea.jpg"),
        price: [38, 47, 55],
        allergies: "Pineapple",
        description: "Enjoy a nice cup of Iced Tea with a flavor of fresh Pineapple",
        favourite: false,
        category: "drink"
    },
    {
        productId: 18,
        productName: "Scones",
        productImage: require("../img/products/scones.jpg"),
        price: 37,
        allergies: "Wheat, Milk, Eggs, Butter, Cocoa powder",
        description: "A scone is a baked good, usually made of wheat, or oatmeal with baking powder as a leavening agent and baked on sheet pans. ",
        favourite: false,
        category: "food"
    },
    {
        productId: 19,
        productName: "Croissant",
        productImage: require("../img/products/croissant.jpg"),
        price: 38,
        allergies: "Wheat, Milk, Eggs, Butter",
        description: "A croissant is a buttery, flaky, viennoiserie pastry of Austrian origin, named for its historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough.",
        favourite: false,
        category: "food"
    },
    {
        productId: 20,
        productName: "Brioche",
        productImage: require("../img/products/brioche.jpg"),
        price: 44,
        allergies: "Wheat, Milk, Eggs, Butter",
        description: "Brioche is a bread of French origin that is similar to a highly enriched pastry, and whose high egg and butter content gives it a rich and tender crumb.",
        favourite: false,
        category: "food"
    },
    {
        productId: 21,
        productName: "Cinnamon Bun",
        productImage: require("../img/products/Cinnamon-bun.jpg"),
        price: 46,
        allergies: "Wheat, Milk, Eggs, Butter, Cinnamon",
        description: "Cinnamon roll is a sweet roll served commonly in Northern Europe and North America. In Sweden it is called kanelbulle, in Denmark it is known as kanelsnegl, in Norway it is known as Kanelbolle, Skillingsboller and Kanelsnurr.",
        favourite: true,
        category: "food"
    },
    {
        productId: 22,
        productName: "Brownie",
        productImage: require("../img/products/brownie.jpg"),
        price: 44,
        allergies: "Wheat, Milk, Eggs, Butter, Cocoa powder",
        description: "A chocolate brownie or simply a brownie is a square or rectangular chocolate baked confection. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density.",
        favourite: false,
        category: "food"
    },
    {
        productId: 23,
        productName: "Oreo Slice",
        productImage: require("../img/products/oreo.jpg"),
        price: 54,
        allergies: "Wheat, Milk, Eggs, Butter, but can also contain: Soy, Crustacean Shellfish, Peanuts, Tree nuts, Lupin, Mollusks, Sesame seeds",
        description: "Oreo Cake is moist chocolate cake layered with buttercream frosting that's blended with Oreo cookie crumbs.",
        favourite: false,
        category: "food"
    },
    {
        productId: 24,
        productName: "Chia pudding",
        productImage: require("../img/products/Chia-pudding.jpg"),
        price: 42,
        allergies: "Chia seeds, Coconut, Cocoa powder",
        description: "Chia pudding is the perfect healthy breakfast or snack to meal prep for the week. It's creamy, satisfying and loaded with protein, fiber and omega-3s.",
        favourite: false,
        category: "food"
    }
];

const footerIcons = [
    {
        id: 1,
        name: "home",
        image: require("../img/mobile-icons/home.png"),
        alt: "navigate home"
    },
    {
        id: 2,
        name: "user",
        image: require("../img/mobile-icons/user.png"),
        alt: "go to user profile"
    },
    {
        id: 3,
        name: "favorite",
        image: require("../img/mobile-icons/favorite.png"),
        alt: "show your favorite items"
    },
    {
        id: 4,
        name: "cart",
        image: require("../img/mobile-icons/cart.png"),
        alt: "navigate to your shopping cart"
    },
    {
        id: 5,
        name: "options",
        image: require("../img/mobile-icons/more.png"),
        alt: "display your user settings"
    },
];

const posFooterIcons = [
    {
        id: 1,
        name: "Coffee",
        image: require("../img/pos-icons/Coffee-bean.png"),
    },
    {
        id: 2,
        name: "Drinks",
        image: require("../img/pos-icons/Drinks.png"),
    },
    {
        id: 3,
        name: "Orders",
        image: require("../img/pos-icons/Orders.png"),
    },
    {
        id: 4,
        name: "Food",
        image: require("../img/pos-icons/Croissant.png"),
    },
    {
        id: 5,
        name: "Calculator",
        image: require("../img/pos-icons/Calculator.png"),
    },
    {
        id: 6,
        name: "Receipts",
        image: require("../img/pos-icons/Receipt.png"),
    },
    {
        id: 7,
        name: 'Menu',
        image: require("../img/pos-icons/Menu.png"),
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
        image: require("../img/mobile-icons/add.png"),
    },
    {
        id: 2,
        name: "Subtract",
        image: require("../img/mobile-icons/sub.png"),
    },
    {
        id: 3,
        name: "Discard",
        image: require("../img/mobile-icons/bin.png"),
    }
];

const posCartIcons = [
    {
        name: "Park",
        image: require("../img/pos-icons/parking.png"),
        alt: "Park Icon"
    },
    {
        name: "Checkout",
        image: require("../img/pos-icons/cash-register.png"),
        alt: "Register Icon"
    },
    {
        name: "More",
        image: require("../img/pos-icons/edit.png"),
        alt: "More Icon"
    },
    {
        name: "Trash",
        image: require('../img/pos-icons/trash.png'),
        alt: "Trash Icon"
    }
]

const calcIcons = [
    {

        name: "exchange",
        image: require('../img/pos-icons/exchange.png'),
        alt: "Exchange Icon"
    },
    {

        name: "graph",
        image: require('../img/pos-icons/linegraph.png'),
        alt: "Graph Icon"
    },
    {

        name: "square",
        image: require('../img/pos-icons/square-sign.png'),
        alt: "Square Icon"
    },
    {

        name: "science",
        image: require('../img/pos-icons/science.png'),
        alt: "Science Icon"
    }
]

let singleItem = {
    productId: 1,
    productName: "Black Coffee",
    productImage: require("../img/products/black-coffee.jpeg"),
    price: [28, 32, 36],
    allergies: "none",
    description: "Black coffee is the most common tool for adults all around the world to wake up in the morning and start the day.",
    favourite: false,
    category: "coffee"
};

let singleItemProperties = {
    coffe: require("../img/mobile-icons/Coffee-icon.png"),
    milk: require('../img/mobile-icons/milk.png'),
    noMilk: require('../img/mobile-icons/no-milk.png'),
    lactoseFree: require('../img/mobile-icons/lactose-free.png'),
};

export { users, menuItems, footerIcons, posFooterIcons, cartIcons, orderHistory, posCartIcons, singleItem, singleItemProperties, calcIcons };
