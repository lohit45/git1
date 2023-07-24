
var count = 0;

function  increment()
{
    count = count + 1 ;
     document.getElementById("save-el").textContent = count  ;
}

function save()
{
    var countStr = count + " - " ;
     document.getElementById("save-el").textContent = countStr + document.getElementById("save-el").textContent ;
     document.getElementById("count-el").textContent = 0
    count = 0
}
increment();
save();