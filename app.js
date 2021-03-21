

const board = document.getElementById("main-board")//get the div element with id = main-board
let table = document.createElement("table")//creating a table
let tableBody = document.createElement("tbody")//create table body
table.appendChild(tableBody)//append body to table

function generateBoard(){
    for (let i = 0; i < 8; i++){//loop to create the cells and rows
        let tableRows = document.createElement("tr")//create the rows
        tableBody.appendChild(tableRows)//append the rows to the body
        for (let j = 0; j < 8; j++){// loop to create the collumns
            let tableColumns = document.createElement("td")// creatre the collumns
            if((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)){
                tableColumns.style.backgroundColor = "orange"
            }else{
                tableColumns.style.backgroundColor = "brown"
            }
            tableRows.appendChild(tableColumns)//append them to the rows
        }
    }
    board.appendChild(table)//append the table body to the table
}



window.onload = function(){//runs function on html resolution
    generateBoard()
}


if((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)){
    cell.style.backgroundColor = "orange"
}else{
    cell.style.backgroundColor = "brown"
}

