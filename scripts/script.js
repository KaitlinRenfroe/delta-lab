$( document ).ready(function() { 
  
  console.log( "ready!" ); 
  
  //click the button
  
  $('#btnUserName').click(function() { 
    console.log("button clicked")
    
    let fname = $('#fname').val()
     
    console.log(fname);   
    let coolFactMsg1; 
    let coolFactMsg2;
    let spiritAnimalMsg;
    
    let vowelCnt = vowelNum(fname);
    let srtAnimal =spiritAnimal(fname, spiritAnimalMsg);
    let backwardsName = reverseName(fname);
    
    
    //function for getting # of vowels in name
    function vowelNum(name){
      var vowelsCount = 0;

  //turn the input into a string
  //var string = str.toString();
  for (var i = 0; i <= name.length - 1; i++) {
  //if a vowel, add to vowel count
    if (name.charAt(i) == "a" || name.charAt(i) == "e" || name.charAt(i) == "i" || name.charAt(i) == "o" || name.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
    }
    
function reverseName(name){
        var revName= name.split("").reverse().join("");
       return revName; 
}
    
function spiritAnimal(name, msg){
    //if statement to determine what spirit animal you got
    if (name.length <= 3){
      msg = "Your spirit animal is a platypus!";
    }
    else if (name.length > 3 && name.length <= 6 ){
      msg = "Your spirit animal is a narwhal!";
    }
    else{
      msg = "Your spirit animal is a Mongoose!";
    }
  
  return msg;
}
    
        //display what spirit animal they got and how many vowels in name 
    coolFactMsg1 = `Cool Fact: Your name has ${vowelCnt} vowels in it!`;
    coolFactMsg2 = `Cool Fact: Your name backwards is ${backwardsName}`;
    
    $('#coolFact1').text(coolFactMsg1);
    $('#coolFact2').text(coolFactMsg2);
    $('#something').text(srtAnimal);

  }); 
  
});