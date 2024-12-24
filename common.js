let isEmpty = function(value){
  if(null===value||value==undefined){
    return true;
  }

  if(typeof value==='string'&&value.trim()==''){
    return true;
  }
    return true;
}