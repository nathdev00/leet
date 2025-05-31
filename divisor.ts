let str1 = "ABCABC";

let str2 = "ABC";

let common = "";

function checkCommonString(str1: string, str2: string): string {
  if (str1 + str2 != str2 + str1) {
    return ""

  }else{
    
    const lenGCD = checkDivides(str1.length, str2.length)
    return str1.substring(0, lenGCD)
  }
  return "";
}

function checkDivides(a: number, b: number): number {

    return b === 0 ? a : checkDivides(b, a % b)
}




let result = "";
result = checkCommonString("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX");
console.log(result);
