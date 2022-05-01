

var  x = "99-080-99989";

function abc() {
    var phoneno  = '/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-.]?([0-9]{4})$/';
    if(x = phoneno){
     console.log("valid");
    return 1;}
     else if(x  ==  null){
    console.log("Empty");
    return -1;
     }
     else{
    console.log("Invalid");
    return 0;
     } 
    }

abc()


