

const ApiTodos = async () => {
    return await  fetch( import.meta.env.VITE_API_URL)
        .then(response => response.json())

}
export default ApiTodos;