// document.querySelector("button").addEventListener("click", function () {
//     alert("hello there!!!")
// })
var leng = document.querySelectorAll(".drum").length
for (let index = 0; index < leng; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        var key = this.innerHTML
        makeSound(key)
       
        this.style.color = "white"
        
    })

}

document.addEventListener("keypress", function(event){
    makeSound(event.key)
})


function makeSound(key){
    switch (key) {
        case "w":
            
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
            
            break;
        case "a":
            
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
            
            break;
        case "s":
            
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play()
            
            break;
        case "d":
            
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play()
            
            break;
        case "j":
            
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play()
            break;
        case "k":
            
            var audio = new Audio("sounds/crash.mp3")
            audio.play()
            break;
        case "l":
            
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play()
            break;
        default:
            alert("click on the drum button")
            break;
    }
}

// function handleClick()
// {
//     alert("i got clicked")
// }