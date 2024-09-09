const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    console.log(expr);
    let substr;
    let subArr = [];
    let length = expr.length / 10;
  
    for (let i = 0; i < length; i++) {
      substr = expr.substring(0, 10);   
      let arr = substr.split('');      
      subArr.push(arr);                
      expr = expr.slice(10);             
    }
  
    subArr.forEach(el => {
      let firstOneIndex = el.indexOf('1'); 
      if (firstOneIndex !== -1) {
          el.splice(0, firstOneIndex);     
      }
    });
  
    let result = subArr.map(subArray => {
    let grouped = [];
    for (let i = 0; i < subArray.length; i += 2) {
        let pair = subArray[i] + (subArray[i + 1] || '');
        grouped.push(pair);
    }
    return grouped;
    });
    let newArr = result.map(subArr => 
        subArr.map(item => {
            item = item.replace(/11/g, '-');
            item = item.replace(/10/g, '.');
            return item;
        })
    );
  
    let merged = newArr.map((subArr) => subArr.reduce((acc, item) => {
        return acc + item;
    })
    )
    let resArr = [];
    for(let h = 0; h < merged.length; h++) {
      let letter = MORSE_TABLE[merged[h]];
      resArr.push(letter);
    }
    return resArr.join('');
  }


module.exports = {
    decode
}