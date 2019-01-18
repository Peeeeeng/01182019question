const optimizedMath = () => {
  for( let i = 1; i < 101; i++ ) {
        if( i % 6 === 0 ) {
      console.log(`The number '${i}' is divisible by two and three.`)
    } else if( i % 3 === 0 ) {
      console.log(`The number '${i}' is divisible by three.`)
    } else if( i % 2 === 0 ) {
      console.log(`The number '${i}' is event.`)
    } else {
      console.log(`The number '${i}' is odd.`)
    }
  }
}

optimizedMath()