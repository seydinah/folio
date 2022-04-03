import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import FavouriteProjects from "@components/FavouriteProjects";
import userData from "@constants/data";

export default function Home() {
  return (
    <ContainerBlock
      title="SeydiTech - Developer, Engineer"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Hero />
      {/*<FavouriteProjects />
<LatestCode repositories={repositories} />*/}
    </ContainerBlock>
  );
}
