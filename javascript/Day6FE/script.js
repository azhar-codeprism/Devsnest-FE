
// JavaScript function to check whether an `input` is an array or not
 let is_array = function(arr){
    return Array.isArray(arr)
 }

// JavaScript function to clone an array
 let array_Clone = function(arr){
    let new_arr = Array.from(arr)
    return new_arr
 }

//  JavaScript function to get the first element of an array
 let first = function(arr, n=0){
    if (n>arr.length){
        return arr
    }
    else if(n>0 && arr.length){
        return arr.slice(0, n)
    }
    else if(n==0){
        return arr[0]
    }
    else{
       return [] 
    }
 }

//  JavaScript program to join all elements of the following array into a string
 let join = function(arr){
     return arr.toString()
 }

//  JavaScript program to find the most frequent item of an array
let counter = function(arr){

    let mostFrequnet = null,mostFrequnetItem ;
    arr.sort()

    for (var i=0;i<arr.length;i++){ 

        var single = arr[i]; 
        var total = (arr.lastIndexOf(single)-arr.indexOf(single))+1; 

        if(total > mostFrequnet) {
            mostFrequnetItem = arr[i];
            mostFrequnet = total;
            i= arr.lastIndexOf(single)+1;
        }
    }
    return `${mostFrequnetItem } ( ${mostFrequnet} times )`
}