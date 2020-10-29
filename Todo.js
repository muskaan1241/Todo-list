//------------------adding task in list-------------------------

var submit = document.getElementById('submit');                     //getting the submit button
submit.addEventListener('click', getValue);                         //adding event listener to submit button of 'click'
submit.addEventListener('click', checkNew);
submit.addEventListener('click', delNew);
function getValue(){                                                //writing the function that handle the click event on submit(after entering the task)
    
    let inputTask = document.getElementById('enter');               //getting the input field    
    let value = inputTask.value;                                    //adding its value to a variable   
    const taskValue = value;                                        //the value of task to be added made constant so that even if inputfield changed, its value doesn't get affected
    if (taskValue.length == 0) {                                    //checking if the input is empty
        alert("please enter some task");
    }

    else{
        
        let list = document.getElementById('tasks');                //getting the ol element to add new task in it        
        let li = document.createElement('li');                      //creating a list item in ol        
        let textNode = document.createTextNode(taskValue);          //creating text into the list item        
        let text =  li.append(textNode);                            //adding text to li   
        let div1 = document.createElement('div');
        div1.className = 'but';
        let button = document.createElement('button');
        button.className = 'btn btn-danger';
        button.innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg>'
        div1.appendChild(button);
        let div2 = document.createElement('div');
        div2.className = 'but';
        let checkBox = document.createElement('input');             //creating the check box       
        checkBox.type = 'checkbox';                                 //specifying type of input        
        checkBox.className = 'check';                               //add class to input(checkbox)  
        div2.appendChild(checkBox);  
        li.appendChild(div1);                                   //appending checkbox to li element       
        li.appendChild(div2);
        list.append(li);                                            //adding li to ol
        let newInput = value.substring(0,0);                        //resetting the input field to empty string
        inputTask.value = newInput;                                 //input field set to a new value
        }

}
//----------------------------to check new tasks----------------------------------------------

function checkNew(){   
    var li = document.getElementsByTagName('li');
   
    for (let i = 0; i < li.length; i++) {
        var element = li[i].firstElementChild.nextElementSibling.firstElementChild;          //get the checkbox
        //console.log(element)
    }
        element.addEventListener('change', listEle);
        function listEle(e) {
           var lie = e.target.parentNode.parentNode;                            //gives the li element
        
           //lie.parentNode.removeChild(lie);
           if (element.checked) {
            lie.style.textDecoration = 'line-through';
           }

           else{
            lie.style.textDecoration = 'none';
           }
           
        }
};

//-----------------to check the default tasks------------------------------
var chb = [...document.querySelectorAll('.check')];

for(var i = 0 ; i < chb.length ; i++){
    
   chb[i].addEventListener('change', checkDefault)   
    function checkDefault(e){       
            var li = document.getElementsByTagName('li');
            var lie = e.target.parentNode.parentNode;                            //gives the li element
            //lie.parentNode.removeChild(lie);
            if (e.target.checked == true) {
                lie.style.textDecoration = 'line-through';
            } else {
                lie.style.textDecoration = 'none';
            }            
    }
}

//------------------------------remove completed tasks-------------------------------------------

var del = document.getElementsByTagName('li');                                     //array of all li elements

for(var i = 0 ; i < del.length ; i++){
    var li = del[i];                                                    //get each li element
    var button = li.firstElementChild.firstElementChild;                //get the delete element
    button.addEventListener('click', delDefault);
}

function delDefault(e) {
    //console.log(e.target)
    var target = e.target.parentNode;
    if(target.tagName == 'DIV'){
        var li = target.parentNode;                                     //get the target li element
        li.parentNode.removeChild(li);
    }
    else if(target.tagName == 'svg'){
        var li = target.parentNode.parentNode.parentNode;               //get the target li element
        li.parentNode.removeChild(li);
    }
    else if (target.tagName == 'BUTTON'){
        var li = target.parentNode.parentNode;
        li.parentNode.removeChild(li);
    }
}
           

function delNew(){   
    var li = document.getElementsByTagName('li');
   
    for (let i = 0; i < li.length; i++) {
        var element = li[i].firstElementChild.firstElementChild;          //get the checkbox
        //console.log(element)
    }
        element.addEventListener('click', deleteNew);
        function deleteNew(e) {
            var target = e.target.parentNode;
            if(target.tagName == 'DIV'){
                var li = target.parentNode;                                     //get the target li element
                li.parentNode.removeChild(li);
            }
            else if(target.tagName == 'svg'){
                var li = target.parentNode.parentNode.parentNode;               //get the target li element
                li.parentNode.removeChild(li);
            }
            else if (target.tagName == 'BUTTON'){
                var li = target.parentNode.parentNode;
                li.parentNode.removeChild(li);
            }           
        }
};