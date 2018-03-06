var percent = 0;

window.onload = function () {

    var http = new XMLHttpRequest();
        http.onload = function () {
            var ourData = JSON.parse(http.response);
            console.log(ourData);
            renderHtml(ourData)
        }
    http.open("GET","http://pb-api.herokuapp.com/bars",true);
    http.send();
}

    function renderHtml(data) {
    console.log(data.limit);
    document.getElementById("progress1").style.width = data.bars[0] + "%";
    document.getElementById("percentage1").innerHTML = data.bars[0] + "%";
    document.getElementById("progress2").style.width = data.bars[1] + "%";
    document.getElementById("percentage2").innerHTML = data.bars[1] + "%";
    document.getElementById("progress3").style.width = data.bars[2] + "%";
    document.getElementById("percentage3").innerHTML = data.bars[2] + "%";
    document.getElementById("progress4").style.width = data.bars[3] + "%";
    document.getElementById("percentage4").innerHTML = data.bars[3] + "%";
    document.getElementById("but1").innerHTML = data.buttons[0];
    document.getElementById("but2").innerHTML = data.buttons[1];
    document.getElementById("but3").innerHTML = data.buttons[2];
    document.getElementById("but4").innerHTML = data.buttons[3];
    document.getElementById("but1").value = data.buttons[0];
    document.getElementById("but2").value = data.buttons[1];
    document.getElementById("but3").value = data.buttons[2];
    document.getElementById("but4").value = data.buttons[3];
    document.getElementById("progress1").value = data.limit;
    document.getElementById("progress2").value = data.limit;
    document.getElementById("progress3").value = data.limit;
    document.getElementById("progress4").value = data.limit;

}

function increase(value) {
    var x = document.getElementById("Progress").value;
    var button = document.getElementById(value);
    console.log(button);
    document.getElementById("demo").innerHTML = x;
            percent = parseInt(document.getElementById("percentage"+x).innerHTML) + parseInt(button.innerHTML);
            document.getElementById("progress"+x).style.width = percent <=0 ?  (0 + "%") : (percent + "%");
            document.getElementById("progress"+x).style.backgroundColor = parseInt (document.getElementById("progress"+x).style.width) > parseInt (document.getElementById("progress"+x).value) ? "#FF0000" :"#008000"
            document.getElementById("percentage"+x).innerHTML = percent <=0 ?  0  : percent;
}









