let color = undefined

$(function(){

    $('#btn').on('click', function(){
        color = getColor()
        $('#color').html(color)
        $('body').css("backgroundColor", `${color}`)
    })
})




/**
 * Selects randomly a color from a standard array.
 * 
 * @returns the color 
 */
function getColor() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let hexVal

    const hex = [...letters, ...digits]
    color = '#'
    for (let i = 1; i <= 6; i++) {
        hexVal = Math.floor(Math.random() * hex.length)
        color += hex[hexVal]
    }

    return color
}



