const cls = ['btn1', 'borderblack']

const addBtn = document.querySelector('#btn1')
addBtn.classList.add(...cls)

const placeholder = document.querySelector('#input')

placeholder.classList.add('borderblack', 'widthholder')


const noteDiv = document.querySelector('#notes')



let num = 0

addBtn.addEventListener('click', function() {
    const inputchoice = placeholder.value
    num +=1
    const everyNote = `
    <div class=" d-flex flex-row flex-nowrap justify-content-between mb-1">
        <div id="${num} divInsert" class="d-flex flex-row flex-nowrap col-10"> 
            <div>
                <input class="btn" type="checkbox" onclick= "return this.parentNode.parentNode.parentNode.style.backgroundColor='red'" >
            </div> 
            <div>
                <p class="ps-2 align-middle">${inputchoice}</p>
            </div>
        </div>
        
  
        <button class="btn border border-black" id="removeBtn" onclick="return this.parentNode.remove();" type="button">X</button>
    </div> 
    `
    noteDiv.innerHTML += everyNote
 
    }, false);




    




    












    