class Node {
	constructor(data, prev = null, next = null) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	insertLast(data) {
		const node = new Node(data);

		if (this.size === 0) {
			this.head = node;
			this.tail = node;

			this.head.prev = this.tail;
			this.head.next = this.tail;

			this.tail.prev = this.head;
			this.tail.next = this.head;
		} else {
			let head = this.head;
			let tail = this.tail;

			node.next = head;
			node.prev = tail;

			tail.next = node;
			this.tail = node;
			head.prev = node;
		}
		this.size++;
	}

	insertFirst(data) {
		const node = new Node(data);

		if (this.size === 0) {
			this.head = node;
			this.tail = node;

			this.head.prev = this.tail;
			this.head.next = this.tail;

			this.tail.prev = this.head;
			this.tail.next = this.head;
		} else {
			let head = this.head;
			let tail = this.tail;

			node.next = head;
			node.prev = tail;

			this.head.prev = node;
			this.tail.next = node;

			this.head = node;
		}
		this.size++;
	}
}

const ll = new LinkedList();
ll.insertFirst('A');
ll.insertFirst('B');
ll.insertFirst('C');

console.log(ll.head.prev.prev.prev.data);
