import axios from "axios"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkVsQGdtYWlsLmNvbSIsImlhdCI6MTcwMTY5NjEwNCwiZXhwIjoxNzMzMjUzNzA0fQ.sX9RqJM6hPdyRrYolPOzDa1lddPMhP0HVdwPg5pbKIQ"

// axios.defaults.baseURL = "http://bookish-octo-barnacle-2.onrender.com/"

// axios.defaults.headers.common = {
//     'Authorization': `Bearer ${token}`
//   }

export const baseURL = "https://bookish-octo-barnacle-2.onrender.com/"

export const config = {
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
        'accept': 'application/json'
    }
}