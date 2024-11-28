class Stack{
    constructor(){
        this.item = []
    }
    push(elements){
        this.item.push(elements)
    }
    
    rev(){
            let a = []
            
        for(let i = this.item.length-1;i>=0;i--){
        
             a.push(this.item[i])
        }
        return a
    }
}
let stack = new Stack()
stack.push(0)

stack.push(1)
console.log(stack.rev());