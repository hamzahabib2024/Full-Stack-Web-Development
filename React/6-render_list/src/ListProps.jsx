

function ListProps(props) {

    const category = props.category;
    const itemsList = props.items;

    const listItems = itemsList.map((item) => <li key={item.id}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b> calories</li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">
                {listItems}
            </ol>
        </>
    );
}

ListProps.defaultProps = {
    category: "category",
    items: []
}

export default ListProps