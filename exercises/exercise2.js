/* 
Exercise 2: From 1 to 100, 
print only the common multiple values of 2 & 5 
but only the first 3
*/
let count = 0
for(let i =1; i<=100; i++){
    if(i%2 ==0 && i%5 ==0)
        {
            count ++
            console.log(i)
            if (count ==3)
            {
                  break
            }          
    }
}
