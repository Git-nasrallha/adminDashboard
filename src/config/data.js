export const token = JSON.parse(localStorage.getItem('token'));
export const config={
    headers:{
        authorization:`Bearer ${token}`
    }
}