function display(item) {
        alert(`You pressed ${item}`);
}

let touch = document.querySelectorAll('digit');




touch.forEach(addEventListener('click', display));


