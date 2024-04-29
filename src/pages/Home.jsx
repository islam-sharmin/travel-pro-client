import Banner from "../shared/Banner";
import Countries from "../shared/Countries";
import MemberShip from "../shared/MemberShip";
import PopularTouristSpot from "../shared/PopularTouristSpot";
import Review from "../shared/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularTouristSpot></PopularTouristSpot>
            <Countries></Countries>
            <MemberShip></MemberShip>
            <Review></Review>
        </div>
    );
};

export default Home;