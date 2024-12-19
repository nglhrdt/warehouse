import CreateStorageUnitForm from './components/create-storage-unit-form';
import CreateProductForm from './components/create-product-form';
import Layout from './components/layout';
import StorageUnitList from './components/storage-unit-list';
import ProductList from './components/product-list';

function App() {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <CreateProductForm />
          <ProductList />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <CreateStorageUnitForm />
          <StorageUnitList />
        </div>
      </div>
    </Layout>
  );
}

export default App;
