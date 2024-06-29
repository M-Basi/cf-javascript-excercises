const DEFAULT = 0
let counter = DEFAULT

$(function() {

    $('#btnDecr').on('click', function() {
        counter--
        showCounter()
    })

    $('#btnReset').on('click', function() {
        counter = DEFAULT
        showCounter()
    })

    $('#btnIncr').on('click', function() {
        counter ++
        showCounter()
    })

}) 
    


function showCounter() {
    // Data binding
    const counterDOM = $('#counter')
    counterDOM.text(counter)
    
    // Styling
    styleCounterElement(counterDOM)
}


function styleCounterElement(counterDOM) {
    if (counter > 0) {
        counterDOM.addClass('color-green')
    } else if (counter < 0) {
        counterDOM.addClass('color-red')
    } else {
        counterDOM.addClass('color-black')
    }
}



