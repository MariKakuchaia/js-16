//1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და
// დააბრუნებს true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი.
const number = (x) => {
    if(x % 2==0){
        return true;
    }else{
        return false;
    }
}
console.log(number(4));
console.log(number(7));


// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს
// (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ)
// თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.
const getCurrencySymbolFromCode =(currency)=>{
    if(currency==="USD"){
        return "$";
    }
    else if(currency==="EUR"){
        return "€";
    }
    else if(currency==="GEL"){
        return "ლ"
    }
    else{
        return getCurrencySymbolFromCode;
    }
}
console.log(getCurrencySymbolFromCode("GEL"));
//console.log(getCurrencySymbolFromCode("Fr"));// დააბრუნებს კოდს.


//3. დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) 
//და დააბრუნებს LowerCase (my name is john) სტრინგს.
const LowerCase = (string) =>{
    let low = string.toLowerCase();
    return low;
}
console.log(LowerCase("MY NAME IS JOHN"));



//4. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს 
//გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.
const numbers=[1,2,3,4,5,6,7,8];
const numbfn=numbers.filter((num)=>{
    if(num % 2==0){
        return num;
    }
})
console.log(numbfn);


//5. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name)
// და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის
// name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.
const users=[
    {name:"mari",address:"Tbilisi"},
    {name:"nika",address:"KuTaisi"},
    {name:"saba",address:"Telavi"},
    {name:"nino",address:"Ureki"},
    {name:"eka",address:"Batumi"},
];
const userNino=users.find((user)=>{
    return user.name==="nino";
})
console.log(userNino);