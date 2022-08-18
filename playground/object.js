// Object property shorthand

const name = 'Yuri';
const userAge = 27;

const user = {
	name,
	age: userAge,
	location: 'Philadelphia',
};

console.log(user);

// Object destructuring

const product = {
    label: 'Livro vermelho',
    price: 3,
    stock: 201,
    salePrice: undefined,
}

// const label = product.label
// const stock = product.stock
 
// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)

const transaction = (type, {label, stock}) =>{
    console.log()
}

transaction('order', product)