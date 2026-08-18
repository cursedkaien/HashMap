export default class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.bucket = Array.from({ length: this.capacity }, () => []);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.bucket[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    if ((this.length() + 1) / this.capacity > this.loadFactor) {
      const currentEntries = this.entries();
      this.capacity *= 2;
      this.bucket = Array.from({ length: this.capacity }, () => []);

      for (const [k, v] of currentEntries) {
        const newIndex = this.hash(k);
        this.bucket[newIndex].push([k, v]);
      }
    }

    const finalIndex = this.hash(key);
    this.bucket[finalIndex].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.bucket[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.bucket[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  length() {
    let count = 0;
    for (const bucket of this.bucket) {
      count += bucket.length;
    }
    return count;
  }

  clear() {
    this.bucket = Array.from({ length: this.capacity }, () => []);
  }

  keys() {
    const keysArray = [];
    for (const bucket of this.bucket) {
      for (const [key] of bucket) {
        keysArray.push(key);
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (const bucket of this.bucket) {
      for (const [, value] of bucket) {
        valuesArray.push(value);
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (const bucket of this.bucket) {
      for (const pair of bucket) {
        entriesArray.push(pair);
      }
    }
    return entriesArray;
  }
}
