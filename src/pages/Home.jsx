import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Home | Anna Pharmacy Group</title>
      <meta
        name="description"
        content="Learn about Anna Pharmacy Group, our history, values, leadership team and commitment to providing trusted community pharmacy services across London and the South East."
      />
      <link
        rel="canonical"
        href="https://annar.hhhosting.co.uk/company/about-us"
      />
    </Helmet>

      <Hero />
    </>
  );
}