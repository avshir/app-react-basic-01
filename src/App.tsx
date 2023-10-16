import { useState } from "react";
import CreateProduct from "./components/CreateProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { Product } from "./components/Product";
//import { products } from './data/products';
import { useProducts } from "./hooks/products";

function App() {
  const { products, loading, error } = useProducts();
  const [modal, setModal] = useState(false);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h1 className="text-3xl font-bold underline">Hello React! Hello Anna!</h1>

      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((item) => (
        <Product product={item} key={item.id} />
      ))}
      {/* <Product product={products[0]} title={'text'} count={42} />
      <Product product={products[1]} /> */}

      {modal && <Modal title="Create new product" onClose={() => setModal(false) }>
        <CreateProduct onCreate={() => setModal(false)} />
      </Modal>}

      <button className="fixed bottom-5 right-5 rounded-full bg-blue-700 text-white text-2xl px-4 py-2" onClick={()=>setModal((prev) => !prev)}>+</button>
    </div>
  );
}

export default App;
