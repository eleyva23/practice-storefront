`use client`;

const products = [
    {id: 1,name:`Laptop`, price:2700},
    {id: 2,name:`headphones`,price: 2800},
    {id:3, name:`charger`, price: 2900}
];

export default function ProductList() {
    return(
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>{p.name} - $ {p.price}</li>

                ))}
            </ul>
        </div>
    );
}
