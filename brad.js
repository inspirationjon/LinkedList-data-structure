class Node {
	constructor(data, pointer = null) {
		this.data = data;
		this.pointer = pointer;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	insertLast(data) {
		let node = new Node(data);
		let current;

		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;
			while (current.pointer) {
				current = current.pointer;
			}
			current.pointer = node;
		}
		this.size++;
	}

	insertAt(data, index) {
		// If index is out of range
		if (index > 0 && index > this.size) {
			return;
		}

		// if index should be head
		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const node = new Node(data);
		let current, prev;

		current = this.head;
		let count = 0;

		while (count < index) {
			prev = current;
			count++;
			current = current.pointer;
		}
		node.pointer = current;
		prev.pointer = node;
	}

	getAt(index) {
		let current = this.head;
		let count = 0;

		while (current) {
			if (count === index) console.log(current.data);

			count++;
			current = current.pointer;
		}
		return null;
	}

	removeAt(index) {
		let current = this.head;
		let prev;
		let count = 0;

		if (index === 0) {
			this.head = current.pointer;
		} else {
			while (count < index) {
				prev = current;
				current = current.pointer;
				count++;
			}

			prev.pointer = current.pointer;
		}

		this.size--;
	}

	clearList() {
		this.head = null;
	}
	printList() {
		let current = this.head;

		while (current) {
			console.log(current.data);
			current = current.pointer;
		}
	}
}

const ll = new LinkedList();
ll.insertLast(100);
ll.insertLast(200);
ll.insertLast(300);
ll.printList();
console.log(ll);
