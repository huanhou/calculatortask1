const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
resultElement.textContent = sum
console.log(typeof sum)
plusBtn.onclick = function(){
    action = '+'
}
minusBtn.onclick = function(){
    action = '-'
}

submitBtn.onclick = function(){
    printResult(sum)
    if (action = '+'){
       const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent=sum
    }
    else if (action = '-'){
        const sum = Number(input1.value) - Number(input2.value)  
    resultElement.textContent=sum
   }
}