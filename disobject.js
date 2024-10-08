// distruction of object
const band={
    bandName: 'prakash karki',
    famousSong:'country road',
    year:1968,
    anotherFamoursSong: 'love me like you do'
};
let {bandName:var1,famousSong:var2,...var3}=band;//The bandName variable is assigned the value of the bandName property from the band object, which is 'prakash karki'.
 console.log(var3.anotherFamoursSong)
console.log(var1);
console.log(var2);
console.log(var3);
// const { bandName,famousSong}=band;
// console.log(bandName);
// console.log(famousSong);
