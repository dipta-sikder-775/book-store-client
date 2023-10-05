import Image from "../components/Image";
import LatestBook from "../components/LatestBook/LatestBook";

const Home = () => {
  return (
    <div>
      <Image
        className="w-full h-[40vh] ob"
        src="/banner.jpg"
      />

      <LatestBook />
    </div>
  );
};

export default Home;
