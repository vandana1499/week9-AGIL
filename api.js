// Request() to stop rewriting the same code over again
// We will always want to  Check if the response is O.K, handle error and return / etract the JSON resonse body
export default  function request(url, options) {
    return fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            const error = new Error("Uh oh there's an HTTP Error :(");
            error.status = response.status;
            throw error;
        } else {
            return response.json();
        }
    });
}


