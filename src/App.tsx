import "./App.css";
import { useFetch } from "./hooks/useFetch";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

function App() {
  const { data, isLoading, error } = useFetch<Product[]>(
    "https://fakestoreapi.com/products"
  );

  return (
    <>
      {data!.length == 0 ? (
        <p>No Producst</p>
      ) : (
        data!.map((product) => <Card key={product.id} title={product.title} />)
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div className="px-4 py-2 bg-white rounded-lg border shadow-sm">
      <p className="text-lg font-semibold text-black">{title}</p>
    </div>
  );
}

export default App;
