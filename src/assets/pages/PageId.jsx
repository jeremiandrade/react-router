import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function PageId() {
    // const navigate = useNavigate()
    const { id } = useParams()

    const url_id = `https://fakestoreapi.com/products/${id}`

    const [element, setElement] = useState({})

    useEffect(() => {
        fetch(url_id)
            .then(res => res.json())
            .then(data => {
                setElement(data)
                console.log(data);

            })
            .catch(err => {
                console.log(err);
                navigate()
            })
    }, [])



    return (
        <>
            <div className="card">
                <img src={element?.image} alt={element?.title} />
                <div className="card-body">
                    <h5 className="card-title"> {element?.title}</h5>
                    <p className="card-text"><strong>Price: </strong>{element?.price}$</p>
                    <p><strong>Description:</strong> {element?.description}</p>
                    <p><strong>Category:</strong> {element?.category}</p>
                    <p><strong>Rating:</strong> ⭐️ </p>
                    <p><strong>Vote:</strong> {element?.rating?.rate}</p>
                    <p><strong>Percent of votes:</strong> {element?.rating?.count} </p>


                </div>
            </div>

        </>
    )
}