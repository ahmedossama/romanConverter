
    const decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1] 
    const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    const romanTwoDigitsMap = {
        "CM": 900,
        "CD": 400,
        "XC": 90,
        "XL": 50,
        "IX": 10, 
        "IV": 4
    }
    const toRoman = numberInput => {
        let result = ""
        decimalNumbers.forEach((value, index) => {
            while(numberInput >= value){
                result += romanNumbers[index]
                numberInput -= value
            }
        })
        return result;
    };

    const fromRoman = stringInput => {
        let result = 0;
        for(let key in romanTwoDigitsMap){
            let index = stringInput.indexOf(key)
            if(index !== -1) {
                result += romanTwoDigitsMap[key]
                stringInput = stringInput.replace(key, '-')
            }
        }
        const strArray = stringInput.split('')
        strArray.forEach(char => {
            if(char !== '-'){
                let index = romanNumbers.findIndex((element) => element === char)
                result += decimalNumbers[index]
            }
        })

        return result;    
        
    }

module.exports = {
    toRoman,
    fromRoman
}
