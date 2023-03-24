import FooterHero from "../components/FooterHero";
import Hero from "../components/Hero";
import Product from "../components/store/Product";
import { client } from "../config/config";

export default function index({ banner, products,footer }) {
  // console.log(products)
  return (
    <>
      <div>
        <Hero banner={banner.length && banner[0]} />
        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>speaker There are many variations passages</p>
        </div>

        <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
        <FooterHero footer={footer.length && footer[0]}  />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const query = '*[_type == "banner"]';
  const banner = await client.fetch(query);

  const productquery = '*[_type == "product"]';
  const products = await client.fetch(productquery);

  const footerquery = '*[_type == "footer"]';
  const footer = await client.fetch(footerquery);

  return {
    props: {
      banner,
      products,
      footer
    },
  }
}