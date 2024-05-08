import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4 nav_2">
          <a className="link link-hover" href="/">Home</a>
          <a className="link link-hover" href="/About.jsx">About Us</a>
          <a className="link link-hover" href="/Contact.jsx">Contact</a>
        </nav>
        <aside>
          <p className="p_4">Copyright © Created By CoderDoder </p>
          <p className="p_3">Supriya Prakash & Nayana R</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
