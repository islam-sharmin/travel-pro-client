import { Slide } from "react-awesome-reveal";
import user1 from "../assets/user1.jpg"
import user2 from "../assets/user2.jpg"
import user3 from "../assets/user3.jpg"

const Review = () => {
    return (
        <div>
            <div className="text-center mt-14 mb-14">
                <Slide>
                <h2 className="text-3xl font-bold text-purple-700 mb-2">What People Say</h2>
                <p className="text-center w-[70%] mx-auto text-slate-600">Learn Our Passion for Travel: Crafting Memorable Experiences Tailored Just for You. Explore Our Story Now.</p>
                </Slide>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-10" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>Amazing experience! Booking through this website was effortless and the variety of destinations offered was incredible. The customer service was top-notch, providing helpful recommendations and ensuring a smooth journey from start to finish.</p>
                    </div>
                    <div className="flex gap-6 items-center p-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user1} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Alice Johnson</h2>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>Highly recommend! This website made planning my trip a breeze. The user-friendly interface and detailed descriptions of attractions helped me tailor my itinerary perfectly. Plus, the deals and discounts saved me money without sacrificing quality.</p>
                    </div>
                    <div className="flex gap-6 items-center p-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user2} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">John Smith</h2>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>Unforgettable adventures! Thanks to this website, I discovered hidden gems and off-the-beaten-path destinations I would not have found otherwise. The reviews from other travelers were invaluable in making informed decisions. Can not wait to use it for my next getaway!</p>
                    </div>
                    <div className="flex gap-6 items-center p-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user3} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Sinha Chang</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;