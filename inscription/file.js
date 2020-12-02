for(y = 1905; y <= 2020; y++) {
    var optn = document.createElement("OPTION");
    optn.text = y;
    optn.value = y;
    
    // if year is 2015 selected
    if (y == 2020) {
        optn.selected = true;
    }
    
    document.getElementById('Year').options.add(optn);
}

for(d = 1 ; d <= 31 ; d++){
    var dayOpt = document.createElement("OPTION");
    dayOpt.text = d;
    dayOpt.value = d;
    if(d == 1){
        dayOpt.selected = true;
    }
    document.getElementById('Day').options.add(dayOpt);
}
 
var array = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec"];
for(m = 0 ; m <= array.length-1; m++){
    var mOpt= document.createElement("OPTION");
    mOpt.text = array[m];
    mOpt.value = (m+1);

    if(array[m] == "Dec"){
        mOpt.selected = true
    }
    document.getElementById("Month").options.add(mOpt);
}









