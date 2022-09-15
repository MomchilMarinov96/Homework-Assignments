function renderCard(menuItem, container) {

    let cardContainer = document.createElement('div');
    cardContainer.classList.add('menuItem-card');

    let img = document.createElement('img');
    img.src = menuItem.image;

    let h3 = document.createElement('h3');
    h3.innerText = menuItem.name;

    let p = document.createElement('p');
    p.innerText = "Тегло: " + menuItem.weight + "гр";

    let c = document.createElement('p');
    c.innerText = "Категория: " + menuItem.category;

    let price = document.createElement('p');
    price.innerText = "Цена: " + menuItem.price + "лв";

    let formElement = document.createElement('form');
    formElement.classList.add("addForm");
    let addToCartButton = document.createElement('button');
    addToCartButton.setAttribute.type = "submit"
    addToCartButton.innerText = "Add to cart";
    addToCartButton.classList.add('addButton');
    formElement.appendChild(addToCartButton);
    formElement.addEventListener("submit", function(event) {
        addToCart(event, menuItem);
    });

    cardContainer.append(img, h3, p, c, price, formElement);


    container.appendChild(cardContainer);



}


let mainPage = document.getElementById("main_page");
for (let i = 0; i <data.length; i++) {
    renderCard(data[i] , mainPage);
}

function renderCart () {
    if(Object.keys(myCart).length > 0) {
        let cartContainer = document.createElement('div');
        cartContainer.classList.add('containerForCart');
    
        let itemsList = document.createElement("ol");
        itemsList.classList.add('cartItems');
        
    
        for(let i= 0; i < Object.keys(myCart).length; i++) {
            let currentItem = Object.keys(myCart)[i];
            let currentData = data.find(function (product) {
                return product.productID == currentItem;
            })
            let listELement = document.createElement("li");
            
            itemsList.appendChild(listELement);
            listELement.innerText = `${currentData.name}  ${currentData.price} брой: ${myCart[currentItem].quantity}`;
            
        }   

        cartContainer.appendChild(itemsList);
        document.getElementById("cart_page").appendChild(cartContainer);
    } else {
        let message = document.createElement('p');
        message.innerText = "Количката е празна";
        let children = document.getElementById("cart_page").children;
        if (children.length > 0) {
            document.getElementById("cart_page").replaceChild(message, children[0]);
        } else {
            document.getElementById("cart_page").appendChild(message);
        }
        
    }
    

}

document.getElementById("cartID").addEventListener("click", renderCart);

