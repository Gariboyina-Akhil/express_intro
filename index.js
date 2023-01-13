//express
const express = require("express");

const akhil = express();

akhil.use(express.json());

akhil.get("/",(request,response)=> {
    return response.json({hello : "hello people"});
});

akhil.get("/Myname/:userid", (request,response)=>{
    const users =[{
        id:1,
        name:"Akhil"
    },
    {
        id:2,
        name:"luffy"
    },
    {
        id:3,
        name:"naruto"
    }
    ];
    const userId = request.params.userid;
    const getUser = users.filter((user) => user.id === parseInt(userId));
    if(getUser.length === 0) return response.json({error : "No user found!!!"});
    return response.json({ user: getUser[0] });
});

akhil.listen(5050, () => console.log("akhil server is running"));