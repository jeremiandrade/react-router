
export default function Homepage() {

    return (
        <>
            <header>
                <nav className="nav-bar">
                    <ul class="nav justify-content-center">
                        <li>
                            <a class="nav-link active" aria-current="page" href="#">Jr</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Homepage</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Prodotti</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Chi Siamo</a>
                        </li>
                    </ul>
                </nav>
                <hr />
            </header>

            {/* main */}
            <main>
                <div className="d-flex m-5">

                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <img src="" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>

            {/* footer */}
            <footer>
                <div className="d-flex">

                    <p>serve aiuto?</p>
                    <ul>
                        <li><p>serve aiuto?</p></li>
                        <li>faq</li>
                        <li>faq</li>
                        <li>faq</li>
                        <li>faq</li>
                    </ul>
                    <ul>
                        <p>serve aiuto?</p>
                        <ul>
                            <li>faq</li>
                            <li>faq</li>
                            <li>faq</li>
                            <li>faq</li>
                        </ul>
                    </ul>
                    <ul>
                        <p>serve aiuto?</p>
                        <ul>
                            <li>faq</li>
                            <li>faq</li>
                            <li>faq</li>
                            <li>faq</li>
                        </ul>
                    </ul>
                    <ul>
                        <p>serve aiuto?</p>
                        <ul>
                            <li>faq</li>
                            <li>faq</li>
                            <li>faq</li>
                            <li>faq</li>
                        </ul>
                    </ul>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    </div>
                    <img src="Name " alt="" />
                </div>




            </footer>










        </>
    )

}