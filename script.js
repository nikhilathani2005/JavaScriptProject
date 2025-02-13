function showAlert()
{
    alert('Hello! This is a javaScipt alert.');
}
function changeText (){
    document.getElementById('text').innerHTML = 'Text changed!';
}
function handleClick()
{
    document.getElementById( 'clickMessage').innerHTML = 'Button Clicked!';
}
function validateForm()
{
    let name = document.getElementById('name').value;
    if (name == ''){
        alert('Please enter your name.');
        return false;
    }
    return true;
}

function displayArrayItem(){
    let items = ['Apple', 'Banana', 'cherry', 'date'];
    let index = parseInt(document.getElementById('arrayIndex').value);
    let result = items[index] || 'invalid index'
    document.getElementById('arrayResult').innerHTML = result;
}