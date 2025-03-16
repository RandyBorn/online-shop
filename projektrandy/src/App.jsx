export default function App() {
  return (
    <form className="new-item-form">
      <h1>Artikel-Warenkauf</h1>
      <label>
        <span>Item name:</span>
        <input type="text" name="name" />
      </label>
      <label>
        <span>Quantity:</span>
        <input type="number" name="quantity" />
      </label>
      <button type="submit">Add item</button>
      <label htmlFor="item"></label>
    </form>
  );
}
