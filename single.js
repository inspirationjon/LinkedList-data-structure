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

	// Find
	findData(data) {
		let current = this.head;

		while (current) {
			if (data === current.data) {
				console.log(current);
				return;
			}

			current = current.pointer;
		}
	}

	indexOf(data) {
		let current = this.head;
		let count = 0;

		while (current) {
			if (data === current.data) {
				console.log(count);
				return;
			}
			count++;
			current = current.pointer;
		}
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

	clearList() {
		this.head = null;
	}

	printData() {
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
ll.findData(200);
ll.indexOf(700);
ll.printData();
