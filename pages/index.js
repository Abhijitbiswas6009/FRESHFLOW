import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("shop");
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 1, name: "Groceries", icon: "🛒", products: ["Rice 5kg", "Oil 1L"] },
    { id: 2, name: "Vegetables", icon: "🥦", products: ["Tomato 1kg", "Potato 1kg"] },
    { id: 3, name: "RCM Products", icon: "🧴", products: ["RCM Soap", "RCM Detergent"] },
    { id: 4, name: "Non-Veg", icon: "🍗", products: ["Chicken 1kg", "Fish 1kg"] }
  ];

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (idx) => setCart(cart.filter((_, i) => i !== idx));

  return (
    <div style={{ background: "#111", color: "white", minHeight: "100vh", fontFamily: "Arial" }}>
      {/* Header */}
      <div style={{ textAlign: "center", padding: "1rem", background: "#222" }}>
        <h1 style={{ color: "lime" }}>Fresh Flow</h1>
        <p style={{ color: "#aaa" }}>Delivering from Nature to You</p>
      </div>

      {/* Views */}
      <div style={{ padding: "1rem", paddingBottom: "5rem" }}>
        {view === "shop" && (
          <div>
            <h2>Categories</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {categories.map((cat) => (
                <div key={cat.id} style={{ background: "#1c1c1c", padding: "1rem", borderRadius: "8px", cursor: "pointer" }}
                  onClick={() => setView(cat.name)}>
                  <div style={{ fontSize: "2rem" }}>{cat.icon}</div>
                  <h3>{cat.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {categories.filter((cat) => view === cat.name).map((cat) => (
          <div key={cat.id}>
            <button onClick={() => setView("shop")} style={{ marginBottom: "1rem" }}>← Back</button>
            <h2>{cat.icon} {cat.name}</h2>
            {cat.products.map((item, idx) => (
              <div key={idx} style={{ display: "flex", justifyContent: "space-between", margin: "0.5rem 0" }}>
                <span>{item}</span>
                <button onClick={() => addToCart(item)}>Add</button>
              </div>
            ))}
          </div>
        ))}

        {view === "cart" && (
          <div>
            <h2>🛍️ My Cart</h2>
            {cart.length === 0 ? "Empty" : cart.map((item, idx) => (
              <div key={idx} style={{ display: "flex", justifyContent: "space-between", margin: "0.5rem 0" }}>
                <span>{item}</span>
                <button onClick={() => removeFromCart(idx)}>Remove</button>
              </div>
            ))}
          </div>
        )}

        {view === "seller" && <p>🏬 Join as Seller (₹999/month)</p>}
        {view === "delivery" && <p>🚴 Become a Delivery Partner (₹299)</p>}
        {view === "profile" && <p>👤 My Profile (Name & Address form coming soon)</p>}
      </div>

      {/* Bottom Nav */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-around", background: "#222", padding: "0.75rem" }}>
        <button onClick={() => setView("shop")}>🛒 Shop</button>
        <button onClick={() => setView("seller")}>🏬 Seller</button>
        <button onClick={() => setView("delivery")}>🚴 Partner</button>
        <button onClick={() => setView("cart")}>🛍️ Cart ({cart.length})</button>
        <button onClick={() => setView("profile")}>👤 Profile</button>
      </div>
    </div>
  );
}
