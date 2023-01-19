function age(){
    let d1 = document.getElementById("date").value;
    let m1 = document.getElementById("month").value;
    let y1 = document.getElementById("year").value;
    let date = new Date();
    let d2 = date.getDate();
    console.log(d2)
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(d1>d2){
        d2 = d2 + month[m2-1];
        m2 = m2 -1;
    }

    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;
    document.getElementById("age").innerHTML = "Your Age is " + y + " Years " + m + " Months " + d + " Days ";
}



document.addEventListener("contextmenu",function(e){
  alert("Code Available on github");
  e.preventDefault();
});

document.onkeydown = function(e){
  if(event.keyCode == 123){
    alert("Code Available on github");
    return false;
  }

  if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
    alert("Code Available on github");
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
    alert("Code Available on github");
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
    alert("Code Available on github");
    return false;
  }
  if(e.ctrlKey && e.keyCode == "U".charCodeAt(0)){
    alert("Code Available on github");
    return false;
    
  }
};
