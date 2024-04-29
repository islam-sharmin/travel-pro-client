import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";


const Countries = () => {
    return (
        <div>
            <div className="text-center mt-14 mb-14">
                <Slide>
                <h2 className="text-3xl font-bold text-purple-700 mb-2">Countries</h2>
                <p className="text-center w-[70%] mx-auto text-slate-600">Explore diverse cultures and stunning landscapes on our tourism websites countries section. Start your global journey today!</p>
                </Slide>
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Bangladesh */}
                <Link to='/bangladesh' className="hover:border border-purple-700 rounded-2xl">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[200px]" src="https://a2i.gov.bd/wp-content/uploads/2023/01/unb-1640061387104.jpeg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bangladesh</h2>
                        <p>Bangladesh, situated in South Asia, is known for its lush greenery, vibrant culture, and the worlds largest river delta, the Sundarbans. Its a land of contrasts, blending bustling cities like Dhaka with serene rural landscapes.</p>
                    </div>
                </div>
                </Link>
                {/* Thailand */}
                <Link to='/thailand' className="hover:border border-purple-700 rounded-2xl">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[200px]" src="https://res.cloudinary.com/enchanting/q_70,f_auto,w_800,h_500,c_fill,g_face/hj-web/2015/09/man-kayaking-in-lagoon-sea-water-near-Koh-Kra-island-in-Thailand.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Thailand</h2>
                        <p>Thailand, in Southeast Asia, is famed for its tropical beaches, ancient ruins, and ornate temples. From the bustling streets of Bangkok to the tranquil islands of Phuket, Thailand offers a rich tapestry of experiences.</p>
                    </div>
                </div>
                </Link>
                {/* Indonesia */}
                <Link to='indonesia' className="hover:border border-purple-700 rounded-2xl">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[200px]" src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/best-indonesian-islands-1524629024-785X440.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Indonesia</h2>
                        <p>Indonesia, the worlds largest archipelago, is a diverse nation of thousands of islands, each with its own unique culture and landscapes. From the jungles of Sumatra to the beaches of Bali, Indonesia is a paradise for adventurers and beach lovers alike.</p>
                    </div>
                </div>
                </Link>
                {/* Malaysia */}
                <Link to='/malaysia'className="hover:border border-purple-700 rounded-2xl">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[200px]" src="https://www.eyeonasia.gov.sg/images/asean-countries/Malaysia%20snapshot%20cover%20iso.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Malaysia</h2>
                        <p>Malaysia, located in Southeast Asia, is a melting pot of cultures, featuring Malay, Chinese, Indian, and indigenous influences. With modern cities like Kuala Lumpur and natural wonders like the Cameron Highlands, Malaysia offers something for every traveler.</p>
                    </div>
                </div>
                </Link>
                {/* Vietnam */}
                <Link to='/vietnam' className="hover:border border-purple-700 rounded-2xl">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[200px]" src="https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2023/07/13164158/Asian-woman-wearing-Vietnam-culture-traditional-at-Trang-An-Vietnam.-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Vietnam</h2>
                        <p>Vietnam, in Southeast Asia, is known for its breathtaking landscapes, rich history, and delicious cuisine. From the chaotic streets of Hanoi to the serene beauty of Ha Long Bay, Vietnam captivates visitors with its charm and diversity.</p>
                    </div>
                </div>
                </Link>
                {/* Cambodia */}
                <Link to='/cambodia' className="hover:border border-purple-700 rounded-2xl">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[200px]" src="https://www.spectator.co.uk/wp-content/uploads/2024/03/iStock-544473722.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cambodia</h2>
                        <p>Cambodia, home to the magnificent Angkor Wat temple complex, is a country steeped in history and culture. From the bustling markets of Phnom Penh to the tranquil shores of Sihanoukville, Cambodia offers a blend of ancient wonders and modern delights.</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Countries;