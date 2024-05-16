// const next = document.querySelector('.next a');
// const prev = document.querySelector('.prev a');
// const comment = document.querySelector('#list-comment');
// const commentItem = document.querySelectorAll('#list-comment .item');
// let translateY = 0;
// const itemHeight = 400; // Height of each comment item
// const totalItems = commentItem.length;
// const maxTranslateY = -itemHeight * (totalItems - 1);

// next.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (translateY > maxTranslateY) {
//         translateY -= itemHeight;
//         comment.style.transform = `translateY(${translateY}px)`;
//     }
// });

// prev.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (translateY < 0) {
//         translateY += itemHeight;
//         comment.style.transform = `translateY(${translateY}px)`;
//     }
// });

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length 

next.addEventListener('click', function(event) {
    event.preventDefault()
    if(count == 1){
        return false
    }
    translateY += -400
    comment.style.transform = `translateY(${translateY}px)`
    count--
})

prev.addEventListener('click', function (event) {
    event.preventDefault()
    if(count == 3){
        return false
    }
    translateY += 400
    comment.style.transform = `translateY(${translateY}px)`
    count++
})
