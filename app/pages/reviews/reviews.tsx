import { useState, useEffect } from "react";

interface Review {
  _id: string;
  name: string;
  comment: string;
  rating: number;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState({ name: "", comment: "", rating: 0 });
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then(setReviews)
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rating === 0) return alert("Please select a rating");

    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Error submitting review");
      return;
    }

    const newReview: Review = await res.json();
    setReviews([newReview, ...reviews]);
    setForm({ name: "", comment: "", rating: 0 });
    setHoverRating(0);
  };

  const handleStarClick = (rating: number) => {
    setForm({ ...form, rating });
  };

  const renderStars = (count: number, clickable = false) => {
    return [...Array(5)].map((_, i) => {
      const starValue = i + 1;
      return (
        <span
          key={i}
          onClick={clickable ? () => handleStarClick(starValue) : undefined}
          onMouseEnter={clickable ? () => setHoverRating(starValue) : undefined}
          onMouseLeave={clickable ? () => setHoverRating(0) : undefined}
          style={{
            cursor: clickable ? "pointer" : "default",
            fontSize: "1.5rem",
            color:
              starValue <= (clickable ? hoverRating || form.rating : count)
                ? "#FFD700"
                : "#ccc",
            transition: "color 0.2s ease",
            marginRight: "4px",
          }}
        >
          ★
        </span>
      );
    });
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "650px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Customer Reviews</h1>

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "2rem",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={{
            display: "block",
            marginBottom: "1rem",
            width: "100%",
            padding: "0.6rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <textarea
          placeholder="Your review"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
          required
          style={{
            display: "block",
            marginBottom: "1rem",
            width: "100%",
            padding: "0.6rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            minHeight: "80px",
          }}
        />

        {/* Clickable Star Rating */}
        <div style={{ marginBottom: "1rem" }}>{renderStars(0, true)}</div>

        <button
          type="submit"
          style={{
            padding: "0.6rem 1.2rem",
            background: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit Review
        </button>
      </form>

      {/* Review List */}
      {reviews.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {reviews.map((r) => (
            <li
              key={r._id}
              style={{
                background: "#f9f9f9",
                borderRadius: "12px",
                padding: "1rem",
                marginBottom: "1rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <strong style={{ fontSize: "1.1rem" }}>{r.name}</strong>
              <div style={{ color: "#FFD700", margin: "0.3rem 0" }}>
                {renderStars(r.rating)}
              </div>
              <p style={{ margin: 0 }}>{r.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center", color: "#666" }}>
          No reviews yet. Be the first to share your thoughts!
        </p>
      )}
    </main>
  );
}