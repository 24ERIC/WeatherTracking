
let text = "aaaasssss";
deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');


(async function() {
    var resp = await deepai.callStandardApi("text-generator", {
            text: text,
    });
    await console.log(resp);
    document.getElementById("generatedText").innerHTML = resp.output;
})()
































// Create a request variable and assign a new XMLHttpRequest object to it.
//var request = new XMLHttpRequest()

// let text = "Jeff was walking home from the station after getting back from his coding camp. It was already midnight, but this was nothing new to Jeff. He always stayed late after class because he was such an upstanding, hard-working member of team--at least, that's what he hoped everyone thought of him, anyway.";

// OUR ENDPOINT IN EC2 **************************
// let text = prompt("Please enter your text", "Once upon a time...");

// fetch("http://ec2-54-199-65-160.ap-northeast-1.compute.amazonaws.com/generate/" + text)
// .then(response => {
//     return response.json()
// })
// .then(output=>{
//   console.log(output);
//   document.getElementById("generatedText").innerHTML = output.result;
// })






// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

// deepai.setApiKey('85b4427e-815e-4efd-99e2-de892b8f2d22');

// (async function() {
//     var resp = await deepai.callStandardApi("text-generator", {
//             text: "YOUR_TEXT_URL",
//     });
//     console.log(resp);
// })()


// // Example posting file picker input text (Browser only):

// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

// deepai.setApiKey('85b4427e-815e-4efd-99e2-de892b8f2d22');

// (async function() {
//     var resp = await deepai.callStandardApi("text-generator", {
//             text: document.getElementById('yourFileInputId'),
//     });
//     console.log(resp);
// })()


// // Example posting a local text file (Node.js only):
// const fs = require('fs');

// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

// deepai.setApiKey('85b4427e-815e-4efd-99e2-de892b8f2d22');

// (async function() {
//     var resp = await deepai.callStandardApi("text-generator", {
//             text: fs.createReadStream("/path/to/your/file.txt"),
//     });
//     console.log(resp);
// })()


