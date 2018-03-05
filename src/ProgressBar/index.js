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
    console.log(http);
}

    function renderHtml(data) {
    console.log(data.bars[0])
    document.getElementById("progress1").style.width = data.bars[0] + "%";
    document.getElementById("percentage1").innerHTML = data.bars[0];
    document.getElementById("progress2").style.width = data.bars[1] + "%";
    document.getElementById("percentage2").innerHTML = data.bars[1];
    document.getElementById("progress3").style.width = data.bars[2] + "%";
    document.getElementById("percentage3").innerHTML = data.bars[2];
    document.getElementById("progress4").style.width = data.bars[3] + "%";
    document.getElementById("percentage4").innerHTML = data.bars[3];
    document.getElementById("but1").innerHTML = data.buttons[0];
    document.getElementById("but2").innerHTML = data.buttons[1];
    document.getElementById("but3").innerHTML = data.buttons[2];
    document.getElementById("but4").innerHTML = data.buttons[3];
    // document.getElementById("progress1").innerHTML = data.limit;
        // document.getElementById("progress2").innerHTML = data.limit;
        // document.getElementById("progress3").innerHTML = data.limit;
        // document.getElementById("progress4").innerHTML = data.limit;
   // console.log( document.getElementById("progress1").innerHTML);
}

// function increase(value) {
//     var x = document.getElementById("Progress").value;
//     document.getElementById("demo").innerHTML = x;
//     if (x === 'Progress1'){
//         if (value.value == "0"){
//             percent = parseInt(document.getElementById("percentage").innerHTML) + parseInt(document.getElementById("but1").innerHTML);
//             document.getElementById("progress1").style.width = percent + "%";
//             document.getElementById("percentage").innerHTML = percent;
//         }else if (value.value == "1"){
//             percent = parseInt(document.getElementById("percentage").innerHTML) + parseInt(document.getElementById("but2").innerHTML);
//             document.getElementById("progress1").style.width = percent + "%";
//             document.getElementById("percentage").innerHTML = percent;
//         }else if (value.value == "2") {
//             percent = parseInt(document.getElementById("percentage").innerHTML) + parseInt(document.getElementById("but3").innerHTML);
//             document.getElementById("progress1").style.width = percent <=0 ?  0 + "%" : percent + "%";
//             document.getElementById("percentage").innerHTML =  percent <=0 ?  0  : percent;
//         }else if (value.value == "3") {
//             percent = parseInt(document.getElementById("percentage").innerHTML) + parseInt(document.getElementById("but4").innerHTML);
//             console.log(percent)
//             document.getElementById("progress1").style.width = percent <=0 ?  0 + "%" : percent + "%";
//             document.getElementById("percentage").innerHTML = percent <=0 ?  0  : percent ;
//         }
//     }else if (x === 'Progress2'){
//         if (value.value == "0"){
//             percent = parseInt(document.getElementById("percentage1").innerHTML) + parseInt(document.getElementById("but1").innerHTML);
//             document.getElementById("progress2").style.width = percent + "%";
//             document.getElementById("percentage1").innerHTML = percent;
//         }else if (value.value == "1"){
//             percent = parseInt(document.getElementById("percentage1").innerHTML) + parseInt(document.getElementById("but2").innerHTML);
//             document.getElementById("progress2").style.width = percent + "%";
//             document.getElementById("percentage1").innerHTML = percent;
//         }else if (value.value == "2") {
//             percent = parseInt(document.getElementById("percentage1").innerHTML) + parseInt(document.getElementById("but3").innerHTML);
//             document.getElementById("progress2").style.width = percent <=0 ?  0 + "%" : percent + '%';
//             document.getElementById("percentage1").innerHTML = percent <=0 ?  0  : percent;
//         }else if (value.value == "3") {
//             percent = parseInt(document.getElementById("percentage1").innerHTML) + parseInt(document.getElementById("but4").innerHTML);
//             document.getElementById("progress2").style.width = percent <=0 ?  0 + "%" : percent + '%';
//             document.getElementById("percentage1").innerHTML = percent <=0 ?  0  : percent;
//         }
//     }else if (x === 'Progress3'){
//         if (value.value == "0"){
//             percent = parseInt(document.getElementById("percentage2").innerHTML) + parseInt(document.getElementById("but1").innerHTML);
//             document.getElementById("progress3").style.width = percent + "%";
//             document.getElementById("percentage2").innerHTML = percent;
//         }else if (value.value == "1"){
//             percent = parseInt(document.getElementById("percentage2").innerHTML) + parseInt(document.getElementById("but2").innerHTML);
//             document.getElementById("progress3").style.width = percent + "%";
//             document.getElementById("percentage2").innerHTML = percent;
//         }else if (value.value == "2") {
//             percent = parseInt(document.getElementById("percentage2").innerHTML) + parseInt(document.getElementById("but3").innerHTML);
//             document.getElementById("progress3").style.width = percent <=0 ?  0 + "%" : percent + '%';
//             document.getElementById("percentage2").innerHTML = percent <=0 ?  0  : percent;
//         }else if (value.value == "3") {
//             percent = parseInt(document.getElementById("percentage2").innerHTML) + parseInt(document.getElementById("but4").innerHTML);
//             document.getElementById("progress3").style.width = percent <=0 ?  0 + "%" : percent + '%';
//             document.getElementById("percentage2").innerHTML = percent <=0 ?  0  : percent;
//         }
//     }else if (x === 'Progress4'){
//         if (value.value == "0"){
//             percent = parseInt(document.getElementById("percentage3").innerHTML) + parseInt(document.getElementById("but1").innerHTML);
//             document.getElementById("progress4").style.width = percent + "%";
//             document.getElementById("percentage3").innerHTML = percent;
//         }else if (value.value == "1"){
//             percent = parseInt(document.getElementById("percentage3").innerHTML) + parseInt(document.getElementById("but2").innerHTML);
//             document.getElementById("progress4").style.width = percent + "%";
//             document.getElementById("percentage3").innerHTML = percent;
//         }else if (value.value == "2") {
//             percent = parseInt(document.getElementById("percentage3").innerHTML) + parseInt(document.getElementById("but3").innerHTML);
//             document.getElementById("progress4").style.width = percent <=0 ?  0 + "%" : percent + '%';
//             document.getElementById("percentage3").innerHTML = percent <=0 ?  0  : percent;
//         }else if (value.value == "3") {
//             percent = parseInt(document.getElementById("percentage3").innerHTML) + parseInt(document.getElementById("but4").innerHTML);
//             document.getElementById("progress4").style.width = percent <=0 ?  0 + "%" : percent + '%';
//             document.getElementById("percentage3").innerHTML = percent <=0 ?  0  : percent;
//         }
//     }
// }


function increase(value) {
    var x = document.getElementById("Progress").value;
    var button = document.getElementById(value);
    console.log(button);
    document.getElementById("demo").innerHTML = x;
            percent = parseInt(document.getElementById("percentage"+x).innerHTML) + parseInt(button.innerHTML);
            document.getElementById("progress"+x).style.width = percent <=0 ?  (0 + "%") : (percent + "%");
            document.getElementById("progress1").style.color = "#ff0000"
            document.getElementById("percentage"+x).innerHTML = percent <=0 ?  0  : percent;
}







