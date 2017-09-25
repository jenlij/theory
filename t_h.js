// http://codingfreak.blogspot.com/2012/09/detecting-loop-in-singly-linked-list_22.html
//Tortoise and the Hare problem
// Detecting a loop in a singly linked list

//Two pointers: slow_pointer (tortoise), fast_pointer (hare)
//Slow_pointer moves at speed t, fast_pointer moves at speed 2t

//1. Both pointers start at first node (head)
//2. If fast_pointer reaches end of list, no loop in list
//3. Else, move fast_pointer one step forward
//4. If fast_pointer reaches end of list, no loop in list
//5. Else, move fast_pointer AND slow_pointer one step forward
//6. If fast_pointer and slow_pointer point to the same node, LOOP EXISTS
//7. Else, repeat from step 2

'use strict';

class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0
        this.tail = null;
    }
    append(value) {
        var node = new Node(value);
        var currentNode = this.head;
        if(!currentNode) {
            this.head = node;
            this.count += 1;
        }
        else{
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
            this.count += 1;
            return currentNode.next;
        }
    }
    printList() {
        var count = 0;
        var currentNode = this.head;
        if(!currentNode) {
            console.log('empty list');
            return
        }
        console.log(currentNode.value);
        while(currentNode.next && count < 20) {
            count += 1;
            console.log(currentNode.next.value);
            currentNode = currentNode.next;
        }   
    }
}

//needed to return a tail to create cycle in singly linked list
var myList = new LinkedList;
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.tail = myList.append(6);
// myList.tail.next = null;
myList.tail.next = myList.head.next.next;
myList.printList(); 




function checkIfCycle(myList) {
    var fast_pointer = myList.head;
    var slow_pointer = myList.head;
    var count = 1;
    while(fast_pointer != null) {
        if (count % 2 != 0) {
            fast_pointer = fast_pointer.next;
            console.log('odd')
            console.log('fast '+ fast_pointer.value);
            console.log('slow '+ slow_pointer.value);
            
            count++;
        }
        else {
            fast_pointer = fast_pointer.next;
            slow_pointer = slow_pointer.next;
            console.log('even')
            console.log('fast '+ fast_pointer.value);
            console.log('slow '+ slow_pointer.value);
            count++;
        }
        if (fast_pointer === slow_pointer) {
            console.log('CYCLE');
            return true;
        }
        
    }
        console.log('no cycle')
        return false;
    
}

checkIfCycle(myList);