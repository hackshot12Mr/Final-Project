var plus = document.querySelectorAll('.plus');
console.log(plus);

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', inc);
}

function inc (e) {
    var btn = e.target;
    console.log(btn);
    var div = btn.parentElement;
    console.log(div);
    var count = Number(div.querySelector('p').innerHTML);
    console.log(count);
    count++;
    div.querySelector('p').innerHTML = count;
    var pr=div.parentElement.parentElement;
    var pu=Number(pr.querySelector(".unitPrice").innerHTML);
    var price=pu*count;
    pr.querySelector(".price").innerHTML=price;
    sum();

}
var minus = document.querySelectorAll('.minus');
console.log(minus);
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click',  min)
}
    function min(e) {
    var btn= e.target;
    console.log(btn);
    var div = btn.parentElement;
    console.log(div);
    var count = Number(div.querySelector('p').innerHTML);
    if(count>0){
    console.log(count);
    count--;
    div.querySelector('p').innerHTML = count;
    var pr=div.parentElement.parentElement;
    var pu=Number(pr.querySelector(".unitPrice").innerHTML);
    var price=pu*count;
    pr.querySelector(".price").innerHTML=price;
}
sum();
}
var pr =(document.querySelectorAll('.price'));
console.log(pr)

function sum() {
    var tot=0
    for (let i = 0; i < pr.length; i++) {
        tot+=Number(pr[i].innerHTML)
        document.querySelector('#total').innerHTML=tot
    }

}
var likes=document.querySelectorAll(".like");
console.log(likes);
for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click',  lk)
}
function lk(e){
    var cible=e.target;
    if(cible.style.color!="red"){
        cible.style.color="red";
    }else{
        cible.style.color="#424242"; 
    }
}
var del=document.querySelectorAll('.delete')
for (let i = 0; i < del.length; i++) {
    del[i].addEventListener('click', det);
}
function det(e) {
    var cible=e.target
    var tr=cible.parentElement.parentElement.parentElement.parentElement
    tr.querySelector('.price').innerHTML=0
    sum();
    tr.remove();
}