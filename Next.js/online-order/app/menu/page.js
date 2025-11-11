import Link from "next/link";

export default function MenuPage() {
  const items = [
    { id: 1, name: "Pizza", price: 200 },
    { id: 2, name: "Burger", price: 120 },
    { id: 3, name: "Pasta", price: 150 },
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/menu/${item.id}`}>
              {item.name} - ₹{item.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
