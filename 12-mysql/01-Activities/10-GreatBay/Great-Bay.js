// price
// type of computer
// hardware or software

var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bidDB"
});

connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    begin();
    // bidJob();
    // bidPost();
});

function begin(){
    inquirer.prompt({
        name: "PB",
        type: "input",
        message: "Would you like to post or bid?",
        choices: ["Post", "Bid"]
        }).then(function(answer){
        if(answer.PB.toUpperCase() === "POST"){
            bidPost();
        }
        // else{
        //     bidJob();
        // }
    });
}

function bidPost() {
    inquirer.prompt([{
        name: "postQuestions",
        type: "input",
        message: "How much would you like to charge?"
    },
        {
        name: "OS",
        type: "input",
        message: "Windows or Mac"
    },
        {
        name: "typeOfBid",
        type: "input",
        message: "Hardware or software?"
        }]).then(function(answer) {
        connection.query(
            "INSERT INTO auctions SET ?",
            {
                name: answer.postQuestions,
                os: answer.OS,
                typeOfService: answer.typeOfBid
                // starting_bid: answer.startingBid,
                // highest_bid: answer.startingBid
            },
            function (err) {
                if (err) throw err;
                console.log("You post was created successfully!");
                // re-prompt the user for if they want to bid or post
                begin();
            }
        );
    })
}
// function bidJob(){
//     inquirer.prompt({
//             name: "bidQuestions",
//             type: "input",
//             message: "How much would you like to pay?"
//         },
//         {
//             name: "OS",
//             type: "input",
//             message: "Windows or Mac"
//         },
//         {
//             name: "type",
//             type: "input",
//             message: "Hardware or software?"
//         });
// }
