'use strict';

{
    document.querySelector('button').addEventListener('click', () => {
        const item = document.querySelectorAll('li');
        item.forEach(itemValue => console.log(itemValue.textContent));
        const item0 = item[0];
        const copy = item0.cloneNode(true);
        const copyFalse = item0.cloneNode(false);
        console.log(copyFalse);

        const ul = document.querySelector('ul');
        const item2 = document.querySelectorAll('li')[2];
        ul.insertBefore(copy, item2);
    });
}
