"use client";

import { MdEmail } from "react-icons/md"; // Material Design email icon
import PropTypes from "prop-types";

export default function EmailLink({ email }) {
  // Basic email validation
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    return <p style={{ color: "red" }}>Invalid email address</p>;
  }

  return (
    <a
      href={`mailto:${email}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        color: "#f8f8f8",
        fontSize: "1rem",
      }}
    >
      <MdEmail size={20} />
      {email}
    </a>
  );
}

EmailLink.propTypes = {
  email: PropTypes.string.isRequired,
};
