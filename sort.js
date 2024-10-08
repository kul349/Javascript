const product=[
    {productId:1,productName:"phone",price:223},
    {productId:2,productName:"laptop",price:423},
    {productId:3,productName:"camera",price:663},
    {productId:4,productName:"ipad",price:123},


]
const lowToHigh=product.slice(0).sort((a,b)=>{
    return a.price-b.price;
});
console.log(lowToHigh);

const HighToLow=product.slice(0).sort((a,b)=>{
    return  b.price-a.price;
})
console.log(HighToLow);