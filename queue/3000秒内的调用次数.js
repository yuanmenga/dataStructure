function RecentCounter() {
  this.queue = []
}

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)
  while (this.queue[0] < t - 3000) {
    this.queue.shift()
  }
  return this.queue.length
}

let a = new RecentCounter()
console.log(a.ping(2))
a.ping(2000)
console.log(a.ping(3000))
console.log(a.ping(8000))
