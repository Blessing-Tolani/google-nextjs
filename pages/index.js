import Head from "next/head";
import Header from "../components/Header";
import Body from "../components/body";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>

        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col h-screen justify-between ">
        <div>
          <Header />
          <Body />
        </div>

        <Footer />
      </div>
    </>
  );
}
