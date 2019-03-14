class Stack {
  constructor() {
    this.dataStore = [];
  }
  push(item) {
    return this.dataStore.push(item);
  }
  pop() {
    if (this.dataStore.length) {
      return this.dataStore.pop();
    } else {
      return undefined;
    }
  }
  peek() {
    if (this.dataStore.length) {
      return this.dataStore[this.dataStore.length - 1];
    } else {
      return undefined;
    }
  }
  clear() {
    this.dataStore.length = 0;
  }
  length() {
    return this.dataStore.length;
  }
}