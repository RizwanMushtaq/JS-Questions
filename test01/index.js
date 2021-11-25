function test(){
    // console.log(this)
    
    document.querySelector("#btn").addEventListener("click", (e) => {
        console.log(e.target)
        console.log(this)
    })
}

test()




