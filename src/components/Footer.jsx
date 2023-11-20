import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="flex place-items-end justify-around bg-black text-center h-full text-white">
      <div>
        <h2>All Rights Reserved</h2>
      </div>
      <div>
        <h2>SportShop</h2>
        <h3>El deporte de alto rendimiento al alcance.</h3>
      </div>
      <div>
        <h4>contactos:</h4>
        <div>
          <h5>
            <Link to={`https://www.instagram.com`}>instagram</Link>
          </h5>
          <h5>Linkein</h5>
          <h5>github</h5>
        </div>
        <h4></h4>
      </div>
    </footer>
  );
}

export default Footer;
