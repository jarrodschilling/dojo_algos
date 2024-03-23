class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next=next;             
    }
}

class SLL {
    constructor(head = null) {
        this.head = head;
    }
    printAllValues() {
        let runner = this.head;

        while (runner !== null) {
            console.log(runner.data);
            runner = runner.next;
        }
    }
    addFront(newNode) {
        newNode.next = this.head;      
        this.head = newNode;
    }
    removeFront() {
        if (this.head == null) {
            return null;
        }
        let nodeToRemove = this.head;
        this.head = this.head.next;
        nodeToRemove.next = null;
        return nodeToRemove;
    }
    printFront() {
        if (this.head) {
        console.log(this.head.data)
        }
        else{
            console.log(null)
        }
    }
    display() {
        let runner=this.head
        let show_all = ""
        while (runner !== null) {
            console.log(runner.data);
            show_all = show_all + runner.data +", "
            runner = runner.next;
        }
        console.log(show_all)
    }
}

const SLL1 = new SLL()

SLL1.addFront(new Node(18))

SLL1.addFront(new Node(5))
// console.log(SLL1['head'])
SLL1.printAllValues()
SLL1.display()

SLL1.addFront(new Node(73))
console.log("Final")
SLL1.printAllValues()

// SLL1.removeFront()

// console.log("test remove")
// // SLL1.printAllValues()
// SLL1.printFront()

SLL1.display()