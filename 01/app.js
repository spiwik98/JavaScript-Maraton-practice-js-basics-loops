const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);
if (randomNumber < 5){
    console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli")
}else{
for (let i = 5; i <= randomNumber; i++){
console.log(i);
}
}