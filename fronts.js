class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {  //adding node to front of SLL

        let new_node = new Node(val);

        if(!this.head) {
            this.head = new_node;
            return this;
        }

        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront(){ //Remove node from front of SLL
        if (!this.head){
            return this.head
        }
        let removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }
    front() { //Show value at the front of list 
        if (!this.head){
            return null;
        } else {
            return this.head.data;
        }
    }
}

let mySLL = new LinkedList();
console.log(mySLL.front());
mySLL.addFront(10);
console.log(mySLL.front());



console.log(mySLL);

// console.log(mySLL.head.next); //prints the second node 
// mySLL.removeFront();