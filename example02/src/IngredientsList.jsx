
function IngredientsList({items}){

    console.log(items);
    return(

        <>
        <h1>Ingredients List</h1>
         <ul>
            {
                items.map((ingridient,i)=>(

                    <li key={(i)}>{ingridient}</li>
                ))
            }
        </ul> 
         
        
        </>
    );
}

export default IngredientsList;