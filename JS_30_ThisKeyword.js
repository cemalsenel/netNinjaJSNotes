let user = {
    name:"jimmy",
    age:20,
    email:"jimmy@gmail.com",
    location:"berlin",
    blogs:["cheese rules","hi to everyone"],
    login(){
        console.log("the user logged in");
    },
    logout: function(){
    console.log("the user logged out")    
    },
    logBlogs:function(){
        //console.log(user.blogs);
        //console.log(this.blogs);
        console.log("this user has written the following blogs :");
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.logBlogs();
user.login();
user.logout();
//console.log(this);