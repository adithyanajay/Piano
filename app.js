window.addEventListener("keydown", (e)=>play(e))
const keys = document.querySelectorAll(".key")

keys.forEach(key=>{
    key.addEventListener("click", (e)=>{
    e.keyCode=e.target.dataset.key
    play(e)
    setTimeout(()=>{key.classList.remove("effect")},100)
    })

    
})



const play = (e)=>{
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if(!audio){
        return
    }
    else{
        audio.play()
        audio.currentTime = 0
        key.classList.add("effect")
    }
    
}


window.addEventListener("keyup", (e)=>removeEffect(e))

const removeEffect = (e)=>{
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!key){
        return
    }else{
        key.classList.remove("effect")
    }
    
}
    

