//reduce method
// it works like this:
// accumulator         currentvalue        return
//   1                     2                 3
//   3                     7                 10
//   10                     4                 14
//   14                     5                 19
//    19                     6                25 => the final answer will be 25 
// const number=[1,2,7,4,5,6];
// const result=function(accumulator,currentValue){
//     return accumulator+currentValue;
// }
// const sum=number.reduce(result);
// console.log(sum);
const user=[
    {productId:1,productName:123,price:1236},
    {productId:2,productName:2344,price:3456},
    {productId:3,productName:567,price:2334},
]
const result=user.reduce((totalPrice,currentPrice )=>{
    return totalPrice +currentPrice.price;
},0)
console.log(result);
// TotalPrice            currentPrice                return 
//   0                      {}                       1236
// 1236                      {}                      4,692
// 4,692                     {}                      7026 =>  this is a total price of product 