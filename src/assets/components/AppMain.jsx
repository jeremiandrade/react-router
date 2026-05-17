import { useState, useEffect } from "react"
export default function AppMain() {
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
        <main className="bg-dark text-white">
            <div className="d-flex m-5">
                <div className="row-cols-md-2 g-4">
                    {prodotti.map(item => (
                        <div className="col" key={item.id}>
                            <div className="card">
                                <img className="img-prodotti" src={item.image} alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title"> {item.title}</h5>
                                    <p className="card-text"><strong>Price: </strong>{item.price}$</p>
                                    <p><strong>Description:</strong> {item.description}</p>
                                    <p><strong>Category:</strong> {item.category}</p>
                                    <p><strong>Rating:</strong> ⭐️ </p>
                                    <p><strong>Vote:</strong> {item.rating.rate}</p>
                                    <p><strong>Percent of votes:</strong> {item.rating.count} </p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}