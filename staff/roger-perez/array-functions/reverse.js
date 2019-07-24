let array = ['a','b','c']
let stash = []

function reverse(){
    for(var i = array.length-1;i>=0;i--){
        stash.push(array[i])
        
    }
    array = stash
    
}

reverse()
console.log(array)