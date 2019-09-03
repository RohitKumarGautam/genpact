var fs = require("fs");
fs.readFile("renamed.txt", "utf8", readingCompleted);

function readingCompleted(error, data){

    if(error){
        console.log(error);
    }
    else{
        fs.writeFile("NewDelhi.txt", data, "utf8", writingCompleted);
        function writingCompleted(error2){
            if(error2){
                console.log(error2);
            }
            else
                console.log("File copied");
        }
    }
}