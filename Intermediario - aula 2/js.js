const multiArray = [[],[],[]]
for(let i = 0; i < 3; i++ ){
    for (let j = 0; j < 11; j++) {
        if(i === 0){
            multiArray[i].push(2)
        }else{
            multiArray[i].push(i*j)
        }
    }
}

alertOut = ""

for(let i = 0; i < 11; i++){
    for(let j = 0; j < 3; j++){
        alertOut = `${alertOut} ${multiArray[j][i]}`
    }
    alertOut = alertOut + "\n"
}

alert(alertOut);