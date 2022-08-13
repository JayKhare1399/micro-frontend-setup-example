import {mount as productMount} from 'products/ProductsIndex';
import {mount as cartMount } from 'cart/CartShow';

productMount(document.querySelector('#container-dev-products'));
cartMount(document.querySelector('#container-dev-cart'));
console.log("Container !!")