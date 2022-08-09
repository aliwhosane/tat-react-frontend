import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import StoryCard from "../components/StoryCard";
import StoryCardMini from "../components/StoryCardMini";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen overflow-y-scroll flex-1 flex-col bg-gray-200">
      <Head>
        <title>Tape A Tale</title>
        <meta name="keywords" content="Storytelling, audio, entertainment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex md:flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          <StoryCardMini />
          <StoryCardMini />
          <StoryCardMini />
          <StoryCardMini />
          <StoryCardMini />
          <StoryCardMini />
          <StoryCardMini />
          <StoryCardMini />
          <StoryCardMini />
          <StoryCardMini />
        </div>
      </div>
      {/* <main className="flex flex-wrap justify-center">
        <StoryCardMini />
        <StoryCardMini />
        <StoryCardMini />
        <StoryCardMini />
        <StoryCardMini />
        <StoryCardMini />
        <StoryCardMini />
        <StoryCardMini />
        <StoryCardMini />
        <StoryCardMini />
      </main> */}
    </div>
  );
};

export default Home;
