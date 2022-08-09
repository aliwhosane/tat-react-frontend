import Head from "next/head";
import Header from "./Header";
import BottomBar from "./BottomBar";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Tape A Tale</title>
        <meta name="keywords" content="Storytelling, audio, entertainment" />
      </Head>
      <main className="flex flex-col h-screen">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex bg-gray-100 max-w-60">
            <Sidebar />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex bg-gray-300 h-16">
              <Header />
            </div>
            <div className="flex flex-1 bg-blue-300 overflow-y-auto paragraph">
              {children}
            </div>
          </div>
        </div>
        <div className="flex">
          <BottomBar />
        </div>
      </main>
      {/* <div className="flex flex-col h-screen">
        <Header />
        <div className="flex  w-screen sticky left-0">
          <Sidebar />
          {children}
        </div>
        <div>
          <BottomBar />
        </div>
      </div> */}
    </>
  );
};

export default Layout;
