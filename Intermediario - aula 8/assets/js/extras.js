const countBodyChildren = () => {
    return document.querySelector('body').childNodes.length
}

const moreThan5BodyChildren = () => {
    return countBodyChildren() > 5;
}

const showAllP = () => {
    for(let node of document.querySelectorAll('p')){
        console.log(node);
    }
}
console.log(countBodyChildren());
console.log(moreThan5BodyChildren());
showAllP();


