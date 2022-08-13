import faker from "faker";

const mount = el => {
    const cartCount = faker.datatype.number();
    const cart = `<div> you have ${cartCount} items in cart`;
    el.innerHTML = cart;
};

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-cart')
    if(el){
        mount(el)
    }
}

export {mount};