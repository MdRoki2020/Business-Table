import React, {Fragment} from 'react';


const ProductList = () => {

return (
<Fragment>
    <div className="container my-5">
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <h5>My Product List</h5>
                                </div>
                                <div className="col-2">
                                    
                                </div>
                                <div className="col-4">
                                    <div className="input-group mb-3">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive data-table">
                                        <table className="table ">
                                            <thead className="sticky-top bg-white">
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Product</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Stock</th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Code</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            
                                                <tr>
                                                    <td>Camera</td>
                                                    <td>44000</td>
                                                    <td>Aviable</td>
                                                    <td>2580</td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-12 mt-5">
                                    <nav aria-label="Page navigation example">
                                        
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</Fragment>
);
};

export default ProductList;