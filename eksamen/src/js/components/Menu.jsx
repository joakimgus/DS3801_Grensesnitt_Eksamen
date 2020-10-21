import React from 'react';

const Menu = (menu) => {

    return (
        <div className="productCard">
            {console.log(menu.menu.coffee)}
            {menu.menu.coffee.hot}
        </div>
    )
}

export default Menu;