// What are promises in JavaScript? Explain the difference between callback functions and promises with an example.

function getData(){
    // Fetch data from server rejected, pending, resolve
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data Fetched");
            const data = "Sample Data";
            resolve(data)

        }, 2000);
        
    }
)

}

// Option 1 to exec code

// getData().then(function(data){
// console.log("Processing using Option 1: ", data);
// })

// Option 2 to exec code (easy syntax)

const data = await getData();
console.log("Processing using Option 2: ", data);
