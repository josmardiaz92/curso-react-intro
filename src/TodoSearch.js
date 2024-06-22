import './TodoSearch.css'

function TodoSearch(){
    return(
        <input 
            placeholder="Cortar cebolla"
            className='TodoSearch'
            onChange={
                (event)=>{
                    console.log('Escribiste: ')
                    console.log(event.target.value)
                }
            }
        />
    );
}

export { TodoSearch }; 