class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a-b)
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }
    else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    else { 
      return this.items.reduce((a, b) => Math.max(a, b));
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    else { 
      return this.items.reduce((a, b) => Math.min(a, b));
  }
}

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
