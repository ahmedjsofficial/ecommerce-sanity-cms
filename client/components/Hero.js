import Link from 'next/link';
import { urlFor } from '../config/config';
export default function Hero({ banner }) {
  return (
    <>
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">{banner?.smalltext}</p>
          <h3>{banner?.largetext}</h3>
          <h1>{banner?.product}</h1>
          <img
            src={urlFor(banner?.image)}
            alt="headphones"
            className="hero-banner-image"
          />
          <div>
            <Link href={`#`}>
              <button type="button">{banner?.buttonText}</button>
            </Link>
            <div className="desc">
              <h5>Description</h5>
              <p>{banner?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
