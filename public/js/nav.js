const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="Images/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="cart"><img src="Images/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="home" class="link">home</a></li>
            <li class="link-item"><a href="products" class="link">products</a></li>
            <li class="link-item"><a href="logout" class="link">log out</a></li>
            <li class="link-item"><a href="signout" class="link">sign out</a></li>
        </ul>
    `;
}

createNav();