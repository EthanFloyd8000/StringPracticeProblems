//Today, you will be going through a variety of practice problems
//associated with what we have learned so far. This is all about practice
//So remember, to just try your best, and if you have any questions
//Please ask me

//PRACTICE PROBLEM 1 //
/*
Given a string, return the string made of its first two chars, 
so the String "Hello" yields "He". If the string is shorter than
 length 2, return whatever there is, so "X" yields "X", and 
 the empty string "" yields the empty string "". 
 Note that str.length() returns the length of a string.
 
 Expected Output
    firstTwo('Hello') → He
    firstTwo('abcdefg') → ab
    firstTwo('ab') → ab
 TYPE YOUR ANSWER BELOW THIS COMMENT
*/
function firstTwo(str){
  if(str.length>2){
    return str;
  }
    else{
      return str.substring[0,2]
    }
}
firstTwo("Hello")
/* PRACTICE PROBLEM 2 
Given a string, return a version without the first and last char
, so "Hello" yields "ell". The string length will be at 
least 2.
  Expected Output
    withoutEnd('Hello') → ell
    withoutEnd('java') → av
    withoutEnd('coding') → odin
TYPE YOUR ANSWER BELOW THIS COMMENT
*/
function withoutEnd(str){
  return str.substring(1, str.length -1)
}
//PRACTICE PROBLEM 3 //
function startHi(str){
  if(str.substring(0,2) ==='hi'){
    return true
  } 
  else{
    return false
  }
}
/* 
Given a string, return true if the string starts with 
'hi'and false otherwise.

Examples

    startHi('hi there') → true
    startHi('hi') → true
    startHi('hello hi') → false


TYPE YOUR ANSWER BELOW
*/





//Practice Problem 4 //
/* 
Given a string, we'll say that the 
front is the first 3 chars of the string. 
If the string length is less than 3, the front is whatever is there.
 Return a new string which is 3 copies of the front.

 Examples

    front3('Java') → JavJavJav
    front3('Chocolate') → ChoChoCho
    front3('abc') → abcabcabc
*/


//Practice Problem 5 //
/* 
Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.

Examples

notString('candy') → not candy
notString('x') → not x
notString('not bad') → not bad
Type the code below
*/


//Practice Problem 6 //
/*
Given 2 strings, a and b, 
return a string of the form short+long+short, with the shorter string on the outside and the 
longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

Examples

comboString('Hello', 'hi') → hiHellohi
comboString('Hi', 'Hello') → HiHelloHi
comboString('aaa', 'b') → baaab
TYPE YOUR ANSWER BELOW
*/function comboString(a,b){
  if (a.length < b.length){
    return b+a+b
  }
  else{
    return a+b+a
  }
}





