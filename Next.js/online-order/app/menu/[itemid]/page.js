// Next.js/online-order/app/menu/[itemid]/page.js
"use client";
import React from 'react';
import { use } from 'react';

export default function ItemDetails({ params }) {
  const unwrappedParams = use(params);
  const { itemid } = unwrappedParams;

  
  const items = [
    { id: 1, name: "Pizza", price: 250 },
    { id: 2, name: "Burger", price: 120 },
    { id: 3, name: "Pasta", price: 150 },
  ];

  // find the selected item
  const item = items.find((i) => i.id === Number(itemid));

  if (!item) {
    return <p>Item not found.</p>;
  }

  // State to manage the item's price
  const [currentPrice, setCurrentPrice] = React.useState(item.price);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [newPrice, setNewPrice] = React.useState('');

  function updateItem() {
    if (!newPrice || isNaN(newPrice)) {
      alert('Please enter a valid price');
      return;
    }
    
    setIsUpdating(true);
    // Simulate API call
    setTimeout(() => {
      setCurrentPrice(Number(newPrice));
      setNewPrice('');
      setIsUpdating(false);
      alert(`Successfully updated ${item.name} price to ₹${newPrice}`);
    }, 500);
  }

  return (
    <div>
      <h2>Item Details</h2>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Current Price:</strong> ₹{currentPrice}</p>
      <div style={{ marginTop: '1rem' }}>
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="Enter new price"
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button 
          onClick={updateItem} 
          disabled={isUpdating}
          suppressHydrationWarning
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: isUpdating ? '#cccccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isUpdating ? 'not-allowed' : 'pointer'
          }}
        >
          {isUpdating ? 'Updating...' : 'Update Price'}
        </button>
      </div>
    </div>
  );
}
