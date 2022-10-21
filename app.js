//task 1
let [elem1, elem2, elem3, ...arr] = ['Nurtilek', 'Zhakypov', 'Zhenishbekovich', '17 y.o', '2005', '178', '56'];
alert(elem1);
alert(elem2);
alert(elem3);
alert(arr);

//task 2
let newArr = ['Nurtilek', 'Zhakypov', 'Zhenishbekovich', '17 y.o', '2005', '178', '56'];
newArr.reverse()
let [elem1, elem2] = newArr
alert(elem1);
alert(elem2);

//task 3
function newfunc(name = 'Аноним') {
    alert('Привет, '+ name );
}

let name = 'Nurtilek';
newfunc();