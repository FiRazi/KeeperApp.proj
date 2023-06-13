import React from "react";
const currentYear = new Date();
const Nothig = currentYear.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {Nothig}</p>
    </footer>
  );
}

export default Footer;
