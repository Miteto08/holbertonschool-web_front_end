function countPrimeNumbers() {
    let isPrime = true
    let numberCount = 0

    for (let i = 1; i <= 100; i++) {
        isPrime = true
        let sqrt = Math.round(Math.sqrt(i))
        for (let div = 2; div <= sqrt; div++) {
            if (i % div == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            numberCount += 1
        }
    }
    return numberCount
}

let startExecution = window.performance.now()
countPrimeNumbers()
let stopExecution = window.performance.now()

console.log("Execution time of printing countPrimeNumbers was " + (stopExecution - startExecution) + " milliseconds.")