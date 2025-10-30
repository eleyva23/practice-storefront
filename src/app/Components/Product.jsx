// app/ components/Product.jsx
`use client`;
export default function Product({ name, price}) {
    return(
        <div className="product-care">
        <h2>(name)</h2>
        <p>Price: $(price)</p>
        </div>
    )
}