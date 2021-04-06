function date(element,index,array){
    let a = array[index].year;
    if (array[index].result == 'W'){
        //console.log(a);
        return a; 
    }
    
    
 }
function superbowlWin(record){
   let a = record.find(date); //.find method returns either the whole element ({ year: '1969', result: 'W' }) or undefined.
   if (a != undefined){
    return a.year;
   }
   else{
       return a;
   }
}

