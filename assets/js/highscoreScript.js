var listDivEl = document.getElementById("highScoreList");

var btnClear = document.getElementById("clear");

var getItems=localStorage.getItem("highScore");
            var itemsArray=getItems.split(" | ")
            console.log(itemsArray)



for (var i=0; i<itemsArray.length; i++){
    var listItemEl = document.createElement("li");
    listItemEl.innerHTML=itemsArray[i];
    listDivEl.appendChild(listItemEl);
    
    
}

btnClear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});