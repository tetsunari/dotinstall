'use strict';

{
    const scores = [80, 90, 40, 70];
    const [a, b, c, d] = scores;

    // scores.forEach((score) => {
    [a, b, c, d].forEach((score, index) => {
        console.log(`Score ${index}: ${score}`);
    });
}
