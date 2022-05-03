const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000},];

// Q2.1 Filter and show the product that will be bought when you don't have much money I mean Cheap one
const cheap = item.reduce((item1, item2) =>
    item1.price < item2.price ? item1 : item2
);
console.log(`the product that will be bought when I don't have much money${cheap.name} with the cost of ${cheap.price} USD`);

// Q2.2 Filter and show the product that will be expensive in the array
const expensive = item.reduce((item1, item2) =>
    item1.price > item2.price ? item1 : item2
);
console.log(`the product that will be expensive in the stock will be ${expensive.name} with price of ${expensive.price} USD`)

// Q2.3 Calculate the full price of all product combined
let sum = 0;
item.forEach((items)=> sum += items.price);
console.log(`the full price of all product combined is ${sum} USD`)

// Q2.4 Calculate the full price of all product combined and remove product that are under the 10 dollar
let sum2 = 0
item.forEach((items)=>{
    if(items.price > 10){
        sum2 += items.price
    }
}
)
console.log(`the full price of all product combined without product with price under 10 USD is ${sum2}`)


