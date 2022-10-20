// Step 1. We are creating a function called "getTodos" & a constant variable called "request"
const getTodos = () => {

    const request = new XMLHttpRequest();
    // XMLHttpRequest objects are used to interact with the servers.

    // Step 2. Creating an EventListener within our function to recognize change in the readyState
    request.addEventListener('readystatechange', () => {
        // 'readystatechange' is the event that is fired when the readyState property
        // of the XMLHttpRequest is subject to change.

        // Step 3. Establishing the conditions to be met for successful & non-successful
        // Run-time within the function of our EventListener
        if (request.readyState === 4 && request.status === 200) {

            //  XMLHttpRequest has 5 different readyState values:
            //  0 - Unsent
            //  1 - Opened
            //  2 - Headers_Received
            //  3 - Loading
            //  4 - Done(Successful/OK)

            //  XMLHttpRequest also has 4 status values:
            //  Unsent = 0
            //  Opened = 0
            //  Loading = 200
            //  Done(Successful/OK) = 200

            console.log(request.responseText);    
            // If readyState & Status are Successful, then return responseText = Data
            // responseText returns the text received from a server 
            // following a request being sent.

        } 
        else if (request.readyState === 4) {
            console.log("could not fetch the data");
        }   // If only the readyState is Successful and the Status != 200, return "error message" 
    });

    // Step 4. Initializing new requests to retrieve and send data to and from our server.
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    // Within the event listener, if readyState & Status are both Done/Successful then request.open
    // will create a new request to GET / Pull(GitHub) data from our URL down below.

    request.send();
    // After creating the new request, we use request.send 
    // to deliver the request to the server
}

// callback of getTodos function
getTodos();
getTodos();

// returns two copies of jsonplaceholder data within console.log