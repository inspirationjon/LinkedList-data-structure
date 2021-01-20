class Node {
	constructor(data, next = null, prev = null) {
		this.data = data;
		this.prev = prev;
		this.next = next;
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
			while (current.next) {
				current = current.next;
			}
			current.next = node;
			node.prev = current;
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
			current = current.next;
		}
		node.next = current;
		prev.next = node;
	}

	getAt(index) {
		let current = this.head;
		let count = 0;

		while (current) {
			if (count === index) console.log(current.data);

			count++;
			current = current.next;
		}
		return null;
	}

	removeAt(index) {
		let current = this.head;
		let prev;
		let count = 0;

		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				prev = current;
				current = current.next;
				count++;
			}

			prev.next = current.next;
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
			current = current.next;
		}
	}
}

const ll = new LinkedList();
ll.insertLast('A');
ll.insertLast('B');
ll.insertLast('C');
console.log(ll.head.next.prev.next.next.data);
