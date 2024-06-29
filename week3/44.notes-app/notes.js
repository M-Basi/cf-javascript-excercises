const daysGR = ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκεή', 'Σάββατο']
const monthGR = ['Ιανουρίου','Φεβουαρίου','Μαρτίου','Απριλίου','Μαίου','Ιουνίου','Ιουλίου','Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβρίου','Δεκεμβρίου']

window.addEventListener('DOMContentLoaded', function (){

    this.setInterval(printGRDate, 1000)

    this.document.querySelector('#addNoteBtn').addEventListener('click', function(){
        onInsertController(document.querySelector('#inputNote').value.trim())
    })

    this.document.querySelector('#inputNote').addEventListener('keyup', function(e) {
        if(e.key === 'Enter') {
            onInsertController(this.value.trim())
        }
    })

    this.document.querySelectorAll('.note_del_btn').forEach(button => {
        button.addEventListener('click', function() {
            onDeleteController(this.id);
        });
    });

   
})


function printGRDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const dayStr = daysGR[day]
    const monthStr = monthGR[month]

    let dateStr = `${dayStr}, ${date} ${monthStr} ${year}`
    let timeStr = `${(hours < 10) ? '0' : ''}${hours}:${(minutes < 10) ? '0' : ''}${minutes}:${(seconds < 10) ? '0' : ''}${seconds}`

    document.querySelector('#dateTxt').innerHTML = dateStr + '<br>' + timeStr

}




/**
 * Controller for insert button clicked. 
 * @param {String} data 
 */
function onInsertController (data) {
    insertNote(data)
    reset()
}




let num = 1


function insertNote(data) {    
    
    const domHidden = document.querySelector('#hidden')
    const cloneHidden = domHidden.cloneNode(true)   

    
    const cloneLabel = cloneHidden.querySelector('label.note-text')
    const cloneBtn = cloneHidden.querySelector('button.note_del_btn')
    const cloneCheck = cloneHidden.querySelector('input.note-check')
    cloneLabel.id = `noteTxt${num}`
    cloneBtn.id = `noteDelBtn${num}`
    cloneCheck.id = `noteCheck${num}`
    cloneLabel.textContent = data
    cloneHidden.classList.add('appeared')

    cloneBtn.addEventListener('click', function() {
        cloneBtn.closest('.hidden').remove()
    })

    cloneCheck.addEventListener('click', function() {
        const x = cloneCheck.checked;
        if (x) {
            cloneLabel.classList.add('textline')
        }else {
            cloneLabel.classList.remove('textline')
        }

    })
  

    document.querySelector('#notes-wrapper').appendChild(cloneHidden)

    num += 1
    console.log(cloneHidden)

}



function reset() {
    document.querySelector('#inputNote').value = '';

}





















