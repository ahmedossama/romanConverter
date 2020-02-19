const RomanNumerals =  require('./RomanNumerals')

const decimal =  RomanNumerals.fromRoman('MCMXC')

const roman  = RomanNumerals.toRoman(1990)


console.log(decimal)
console.log(roman)