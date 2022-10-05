let filter = document.getElementById('filter');
filter.addEventListener('keyup', filterNames);

function filterNames(){
    let text = filter.value.toLowerCase();
    let names = document.querySelectorAll('.characters li');
    Array.from(names).forEach(name => {
        let item = name.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            name.style.display = 'block';
        } else {
            name.style.display = 'none';
        }
    });
}