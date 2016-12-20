const Y = f => f(f)

const fact = Y(next => (i, y = 1) => i === 1 ? y : next(next)(i - 1, y * i))

console.log(fact(5))
console.log(fact2(5))