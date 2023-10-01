import { useEffect, useState } from "react";
import { GetProducts } from "../../../../services/products.service";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await GetProducts()
      .then((res) => {
        setProducts(res.products);
        console.log(products);
      })
      .catch(() => {});
  };

  return (
    <div>
      <div className="card">
        <h3 className="mb-16px text-underline">Products list</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>
                    <img src={elem.thumbnail} style={{ width: "40px" }}></img>
                  </td>
                  <td className="fw-medium">{elem.title}</td>

                  <td>
                    <div>{elem.brand}</div>
                  </td>
                  <td>USD {elem.price}.00</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
