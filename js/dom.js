/*
    * Traversing the DOM with JavaScript
    * View the output in the console
    * Comment all, except the the one your want to show
*/

// 1. Selecteer .characters met document.querySelector
// let characters = document.querySelector('.characters');
// console.log(characters);


// 2. Selecteer .humans uit .characters (Start from characters)
// let characters = document.querySelector('.characters');
// let humans = characters.querySelector('.humans');
// console.log(humans);


// 3. Selecteer alle mensen met querySelectorAll, beginnend bij .humans
// let characters = document.querySelector('.characters');
// let humans = characters.querySelector('.humans');
// let allHumans = humans.querySelectorAll('li');
// console.log(allHumans);


// 4. Selecteer alle hobbits met kinderen
// let characters = document.querySelector('.characters');
// let hobbits = characters.querySelector('.hobbits').children;
// console.log(hobbits);


// 5. Selecteer de Merry (de hobbit)
// let characters = document.querySelector('.characters');
// let hobbits = characters.querySelectorAll('.hobbits li');
// hobbits.forEach(hobbit => {
//     if(hobbit.innerText.includes('Merry')){
//         console.log(hobbit);
//     }
// });


// 6. Selecteer .vijanden uit Sauron
// const allCharacters = document.querySelectorAll('.characters li');
// allCharacters.forEach(entity => {
//     if(entity.innerText.includes('Sauron')){
//         console.log(entity.parentElement);
//     }
// });


// 7. Selecteer de .characters div van Nazgûl
// const allCharacters = document.querySelectorAll('li');
// allCharacters.forEach(entity => {
//     if(entity.innerText.includes('Nazgûl')){
//         console.log(entity.parentElement.parentElement);
//     }
// });


// 8. Selecteer Elrond uit Glorfindel
// const allCharacters = document.querySelectorAll('li');
// allCharacters.forEach(entity => {
//     if(entity.innerText.includes('Glorfindel')){
//         console.log(entity.nextElementSibling);
//     }
// });


// 9. Selecteer Legolas uit Glorfindel
// const allCharacters = document.querySelectorAll('li');
// allCharacters.forEach(entity => {
//     if(entity.innerText.includes('Glorfindel')){
//         console.log(entity.previousElementSibling);
//     }
// });


// 10. Selecteer Arwen uit Glorfindel
// const allCharacters = document.querySelectorAll('li');
// allCharacters.forEach(entity => {
//     if(entity.innerText.includes('Glorfindel')){
//         console.log(entity.nextElementSibling.nextElementSibling);
//     }
// });