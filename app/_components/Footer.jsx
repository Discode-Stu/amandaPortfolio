import React from "react"
import { email, phoneNumber } from "../_constants"

const Footer = () => {
  return (
    <footer
      className="flex-col sm:flex-row pb-4 p-4"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span className="mr-1">&copy;</span>
        <span>Amanda Constantine 2023</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href={`mailto:${email}`}>{email}</a>
        <span style={{ margin: "0 10px" }}>|</span>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </div>
    </footer>
  )
}

export default Footer
