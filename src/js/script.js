





let soloProd = [];

function sum(sum, coupon, ...products) {

   let soloProd = products.filter(item => item >= 260);

   soloProd.forEach(item => console.log(item + ' - Покупать отдельно!'));
   console.log(typeof (soloProd))

};



setTimeout(function () { console.log('hi') }, 2000);


let rrr = {
   red: true,
   age: 21,
   sayHI() {
      console.log('hi')
   },
}

aaa = rrr;

aaa.age = 27;

console.log(rrr.age);


rrr.sayHI()



function User(name) {



   this.name = name;
   this.isAdmin = false;


}






console.log(User);






let rus = {
   name: "zulf",
   age: 24,
   schol: "14 gimnazium",
}

let ppp = JSON.stringify(rus);


console.log(ppp);

ppp = JSON.parse(ppp);

console.log(ppp);