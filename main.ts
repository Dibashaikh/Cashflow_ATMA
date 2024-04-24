#! /usr/bin/env node

import inquirer from "inquirer";

let mybalance = 20000; 
let mypin = 1234;
let pinanswer = await inquirer.prompt(
    [
    {
     name: "pin",
     message: "Enter your pin",
     type: "number"


    }
] 
)
if (pinanswer.pin === mypin) {
    console.log("Correct pin code !!!");


    let operationAns = await inquirer.prompt(
        [
           { 
            name: "operation",
            message: "please select option",
            type: "list",
            choices : ["Withdraw", "Check balance", "Fastcash"]
            
        }
        ]
    );


    if (operationAns.operation === "Withdraw"){
        let amountans = await inquirer.prompt({
            name: "amount",
            message: "Enter your amount",
            type:"number"

        }

        );
        if (amountans.amount<mybalance){
        mybalance -= amountans.amount
        console.log (` Your remaining balance is:  ${mybalance}`)
} else {
    console.log("Insufficient Balance");
}

    } 
    else if (operationAns.operation==="Check balance"){
        console.log(`Your balance is: ${mybalance}`);
    }

    else if (operationAns.operation=== "Fastcash"){
        let transection = await inquirer.prompt(
      [ {name : "transections",
          message: "Please select your amount",
          type: "list",
          choices:["10000", "15000", "20000", "25000", "30000", "40000"]
        }]
        ); 
        if (transection.transections == 10000 && transection.transections<mybalance){
            mybalance-=transection.transections;
            console.log(`Your remaining balance is ${mybalance}`)
        } 
        else if (transection.transections == 15000 && transection.transections<mybalance){
            mybalance-=transection.transections;
            console.log(`Your remaining balance is: ${mybalance}`)
        }
        else if (transection.transections == 20000 && transection.transections<mybalance){
            mybalance-=transection.transections;
            console.log(`Your remaining balance is:${mybalance}`)
        }
        else if (transection.transections == 25000 && transection.transections<mybalance){
            console.log(`Your remaining balance is: ${mybalance}`)
        }
        else if (transection.transections == 30000 && transection.transections<mybalance){
            console.log(`Your remaining balance is: ${mybalance}`)
        }
        else if(transection.transections == 40000 && transection.transections<mybalance){
            console.log(`Your remaining balance is:${mybalance}`)
        } else  console.log("Insufficient balance")
        
           
        
     }
  
} else {
    console.log("Incorrect pin number");
}



// let balance = await inquirer.prompt(
//     [ {
//        name: "Balance",
//        message: "Please select your amount",
//        type: "list",
//        choices: ["10000", "15000", "20000"]
//         }]
// ); if (balance.Balnce == 10000){
//     mybalance-=balance.Balance;
//     console.log(`Your remining balance is ${mybalance}`)

// } else if (balance.Balance== 15000){
//     mybalance-=balance.Balance;
//     console.log(`Your remaining balance is: ${mybalance}`)
// } else if (balance.Balance== 20000){
//     mybalance-=balance.Balance;
//     console.log(`Your remaining balance is: ${mybalance} `)
// }
