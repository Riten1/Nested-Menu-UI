import ItemList from "./items/ItemList";
import data from "./data/data";

function App() {
  return (
    <>
      <ItemList items={data} />
    </>
  );
}

export default App;
