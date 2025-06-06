const button = document.querySelector('#button');
button.addEventListener('click', function(){
    const input = document.querySelector('#input');
    const ul = document.querySelector('#ul');
    if(input.value.trim() === ''){
        newList.textContent = 'Поле не может быть пустым'
    }
    
    let newList = document.createElement('li');
    newList.textContent = input.value;
    ul.appendChild(newList);
    input.value = '';
    newList.addEventListener('click', function(){
        newList.remove();
    })
})