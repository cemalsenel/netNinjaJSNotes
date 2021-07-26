const blogs= [
    {title:"hello world",likes:30},
    {title:"why are you here",likes:50}
];
console.log(blogs);

let user = {
    name:"jimmy",
    age:20,
    email:"jimmy@gmail.com",
    location:"berlin",
    blogs:[
        {title:"hello world",likes:30},
        {title:"why are you here",likes:50}
    ],
    login(){
        console.log("the user logged in");
    },
    logout(){
    console.log("the user logged out")    
    },
    logBlogs(){
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
