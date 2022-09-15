const data = [
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/rolled-diuner-15-of-50.jpg",
        name: "Rolled Дюнер",
        weight: 500,
        category: "Дюнери",
        price: 6.99,
        productID: 101,
    },
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/diuner-2-of-50.jpg",
        name: "Дюнер среден",
        weight: 250,
        category: "Дюнери",
        price: 4.4,
        productID: 102,
    },
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/diuner-2-of-50.jpg",
        name: "Дюнер голям",
        weight: 350,
        category: "Дюнери",
        price: 6.2,
        productID: 103,
    },
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/diuner-2-of-50.jpg",
        name: "Дюнер XL",
        weight: 500,
        category: "Дюнери",
        price: 7.4,
        productID: 104,

    },
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/diuner-box-11-of-50.jpg",
        name: "Дюнер box",
        weight: 400,
        category: "Дюнери",
        price: 6.99,
        productID: 105,
    },
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/diuner-djob-19-of-50.jpg",
        name: "Дюнер джоб",
        weight: 600,
        category: "Дюнери",
        price: 6.99,
        productID: 106,
    },
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/porcia-diuner-31-of-50.jpg",
        name: "Дюнер порция",
        weight: 700,
        category: "Дюнери",
        price: 8.99,
        productID: 107,
    },
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/burger-s-diuner-meso-i-kartofi-48-of-50.jpg",
        name: "Бургер с месо от дюнер и картофи",
        weight: 350,
        category: "Бургери",
        price: 9.49,
        productID: 108,
    },
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/burger-s-diuner-meso-i-kartofi-48-of-50.jpg",
        name: "Бургер с телешко месо",
        weight: 350,
        category: "Бургери",
        price: 9.99,
        productID: 109,
    },
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/burger-s-diuner-meso-i-kartofi-48-of-50.jpg",
        name: "Бургер с хрупкаво пилешко",
        weight: 350,
        category: "Бургери",
        price: 9.49,
        productID: 110,
    },
    {
        image: "https://www.parcheto.bg/wp-content/uploads/2022/04/hrupkavo-pile-s-garnitura-sos-01.jpg",
        name: "Хрупкаво пиле с гарнитура и сос",
        weight: 350,
        category: "Предястия",
        price: 8.99,
        productID: 111,
    }
   
]

function MenuOption(image, name, weight, category, price) {
    this.image = image;
    this.name = name;
    this.weight = weight;
    this.category = category;
    this.price = price;
}


function MenuData(data) {

    this.allMenuItems = data.map(
        item => new MenuOption(
            item.image,
            item.name,
            item.weight,
            item.category,
            item.price)
    );

}

let myCart = {};

function addToCart(event, productItem) {
    if(myCart[productItem.productID]) {
        myCart[productItem.productID].quantity += 1;
    } else {
        myCart[productItem.productID] = {quantity: 1};
    }

    console.log(myCart);
}


