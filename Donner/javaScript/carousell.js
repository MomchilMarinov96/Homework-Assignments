var PAGE_IDS = ["login_page", "register_page","main_page",
    "cart_page",
    "order_page"    
];

function handleRouteChange() {
    let pageId = location.hash.slice(1);
    if(!pageId) {
        pageId = PAGE_IDS[0];
    }
    let loggedIn = localStorage.getItem('isLogged');
    PAGE_IDS.forEach(pId => {
        let element = document.getElementById(pId);
        if((pId === pageId && loggedIn) || (!loggedIn && pId === "login_page") || (!loggedIn && pId === "register_page")) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })
}

window.addEventListener('load', handleRouteChange);
window.addEventListener('hashchange', handleRouteChange);