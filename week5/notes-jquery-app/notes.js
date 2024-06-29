const daysGR = ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκεή', 'Σάββατο']
const monthGR = ['Ιανουρίου','Φεβουαρίου','Μαρτίου','Απριλίου','Μαίου','Ιουνίου','Ιουλίου','Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβρίου','Δεκεμβρίου']

let noteId = 0


$(function() {
    setInterval(printGRDate, 1000)

    $('#addNoteBtn').on('click', function(){
        onInsertHandler($('.footer-text').val().trim())
        
    })

    $('#inputNote').on('keyup', function(e) {
        if(e.key === 'Enter') {
            onInsertHandler($(this).val().trim())
        }
    })

    $('.notes-wrapper').on('click', '#noteDelBtn', function(e){
        $(e.target).parent().remove()
    }) 

    $('.notes-wrapper').on('click', '#noteCheck', function(e){
        $(e.target).next().toggleClass('line-through')
    }) 

 

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

    
    
    $('#dateTxt').html(`${dateStr} <br> ${timeStr}`)
    

}


function onInsertHandler (note) {

    if(!note) return

        
    let clone = $('.note.hidden').clone().removeClass('hidden')
    clone.find('label').html(note)
    

    clone.appendTo('.notes-wrapper')

}

