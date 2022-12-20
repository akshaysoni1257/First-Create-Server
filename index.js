const http=require('http');

const port=5000;

function reqhandler(req,res)
{
    res.write("<h1>Hello World"+req.url);
    res.end();
}

const se = http.createServer(reqhandler);

se.listen(port,(err)=>{
        if(err)
        {
            console.log("Your Server Is Not Start");
            return false;
        }
        console.log("Server Is Started"+port);
});