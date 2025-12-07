`use client`
import{ use State} from "react";
import ProductList from "./Components/Productlist";

export default function Counter(){
    const ( count, setcount)= useState (0); 
    returnt (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>{p.name}- $ {p.price}</li>
                ))}
            </ul>
            
        </div>
    )
}