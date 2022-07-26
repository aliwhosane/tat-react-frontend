import Head from "next/head";
import Header from "./Header";
import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Tape A Tale</title>
        <meta name="keywords" content="Storytelling, audio, entertainment" />
      </Head>
      <Header />
      <Sidebar />
      <BottomBar />
      {children}
    </div>
  );
};

export default Layout;
