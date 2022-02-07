function palindrome(str) {
    let palabra1 = str;
    palabra1 = palabra1.toLowerCase();
    palabra1 = palabra1.replace(/(\s)/gi,"");
    palabra1 = palabra1.replace(/(\W)/gi,"");
    palabra1 = palabra1.replace(/(_)/gi,"");
  
    let palabra2 = "";
  
    for (let i = 0; i < palabra1.length; i++){
      palabra2 = palabra1[i] + palabra2;
    }
  
    console.log(palabra1," 1");
    console.log(palabra2," 2");
  
    if (palabra1 === palabra2){
      return true
    } else {
      return false
    }
  }

  console.log(palindrome("eye"));