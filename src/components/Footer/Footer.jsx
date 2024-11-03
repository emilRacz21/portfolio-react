import { footer } from "../../CONTENT";
import "./Footer.scss";

export default function Footer({ ...rest }) {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={footer.img} alt={footer.alt} className="footer-logo" />
      </div>
      <div className="footer-section">
        <h3>{footer.name}</h3>
        <a>{footer.address}</a>
        <a>{footer.num}</a>
      </div>
      <div className="footer-section">
        <h3>{footer.view}</h3>
        <button {...rest} value={0} className="footer-button">
          {footer.about}
        </button>
        <button {...rest} value={1} className="footer-button">
          {footer.myProj}
        </button>
      </div>
      <div className="footer-section">
        <h3>{footer.contact}</h3>
        <a href={`tel:${footer.phone}`} className="footer-button">
          {footer.phone}
        </a>
        <a href={`mailto:${footer.mail}`} className="footer-button">
          {footer.mail}
        </a>
      </div>
    </footer>
  );
}
