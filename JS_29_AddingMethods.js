let user = {
    name:"jimmy",
    age:20,
    email:"jimmy@gmail.com",
    location:"berlin",
    blogs:["cheese rules","hi to everyone"],
    login:function(){
        console.log("the user logged in");
    },
    logout:function(){
    console.log("the user logged out")    
    },
    logBlogs:function(){
        
    }
};

user.login();
user.logout();

