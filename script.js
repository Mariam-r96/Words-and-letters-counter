 let input = document.querySelector(".text");
 let letter = document.querySelector("#letters");
 let words = document.querySelector("#words");

 input.addEventListener('keyup',function(){
    //  console.log(input.value.length)
    
    // trimming the spaces and counting the letters
    let str = input.value.trim().replace(/\s+/g,'').length; 
    letter.innerHTML = `Letters : ${str}`;
    
    // trimming the spaces and counting the words
    let word = input.value.trim().split(' ').length;
    words.innerHTML = `Words : ${word}`;

    if(input.value ===""){
     words.innerHTML = "Words : 0";
    }

  // word limit of 5
   if(word>5){
       alert("word limit crossed")
   }

 });
