let color = undefined

$(function(){
   
    $('#btn').on('click', function(){
        color = getColor()
        $('#color').html(color)
        $('body').css("backgroundColor", `${color}`)
    })
})





/**
 * Selects randomnly a color from a standar array
 * 
 * @returns the color
 */
function getColor(){
    const colors = ['black', 'red', 'green', 'blue', 'white']
    return colors[Math.floor(Math.random() * colors.length)]
}




