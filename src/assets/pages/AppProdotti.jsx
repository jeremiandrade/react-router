import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
export default function Prodotti() {
    const api_url = ('https://fakestoreapi.com/products')
    const [prodotti, setProdotti] = useState([])

    useEffect(() => {

        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProdotti(data)
            })
    }, [])
    return (
        <>
            <AppHeader />
            <main>
                <div className="d-flex m-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {prodotti.map(item => (
                            <div className="col" key={item.id}>
                                <div className="card">
                                    <img src={item.image} alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="card-title"> {item.title}</h5>
                                        <p className="card-text"><strong>Price: </strong>{item.price}$</p>
                                        <p><strong>Description:</strong> {item.description}</p>
                                        <p><strong>Category:</strong> {item.category}</p>
                                        <p><strong>Rating:</strong> ⭐️ </p>
                                        <p><strong>Vote:</strong> {item.rating.rate}</p>
                                        <p><strong>Percent of votes:</strong> {item.rating.count} </p>
                                        <NavLink to={`/pageid/${item.id}`} className=" btn btn-outline-warning">More</NavLink>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <AppFooter />


        </>
    )
}