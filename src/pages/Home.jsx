import Banner from "../shared/Banner";
import Countries from "../shared/Countries";
import PopularTouristSpot from "../shared/PopularTouristSpot";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularTouristSpot></PopularTouristSpot>
            <Countries></Countries>
        </div>
    );
};

export default Home;