import CreateProductForm from './components/create-product-form';
import Layout from './components/layout';
import ProductList from './components/product-list';

function App() {
  return (
    <Layout>
      <CreateProductForm />
      <ProductList />
    </Layout>
  );
}

export default App;
