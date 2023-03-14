
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!*/

//input element
const input = document.getElementById("input");
const submitEl = document.getElementById("submit");

//Eventlistner
submitEl.addEventListener('click', function(){
    const text = input.value;//takes input value and assigned in text variable[underscore_case]
    console.log(text);
    let rows = text.split('\n');//in this we remove new line in the text[underscore_case]
    console.log(rows);
    for (let [index, word] of Object.entries(rows)) {// we using for loops for creating every value in array
        const [first , second] = word.toLowerCase().trim().split("_");
        index++;
        //it turns all elemrnt to lowercase and remove underscope("_")[underscorecase]
        const output = first + second[0].toUpperCase()+second.slice(1);
        // assign into output and given as value[underscoreCase]
        let outputEl = output.padEnd(20, ' ') + '✅'.repeat(index);
        console.log(outputEl);

        
    }
    
})
