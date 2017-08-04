const fs = require('fs');
const readline = require('readline');
const markdownpdf = require('markdown-pdf');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What function do you want to run? ',(functionName)=>{
        // filename = filename + ".md";
        console.log("you said: " + functionName);
        // runFunction(functionName) ;
        rl.close();
        eval((functionName +"()"));
        // rl.close();
        
});

// function runFunction(name){
//     eval((name +"()"));
//     // rl.close();
// }


function convertToMarkDownPDF(){
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question('What is the filename: ',(filename)=>{
        filename = filename + ".md";
        console.log("you said file name: " + filename);
        rl.close();
        // console.log("test1");

        fs.readFile(filename, (err,buffer) => {
            // console.log("test2");
            if (err){
                console.log(err.message);
                return;
            }
            console.log("File found!");
            let content = buffer.toString();
            markdownpdf().from.string(content)
                    .to(filename + '.pdf', () =>{
                        console.log('it worked');
                    })
            // let upcased = content.toUpperCase();
            // console.log(upcased);
        });
    })
}

function readAFile(){
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("what is your file name: ", (filename) =>{
        rl.close();
    
    fs.readFile(filename, (err,buffer) =>{
        if (err){
            console.log(err.message);
            return;
        }
        let content = buffer.toString();
        let upcased = content.toUpperCase();
        console.log(upcased);
        });
    });
}

function DNSLookup(){
    const dns = require('dns');
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("Type in a Domain Name: ", (URL) =>{
        rl.close();
        dns.lookup(URL, (err, address, family)=>{
            console.log('address: %j family: IPv%s',address, family);
        });    
    });
}

function readAndWrite(){
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
    rl.question("Input File: " , (inputFile) => {
        rl.question("Output File: ", (outputFile)=>{
        rl.close();
            fs.readFile(inputFile, (err, buffer)=>{
                if (err){
                    console.log(err.message);
                    return;
                }
                let content = buffer.toString();
                let upcased = content.toUpperCase();

                fs.writeFile(outputFile,'r',upcased, (err)=>{
                    if (err){
                        console.log(err.message);
                        return;
                    }
                    // throw err;
                    console.log("file copied");
                });
            });
        });
    });
}

function saveWebPage(){
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
    rl.question("URL Name " , (url) => {
        rl.close();
    
    var request = require('request');

    var options = {
        host: url,
        path: '/index.html'
    };
    request(url, function (error, response,body){
    console.log('error: ', error);
    console.log('statusCode: ',response && response.statusCode);
    console.log('body: ', body);
    })
    
    })
    
}
// test
// Creating A TCP server 
// const net = require('net');
// const server = net.createServer( (conncetion)=>{

// });
// server.listen(8989);

// command line utility "net cat" nc localhost 8989