document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".weapon-types");
    const basketContent = document.querySelector(".basket-content");
    const totalPrice = document.querySelector(".total-price > p");
    const clearCartButton = document.querySelector(".clear-cart");

    if (localStorage.getItem("myCart") === null) {
        localStorage.setItem("myCart", JSON.stringify([]));
    }

    const updateBasketView = () => {
        const myCart = JSON.parse(localStorage.getItem("myCart"));
        let total = 0;
        let basketHtml = "";

        if (myCart) {
            myCart.forEach((item) => {
                basketHtml += `
                    <div class="basket-item">
                        <img src="${item.photo}" alt="gun">
                        <div class="basket-gun-info">
                            <p>${item.name} x ${item.count}</p>
                            <p>PRICE: ${item.price * item.count}$</p>
                        </div>
                        <div class="basket-manipulation">
                            <button class="add-item" data-id="${item.id}">ADD</button>
                            <button class="delete-item" data-id="${item.id}">DELETE</button>
                        </div>
                        <button class="remove-block" data-id="${item.id}">x</button>
                    </div>
                `;
                total += item.price * item.count;
            });
        }

        basketContent.innerHTML = basketHtml;
        totalPrice.textContent = `TOTAL PRICE: ${total} $`;

        const addBtns = document.querySelectorAll(".add-item");
        const deleteBtns = document.querySelectorAll(".delete-item");
        const removeBlockBtn = document.querySelectorAll(".remove-block");

        removeBlockBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                const itemID = btn.getAttribute("data-id");
                const updatedCart = myCart.filter((item) => item.id !== itemID);

                localStorage.setItem("myCart", JSON.stringify(updatedCart));
                updateBasketView();
            });
        });

        addBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const itemID = btn.getAttribute("data-id");
                const selectedItem = myCart.find((item) => item.id === itemID);

                if (selectedItem) {
                    selectedItem.count++;
                    localStorage.setItem("myCart", JSON.stringify(myCart));
                    updateBasketView();
                }
            });
        });

        deleteBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const itemID = btn.getAttribute("data-id");
                const selectedItemIndex = myCart.findIndex((item) => item.id === itemID);

                if (selectedItemIndex !== -1) {
                    const selectedItem = myCart[selectedItemIndex];
                    if (selectedItem.count > 1) {
                        selectedItem.count--;
                    } else {
                        myCart.splice(selectedItemIndex, 1);
                    }

                    localStorage.setItem("myCart", JSON.stringify(myCart));
                    updateBasketView();
                }
            });
        });

        updateTotalPrice();
    };

    const updateTotalPrice = () => {
        const myCart = JSON.parse(localStorage.getItem("myCart"));
        let total = 0;

        if (myCart) {
            myCart.forEach((item) => {
                total += item.price * item.count;
            });
        }

        totalPrice.textContent = `TOTAL PRICE: ${total} $`;
    };

    clearCartButton.addEventListener("click", () => {
        localStorage.removeItem("myCart");
        updateBasketView();
    });

    updateBasketView();

    fetch("db.json")
        .then(response => response.json())
        .then((data) => {
            let files = "";
            data.weapons.forEach(weapon => {
                files += `
                    <div class="weapon-item">
                        <img src="${weapon.photo_url}" alt="gun">
                        <div class="weapon-info">
                            <p>Name : ${weapon.name}</p>
                            <p>Type : ${weapon.class}</p>
                            <p>Ammo count : ${weapon.ammo_count}</p>
                            <p>Rate of fire : ${weapon.rate_of_fire}</p>
                            <p>Country : ${weapon.country_of_origin}</p>
                            <p>Price: ${weapon.price} $</p>
                            <button
                                data-price="${weapon.price}"
                                data-id="${weapon.id}"
                                data-name="${weapon.name}"
                                data-photo="${weapon.photo_url}"
                                class="add-to-basket">ADD TO CART</button>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = files;
            const addToBasketBtn = document.querySelectorAll(".add-to-basket");

            addToBasketBtn.forEach((btn) => {
                btn.addEventListener("click", () => {
                    if (localStorage.getItem("myCart") === null) {
                        localStorage.setItem("myCart", JSON.stringify([]))
                    };
                    let myCart = JSON.parse(localStorage.getItem("myCart"));
                    let weaponID = btn.getAttribute("data-id");
                    let weaponName = btn.getAttribute("data-name");
                    let weaponPrice = btn.getAttribute("data-price");
                    let weaponPhoto = btn.getAttribute("data-photo");
                    let existingItem = myCart.find((elem) => elem.id == weaponID);

                    if (existingItem) {
                        existingItem.count++;
                    } else {
                        myCart.push({
                            id: weaponID,
                            name: weaponName,
                            price: weaponPrice,
                            count: 1,
                            photo: weaponPhoto
                        })
                    }

                    localStorage.setItem("myCart", JSON.stringify(myCart));

                    updateBasketView();
                })
            })
        })
});
