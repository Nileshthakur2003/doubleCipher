// Define a dictionary for the letter-to-word mapping
const codeNames = {
  'A': 'Alpha',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliett',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'X-ray',
  'Y': 'Yankee',
  'Z': 'Zulu',
  ' ': '', 
  '.':'block',
  '1':'x',
  '2':'y'// Handle spaces
};

const codeAlpha = {
  'A': '@',
  'B': '#',
  'C': '£',
  'D': '_',
  'E': '-',
  'F': '+',
  'G': '(',
  'H': ')',
  'I': '/',
  'J': '*',
  'K': ':',
  'L': ';',
  'M': '!',
  'N': '?',
  'O': '1',
  'P': '2',
  'Q': '3',
  'R': '4',
  'S': '5',
  'T': '5',
  'U': '6',
  'V': '7',
  'W': '8',
  'X': '9',
  'Y': '10',
  'Z': '12',
  ' ': ' ', // Handle spaces
};

function encryptToMilitaryCode(text) {
  let encryptedText = '';

  // Convert input text to uppercase for consistency
  text = text.toUpperCase();

  for (let char of text) {
    if (char in codeNames) {
      encryptedText += codeNames[char] + ' ';
    } else {
      // If the character is not in the dictionary, keep it unchanged
      encryptedText += char;
    }
  }

  return encryptedText;
}

function decryptFromMilitaryCode(encryptedText) {
  let decryptedText = '';
  const words = encryptedText.split(' ');

  for (let word of words) {
    let found = false;
    for (let [char, code] of Object.entries(codeNames)) {
      if (word === code) {
        decryptedText += char;
        found = true;
        break;
      }
    }
    if (!found) {
      decryptedText += word;
    }
  }

  return decryptedText;
}

// Test the encryption and decryption functions
function justUpdate(){
var inputText = document.getElementById("text").value;
var step1=encryptToMilitaryCode(inputText);
var encrypted = encrypt_re(step1);



console.log('Encrypted:', encrypted);

document.getElementById("churchill").innerHTML="<p>First encryption : <hr><br><span style='color:green;border:2px ridge green'>"+step1+"</span></p><br><p> Second encryption : <hr><br><span style='color:red;border:2px ridge red'>"+encrypted+"</span></p>";
document.getElementById('canvas').innerHTML="";
new QRCode(document.getElementById('canvas'),inputText);

}





//futher encryption using ceasar cipher!

function encrypt_re(text)
{
let encryptedText = '';
  
  // Convert input text to uppercase for consistency
  text = text.toUpperCase();
  
  for (let char of text) {
    if (char in codeNames) {
      encryptedText += codeAlpha[char] + '';
    } else {
      // If the character is not in the dictionary, keep it unchanged
      encryptedText += char;
    }
  }
  
  return encryptedText;
}


justUpdate();

