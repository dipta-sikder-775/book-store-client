import Image from "../components/Image";
import LatestBook from "../components/LeatestBook/LeatestBook";


const Home = () => {
    return (
        <div>
            <Image className="w-full" src="https://i.ibb.co/94jDjq8/home-banner.jpg" />
            <LatestBook/>
        </div>
    );
};

export default Home;