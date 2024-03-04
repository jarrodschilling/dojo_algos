function sweatshirtPricing(num) {
    let cost = 0
    if (num === 1) {
        cost = 20
    }
    else if (num === 2) {
        cost = (num*20) * (1-0.09)
    }
    else if (num === 3) {
        cost = (num*20) * (1-0.19)
    }
    else {
        cost = (num*20) * (1-0.35)
    }
    return cost
}

console.log(sweatshirtPricing(4))