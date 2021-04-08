
// Method to post to the server
export async function postToServer(path: string, body = {}) {
    let responseData = null
    try {
        const response = await fetch(
            path,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        if (!response.ok)
            return Promise.reject(response);
        else {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                responseData = await response.json();
            } else {
                responseData = await response.text();
            }
        }
    } catch (error) {
        return Promise.reject(error);
    }
    return responseData
}

// GET Method
export async function getFromServer(path: string) {
    let responseData = null
    try {
        const response = await fetch(
            path);
        if (!response.ok)
            return Promise.reject(response);
        else {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                responseData = await response.json();
            } else {
                responseData = await response.text();
            }
        }
    } catch (error) {
        return Promise.reject(error);
    }
    return responseData
}