import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral-900 text-base-content">
      <nav className="grid grid-flow-col gap-4 text-white">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover" href="src\assets\test.docx">
          Documentation
        </a>
      </nav>
      <aside className="text-white">
        <p>Copyright © 2024</p>
      </aside>
    </footer>
  );
};

export default Footer;
