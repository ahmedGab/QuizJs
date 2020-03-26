function sumOfNumbers(a,b){
    if (a+b < 100)
    return true
    else
    return false
}
console.log(sumOfNumbers(100,20))

function isEqual(num1,num2) { 
    if(num1===num2)
    return true
    else 
    return false
    }
    console.log(isEqual(5,5))


    function ifOneIsSum(a,b,c) {
        if(a*b>c)
        return true
        else 
        return false
        }
      
      console.log(ifOneIsSum(3,2,8))

      function isEmpty(str) { 
          if (str.length == 0)
          return true
          else 
          return false
        }
      console.log(isEmpty(""))


      function isEqualZero(num) { 
          if (num <=0 )
          return true
          else
         return false 
        }
        console.log(isEqualZero(-3))

          function isDevisible(num) {
            if (num % 100 ===0 )
          return true
          else
         return false  
            }
            console.log(isDevisible(400))
            function isEqualStr(str1, str2) {  
                if (str1.length == str2.length )
                return true
                else
               return false  }
               console.log(isEqualStr("ab","rt"))
               
               function isDevideBy(num1,  num2) { 
                if (num1 % num2 ===0 )
                return true
                else
               return false  
                }
                console.log(isDevideBy(12,4))

                function moodToday(mood) { 
                    let str="Today, I am feeling"
                    if (mood)
                    return str+=mood
                    else
                   return str+=" neuter"
                 }
                 console.log(moodToday(" happy"))

                 function isEvenOrOdd(num) {
                    if (num % 2 ===0 )
                    return "even"
                    else
                   return "odd" 
                     } 
                 console.log(isEvenOrOdd(7))

                 function match(str1,str2) {
                    if (str1.toLowerCase() ==str2 .toUpperCase() && str1.toUpperCase() ==str2.toLowerCaseCase())  
                    return true
                    else
                   return false
                    }
                    console.log(match("AB","ab"))
   
                    function getCase (str) {
                        if (str ==str.toUpperCase() )
                    return 'uper'
                    else if (str ==str.toLowerCase() )
                   return 'lower'
                   else
                   return "mixed"
                    }

                    console.log(getCase("aA"))
                    
                    function swappName(Name, LastName) { 
                        return LastName +" " +Name
                     }
                     console.log(swappName("ahmed","gabsi"))

                     function AlphabetSoup(str) { 
                         return str.split('').sort().join('')
                     }
                     console.log(AlphabetSoup("ahmed"))

                     function onlyCase(str) { 
                        if (str ==str.toUpperCase() || str ==str.toLowerCase() )
                        return true
                       else
                       return false
                      }
                     console.log(onlyCase("AAAaA"))
                     
                      function checkEnding (str1, str2) {
                         
                        return
                        
                        
                        }

                         function incrementOrDecrement (num) {
                            if (num % 2 ===0 )
                                return  num +=1
                               

                            else
                                return num -=1
                        }
                        console.log(incrementOrDecrement(5))

                        function checkEnding(str1, str2) { 
                            if (str1.substr(0,1)== str2.substr(0,1))
                            return true
                            else return false
                        
                        }
                        console.log(checkEnding("abc","ap"))

                        function plusPetit(num1,  num2) { 
                            if (num1 > num2 )
                            return num2
                            else
                           return num1 
                            }
                            console.log(plusPetit(7,3))