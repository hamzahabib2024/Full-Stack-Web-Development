

function List(){

    const fruits = [{id: 1, name: 'Apple', calories: 95},
                    {id: 2, name: 'Banana', calories: 105}, 
                    {id: 3, name: 'Cherry', calories: 50}, 
                    {id: 4, name: 'Date', calories: 277}, 
                    {id: 5, name: 'Elderberry', calories: 100}];


    // fruits.sort((a,b)=>a.name.localeCompare(b.name));  // ascending order alphabetically
    // fruits.sort((a,b)=>b.name.localeCompare(a.name));  // descending order alphabetically

    //now sort by calories 
    fruits.sort((a,b)=>a.calories-b.calories);  // ascending order by calories  
    // fruits.sort((a,b)=>b.calories-a.calories);  // descending order by calories




    const lowCalFruits = fruits.filter((fruit)=>fruit.calories<100);  // filter low calorie fruits
    const highCalFruits = fruits.filter((fruit)=>fruit.calories>=100);  // filter high calorie fruits

    const ListItems = highCalFruits.map((fruit) => <li key={fruit.id}>
                                                    {fruit.name}: &nbsp;
                                                    <b>{fruit.calories}</b> calories</li>);

    return (
        <ul>
            {ListItems}
        </ul>
    );

}
export default List