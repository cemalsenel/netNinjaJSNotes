let age= 30; //eğer let'lerin hepsini const yaparsak alacağımız sonuçlar değişmeyecektir


if(true){
    let age = 40;
    let name = "shaun";
    console.log("inside 1st code block : ",age,name);

    if(true){
        let age = 50;//bu block un içinde geçerli
        let name = "Tim";
        console.log("inside 2nd code block : ",age,name);
        var test ="hello";//her yerden ulaşılabiliyor
    }
}

console.log("outside code block : ",age,test);//name scope un dışında kaldığı için, console.log un içine yazsakta  çalışmıyor