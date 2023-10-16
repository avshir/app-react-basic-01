import { useContext } from "react";
import CreateProduct from "./components/CreateProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { Product } from './components/Product';
//import { products } from './data/products';
import { useProducts } from "./hooks/products";
import { ModalContext } from "./context/ModalContext";
import { IProduct } from "./models";

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, open: openModal, close: closeModal } = useContext(ModalContext);

  const createHandler = (product: IProduct ) => {
    closeModal();
    addProduct(product);
  }

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

      {modal && (
        <Modal title="Create new product" onClose={closeModal}>
          <CreateProduct onCreate={ createHandler } />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-blue-700 text-white text-2xl px-4 py-2"
        onClick={openModal}
      >
        +
      </button>
    </div>
  );
}

export default App;
