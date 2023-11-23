import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="flex justify-around items-center align-middle bg-black text-center p-5 h-full text-white">
      <div className="flex items-center">
        <h2>All Rights Reserved</h2>
      </div>
      <div>
        <h2>SportShop</h2>
        <h3>El deporte de alto rendimiento al alcance.</h3>
      </div>
      <div>
        <h4>Contactos:</h4>
        <div>
          <Link to={`https://www.instagram.com`}>Instagram</Link>
          <h5>Linkein</h5>
          <h5>Github</h5>
        </div>
        <h4></h4>
      </div>
    </footer>
  );
}

export default Footer;
