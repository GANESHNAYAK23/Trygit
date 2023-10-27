var index=0;

function colorchange(){
    var color=["red","blue","green","orange","yellow","purple"];

    document.getElementsByTagName("body")[0].style.background=color[index++];
    if(index>color.length-1)
        index=0;
}