// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

function encrypt(text, n) {
  if (!text || n <= 0 || text.length <= 0) {
      return text;
  }
  
  const helper = function(str) {
      let output = "";
      let temp = "";
  
      for (let i = 0; i < str.length; i++) {
          if (i % 2) {
              output += text[i];
          } else {
              temp += text[i];
          }
      }
  
      return output + temp;
  };
  
  for (let i = 0; i < n; i++) {
      text = helper(text);
  }
  
  return text;
}

console.log(encrypt("This is a test!", 2));

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0 || encryptedText.length <= 0) {
        return encryptedText;
    }
  
    const helper = function(str) {
        let odds = str.slice(0,(str.length/2));
        let evens = str.slice((str.length/2));
        let output = "";
      
        for (let i = 0; i < str.length; i++) {
            if (i % 2) {
                output += odds[0];
                odds = odds.slice(1);
            } else {
                output += evens[0];
                evens = evens.slice(1);
            }
        }
      
        return output;
    };
  
    for (let i = 0; i < n; i++) {
        encryptedText = helper(encryptedText);
    }
  
    return encryptedText;
}

console.log(decrypt(" Tah itse sits!",3));

// T  h  i  s     i  s     a     t  e  s  t  !
// 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14


// h  s  i        e  t  T  i     s  a  t  s  !
// 1  3  5  7  9 11 13  0  2  4  6  8 10 12 14


