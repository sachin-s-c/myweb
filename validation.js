var nameError = document.getElementById('name-error');
var nameError = document.getElementById('phone-error');
var nameError = document.getElementById('message-error');
var nameError = document.getElementById('submit-error');
function validateName(){
    var name=document.getElementById('contact-name').ariaValueMax;
    if(name.length==0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='write full Name';
        return false;

    }
    nameError.innerHTML='valid';
    return true;
}
