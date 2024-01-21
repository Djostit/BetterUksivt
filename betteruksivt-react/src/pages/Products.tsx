import { useContext } from "react";
import { useProducts } from "../hooks/products";
import { ModalContext } from "../context/ModalContext";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErorrMessage";
import Product from "../components/Product";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";

const Products = () => {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);
  return (
    <div className="container mx-auto max-w-2xl pt-20 mb-20">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((x) => (
        <Product product={x} key={x.id}></Product>
      ))}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct
            onCreate={(x) => {
              close();
              addProduct(x);
            }}
          />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white px-4 py-2"
        onClick={open}
      >
        +
      </button>
    </div>
  );
};

export default Products;
