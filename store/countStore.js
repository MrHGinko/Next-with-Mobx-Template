import { action, makeAutoObservable, observable } from 'mobx';

class Counter {
	constructor() {
		makeAutoObservable(this, {
			count: observable,
			reset: action,
			increment: action,
		});
	}
	count = 0;
	increment() {
		this.count++;
	}
	reset() {
		this.count = 0;
	}
}

export default new Counter();
