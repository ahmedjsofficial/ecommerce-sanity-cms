import Link from "next/link";
import { urlFor } from "../config/config";

export default function FooterHero({ footer }) {
  return (
    <>
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <p>{footer?.saletext}</p>
            <h3>{footer?.saletitle1}</h3>
            <h3>{footer?.saletitle2}</h3>
            <p>{footer?.saledate}</p>
          </div>
          <div className="right">
            <p>{footer?.smalltext}</p>
            <h3>{footer?.title}</h3>
            <p>{footer?.desc}</p>
            <Link href={`#`}>
              <button type="button">{footer?.btntext}</button>
            </Link>
          </div>

          <img src={urlFor(footer?.image)} className="footer-banner-image" />
        </div>
      </div>
    </>
  );
}
