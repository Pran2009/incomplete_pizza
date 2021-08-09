menu=["Cheese pizza","Chicken Tikka pizza","Paneer Tikka Pizza","Veggie pizza"];
function getmenu() {
    var htmldata;
    var htmldata="<ol class='menulist'>"
    menu.sort();
    for(var i=0;i<menu.length;i++){
        htmldata=htmldata+"<li>"+ menu[i] +"</li>"
    }
        htmldata=htmldata+"</ol>";
        document.getElementById("display_menu").innerHTML=htmldata;

    }
    function additem() {
        var htmldata;
        var item=document.getElementById("additem").value;
        menu.sort();
        htmldata="<section class='cards'>";
        for(var i=0;i< menu.length;i++) {
            htmldata=htmldata+'<div class="card">' + '<img src="pizzaImg.png">' + menu[i] + "</div>"
        }
        htmldata = htmldata + "</section>"
        document.getElementById("display_addedmenu").innerHTML= htmldata;
    }


function addtop() {
    var item=document.getElementById("additem").value;
    menu.push(item);
    additem();
}