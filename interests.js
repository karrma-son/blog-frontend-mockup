const Max = 5;


const checkboxes = document.querySelectorAll(".interest-checkbox");

checkboxes.forEach(box => {
    box.addEventListener("change", () =>{
        const checked = document.querySelectorAll(".interest-checkbox:checked");

        if(checked.length > Max){
            box.checked = false;
            return;
        }
    
    })
})

function checkDisabled(){
    const checked = document.querySelectorAll(".interest-checkbox:checked");
    
    if (checked.length ===  Max){
        checkboxes.forEach(box => {
            if(!box.checked)box.disabled = true;
        });
    }   else {
        checkboxes.forEach(box => box.disabled = false);
    }
}

function selectionAlert(){

    const continueBtn = document.querySelector("#continue-btn");
    
    continueBtn.addEventListener("click", () =>{
        const checked = document.querySelectorAll(".interest-checkbox:checked");
        
        if (checked.length === 0) { 
            alert("Please select at least one interest or skip");
        }
    });
    
}

selectionAlert();