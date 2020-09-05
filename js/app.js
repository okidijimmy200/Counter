// setting up an immediate invoked function  expression so tht
// we dont  make a global scope and everything stays in the local scope

(function(){
 
    let counterValue = 0;
    // --target btn, querySelectorAll --used to select multiple 
    const buttons = document.querySelectorAll('.counterBtn')

    // --the actual number displayed in the html
    const counter = document.getElementById('counter')

    // --looping through the buttons and add eventlistner
    buttons.forEach(function(btn){
        btn.addEventListener('click',
        // callback func wch shows what happens when we click the btn
        function(event){
            // --we set it to event target
            const value = event.target // this returns what you are clicking on
            // console.log(value)

            // --adding if statemet to determine wch value we get back
            if(value.classList.contains('prevBtn')){
                // --decrease the counter value by one
                counterValue--; 
            }
            else if (value.classList.contains('nextBtn')) {
                counterValue++;
            }
            // -tansfer everything to counter
            counter.textContent = counterValue

            // --change color when we add or subtract
            if(counterValue === 0) {
                counter.style.color = "#333333"

            }
            // -if less thn 0
            else if(counterValue < 0) {
                counter.style.color = "#f6511d"

            }
            // -if above  0
            else if(counterValue > 0) {
                counter.style.color = "#7fb800"

            }
        }
        )
    })
})()