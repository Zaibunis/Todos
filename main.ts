#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];

//while loop for repeating something:

let condition = true

while(condition)
{
    let addTask = await inquirer.prompt(
    [
        {
            name:"Todo",
            type:"input",
            message:"What do you want to add in your Todos ?"
        },

        {
            name:"addMore",
            type:"confirm",
            message:"Are you sure you want to add more in you Todos ?",
            default: "False"
        }
    ]
);
todos.push(addTask.Todo);
condition = addTask.addMore
console.log(todos);
}
