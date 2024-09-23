//新建
function addRow()
{
    var add_button = document.getElementById('table');
    var length = table.rows.length; //插入位置
    //插入行
    var newRow = table.insertRow(length);
    console.log(newRow);
    //插入元素
    var name = newRow.insertCell(0);
    var num = newRow.insertCell(1);
    var phone = newRow.insertCell(2);
    var action = newRow.insertCell(3);

    name.innerHTML = "xx";
    num.innerHTML = "xx";
    phone.innerHTML = "xx";
    action.innerHTML = "<button onclick='editRow(this)''>编辑</button><button onclick='deleteRow(this)'>删除</button>";
}

//编辑
function editRow(button)
{
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var num = row.cells[1];
    var phone = row.cells[2];

    //弹窗输入text
    var inputName = prompt("请输入姓名：");
    var inputNum = prompt("请输入学号：");
    var inputPhone = prompt("请输入手机：");

    name.innerHTML = inputName;
    num.innerHTML = inputNum;
    phone.innerHTML = inputPhone;
}

//删除
function deleteRow(button)
{
    //button父节点td，祖父节点tr
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}