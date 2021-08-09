
//html button that lets you edit personal info form
myEdit = document.getElementById('edit')
//html button that submits personal info edit form
mySubmit = document.getElementById('submit')

//onclick function that enabled the fields to be updated
//normally they are set to disabled
//this also hides the edit buttons and displays the submit button
myEdit.onclick = () => {
    myArray = document.getElementsByClassName("infoForm")
    console.log(myArray)
    for (let i = 0; i < myArray.length; i++) {
        myArray[i].removeAttribute("disabled");
    }
    myEdit.setAttribute('style', "display: none")
    mySubmit.removeAttribute("style")
}

//onclick function that captures new values for the personal information
//hides the submit button and shows the edit buttons
//We need the sequelize update function to be added to this code
//with the corresponding function in the controllers
mySubmit.onclick = () => {
    myArray = document.getElementsByClassName("infoForm")
    
    for (let i = 0; i < myArray.length; i++) {
        myArray[i].setAttribute("disabled", "");
    }
    myEdit.removeAttribute("style")
    mySubmit.setAttribute('style', "display: none")
}

//button on click will show the password update form
myPasswordUpdate = document.getElementById('editPassword')
//HTML section that has the personal info form
//we set this to hidden when they are updating password
personalInfo = document.getElementById('personalInfo')
//HTML section that has the edit password button
//we set this to hidden when they are updating password
passwordUpdateButtonHTML = document.getElementById('passwordUpdateButtonHTML')
//HTML section that houses the password update form
//We display this once the password update button is clicked
passwordUpdateForm = document.getElementById('passwordUpdateForm')

//this function hides the personal info form
//hides the password edit button
//displays the password update form
//displays the submit and cancel buttons
myPasswordUpdate.onclick = () => {
    personalInfo.setAttribute('style', "display: none")
    passwordUpdateButtonHTML.setAttribute('style', "display: none")
    passwordUpdateForm.removeAttribute("style")
}

//submit button for the password update form
submitPassword = document.getElementById('submitPassword')
//cancel button for the password update form
cancelPasswordUpdate = document.getElementById('cancelPasswordUpdate')

//hides the password update form
//displays the personal info update form and edit password button
cancelPasswordUpdate.onclick = () => {
    personalInfo.removeAttribute("style")
    passwordUpdateButtonHTML.removeAttribute("style")
    passwordUpdateForm.setAttribute('style', "display: none")
}

//hides the password update form
//displays the personal info update form and edit password button
//needs an if statement to verify the password matches in each form section
//We need the sequelize update function to be added to this code
//with the corresponding function in the controllers
submitPassword.onclick = async (event) => {
    event.preventDefault();
    submitNewPass = document.getElementById("submitNewPass")
    confirmNewPass = document.getElementById("confirmNewPass");
    newPass = submitNewPass.value;
    confirmPass = confirmNewPass.value;

    personalInfo.removeAttribute("style")
    passwordUpdateButtonHTML.removeAttribute("style")
    passwordUpdateForm.setAttribute('style', "display: none")
    
    const data = { newPass, confirmPass };

    const response = await fetch("/api/users/update", {
        method: "PUT",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify(data),
    });
}