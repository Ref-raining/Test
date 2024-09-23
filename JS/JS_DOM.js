
var element_id = document.getElementById('aa');
console.log(element_id);

var element_class = document.getElementsByClassName('bb');
console.log(element_class);

var element_tag = document.getElementsByTagName('div');
console.log(element_tag);

element_id.innerHTML = '修改id选择器';
element_class.innerText = '修改后的class选择器';

element_id.style.color = 'red';
element_id.style.fontSize = '30px';

// element_class.style.fontSize = '30px';


var a2_id = document.getElementById('a2');
var b2_class = document.getElementsByClassName('b2');

a2_id.innerHTML = '<a href="#">跳转连接</a>';
b2_class.innerHTML = '<a href="#">跳转连接</a>';
// a2_id.innerText = '<a href="#">跳转连接</a>';
// b2_class.innerText = '<a href="#">跳转连接</a>';


var button_element = document.getElementsByTagName('button')[1];
console.log(button_element);

// button_element.onclick = function()
// {
//     alert("DOM属性 按键触发方法1");
// }

button_element.addEventListener('click', function()
{
    alert("DOM属性 按键触发方法2");
})

// button_element.addEventListener('click', click_event);
// function click_event()
// {
//     alert("DOM属性 按键触发方法3");
// }
    

