import { footer } from "../CONTENT";
export default function Footer({ ...rest }) {
  return (
    <footer id="footer-4">
      <div className="footer-4-div">
        <img src={footer.img} alt={footer.alt} id="logoEnd" />
      </div>
      <div className="footer-4-div">
        <h3>{footer.name}</h3>
        <a>{footer.address}</a>
        <a>{footer.num}</a>
      </div>
      <div className="footer-4-div">
        <h3>{footer.view}</h3>
        <button {...rest} value={0} className="footer-4-btn">
          {footer.about}
        </button>
        <button {...rest} value={1} className="footer-4-btn">
          {footer.myProj}
        </button>
      </div>
      <div className="footer-4-div">
        <h3>{footer.contact}</h3>
        <a href={`tel:${footer.phone}`} className="footer-4-btn">
          {footer.phone}
        </a>
        <a href={`mailto:${footer.mail}`} className="footer-4-btn">
          {footer.mail}
        </a>
      </div>
    </footer>
  );
}
