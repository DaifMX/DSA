class SinglyLinkedListNode {
    data: number;
    next: SinglyLinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
    }
};

class SinglyLinkedList {
    head: SinglyLinkedListNode | null;
    tail: SinglyLinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData: number): void {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail!.next = node;
        }

        this.tail = node;
    }
};

function deleteDuplicates(head: SinglyLinkedListNode): SinglyLinkedListNode {
    // Write your code here
    const res: SinglyLinkedListNode | null = head;
    let ptr: SinglyLinkedListNode | null = res;
    let temp: SinglyLinkedListNode | null = null;

    while (ptr) {
        temp = ptr;
        ptr = ptr.next;

        if (temp.data === ptr?.data) {
            temp.next = ptr.next;
            ptr = temp;
        }
    }

    return res;
}

function deleteDuplicates2(head: SinglyLinkedListNode): SinglyLinkedListNode {
    // Write your code here
    let curr: SinglyLinkedListNode | null = head;
    let last = null;
    
    while (curr) {
        if (last && last.data === curr.data) {
            last.next = curr.next;
            
        } else {
            last = curr;
        }
        
        curr = curr.next;
    }        
    
    return head;
}