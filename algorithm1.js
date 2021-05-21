 function convertFahrToCelsius(value){
  if ( Array.isArray(value) ){
    return `[${value}] is not a valid number but a/an array.`
  }else if( typeof value == "object" ) {
    return `${JSON.stringify(value)} is not a valid number but a/an object.`
  }else{
    C = Number(value)
    let  fahr = (C - 32)/1.8
    fahr = fahr.toFixed(4);
    return fahr;
  }
 }

 
console.log(convertFahrToCelsius( {temp: 0} ));