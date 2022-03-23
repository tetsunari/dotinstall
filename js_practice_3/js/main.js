'use strict';

{
    let x = 1;
    let y = x;
    x = 5;
    console.log(x); // 5
    console.log(y); // 1

    let i = [1, 2];
    let j = i;
    i[0] = 5;
    console.log(i); // [5, 2]
    console.log(j); // [5, 2]

    let a = [1, 2];
    let b = [...a];
    a[0] = 5;
    console.log(a); // [5, 2]
    console.log(b); // [1, 2]
}
