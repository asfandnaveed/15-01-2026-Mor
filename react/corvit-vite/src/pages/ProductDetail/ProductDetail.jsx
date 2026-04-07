
import './ProductDetail.css';


export default function ProductDetail() {

    return (
        <div className="container py-5">
            <div className="row">
                {/* Left: Images */}
                <div className="col-md-6 d-flex">
                    <div className="me-3 d-flex flex-column gap-3">
                        <img src="/uploads/cabage.png" className="border rounded" style={{ width: 70, height: 70 }} />
                        <img src="/uploads/cabage.png" className="border rounded" style={{ width: 70, height: 70 }} />
                        <img src="/uploads/cabage.png" className="border rounded" style={{ width: 70, height: 70 }} />
                    </div>

                    <div className="flex-grow-1 text-center">
                        <img
                            src="http://localhost:3000/uploads/cabage.png"
                            alt="Chinese Cabbage"
                            className="img-fluid"
                            style={{ maxHeight: 400 }}
                        />
                    </div>
                </div>

                {/* Right: Details */}
                <div className="col-md-6">
                    <h2 className="fw-bold">Chinese Cabbage</h2>

                    <div className="mb-2 text-warning">
                        ★★★★☆
                        <span className="text-muted ms-2">4.3 Review</span>
                    </div>

                    <p className="text-muted">SKU: SKU-CABBAGE</p>

                    <h3 className="text-success fw-bold">$5.99</h3>

                    <span className="badge bg-success mb-3">In Stock</span>

                    <p className="text-muted">Fresh napa cabbage.</p>

                    {/* Quantity + Cart */}
                    <div className="d-flex align-items-center gap-3 mt-4">
                        <div className="input-group" style={{ width: 120 }}>
                            <button className="btn btn-outline-secondary">-</button>
                            <input
                                type="text"
                                className="form-control text-center"
                                value="1"
                                readOnly
                            />
                            <button className="btn btn-outline-secondary">+</button>
                        </div>

                        <button className="btn btn-success px-4">
                            Add to Cart
                        </button>

                        <button className="btn btn-outline-secondary">♡</button>
                    </div>

                    {/* Meta */}
                    <div className="mt-4">
                        <p>
                            <strong>Category:</strong> Vegetables
                        </p>
                        <p>
                            <strong>Stock:</strong> 80
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}