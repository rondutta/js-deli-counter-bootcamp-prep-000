let takeANumber = function(array,name){
  array.push(name);
  var l=array.length;
  return `Welcome ${name}. You are number ${l+1} in line.`;
}

let nowServing = function(array){
  var name = array.shift();
  if(array.length===0)
   return "There is nobody waiting to be served";
  else
   return `Currently serving ${name}`
}