import { Slide } from "react-awesome-reveal";


const MemberShip = () => {

    return (
        <div className='my-14'>
            <div className="text-center mt-14 mb-14">
                <Slide>
                <h2 className="text-3xl font-bold text-purple-700 mb-2">Membership Plan</h2>
                </Slide>
            </div>

            <div className="flex flex-col md:flex-row gap-10">

                <div className="card bg-base-100 shadow-xl space-y-2 p-8 flex-1">
                    <div>
                        <h2 className="text-center text-base font-semibold uppercase">Free plan</h2>
                    </div>
                    <hr />
                    <div>
                        <h2 className="text-center font-bold text-sky-500 text-2xl">Always Free</h2>
                    </div>
                    <hr />
                    <div className="card-body items-center text-center">
                        <p className="text-slate-500">10% Discount</p>
                        <p className="text-slate-500">Booking Cancelation</p>
                        <p className="text-slate-500">Money Back Guarantee</p>
                    </div>
                    <button className="btn bg-gradient-to-r w-2/3 mx-auto from-cyan-500 to-blue-500 rounded-3xl text-white">Get Started</button>
                </div>


                <div className="card bg-base-100 shadow-xl space-y-2 p-8 flex-1">
                    <div>
                        <h2 className="text-center  text-base font-semibold uppercase">regular Plan</h2>
                    </div>
                    <hr />
                    <div>
                        <h2 className="text-center font-bold text-lime-500 text-2xl">$3/month</h2>
                    </div>
                    <hr />
                    <div className="card-body items-center text-center">
                        <p className="text-slate-500">20% Discount</p>
                        <p className="text-slate-500">Booking Cancelation</p>
                        <p className="text-slate-500">Money Back Guarantee</p>
                    </div>
                    <button className="btn bg-gradient-to-r w-2/3 mx-auto from-lime-400 to-lime-500 rounded-3xl text-white">Get Started</button>
                </div>


                <div className="card bg-base-100 shadow-xl space-y-2 p-8 flex-1">
                    <div>
                        <h2 className="text-center text-base font-semibold uppercase">Premium plan</h2>
                    </div>
                    <hr />
                    <div>
                        <h2 className="text-center font-bold text-violet-500 text-2xl">$6/month</h2>
                    </div>
                    <hr />
                    <div className="card-body items-center text-center">
                        <p className="text-slate-500">30% Discount</p>
                        <p className="text-slate-500">Booking Cancelation</p>
                        <p className="text-slate-500">Money Back Guarantee</p>
                    </div>
                    <button className="btn rounded-3xl w-2/3 bg-gradient-to-r mx-auto from-violet-400 to-violet-500 text-white">Get Started</button>
                </div>


            </div>
        </div>
    );
};

export default MemberShip;