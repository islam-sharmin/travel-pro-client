import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import torism1 from "../assets/torism1.jpg"
import torism2 from "../assets/torism2.jpg"
import torism3 from "../assets/torism3.jpg"
import torism4 from "../assets/torism4.jpg"
import { Typewriter } from 'react-simple-typewriter'
import { Slide } from "react-awesome-reveal";


const Banner = () => {

    return (
        <div>
            <div className='rounded-lg shadow-2xl z-10'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 4000 }}
                >
                    <SwiperSlide>
                        <div className="relative w-full h-[60vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${torism1})` }}>
                            <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                                <h1 className="text-white text-center text-3xl font-bold mb-4">Discover Your{' '}
                                    <span>
                                        <Typewriter
                                            words={['Next Adventure', 'Unforgettable Experiences!', 'Dream Vacation!']}
                                            loop={4}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={40}
                                            deleteSpeed={40}
                                            delaySpeed={1000}
                                        />
                                    </span></h1>
                                <Slide>
                                    <p className="text-white text-lg text-center">Unlock new experiences with our dynamic tourism website!</p>
                                </Slide>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full h-[60vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${torism2})` }}>
                            <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                                <h1 className="text-white text-center text-3xl font-bold mb-4">Discover Your {' '}
                                    <span>
                                        <Typewriter
                                            words={['Next Adventure', 'Unforgettable Experiences!', 'Dream Vacation!']}
                                            loop={4}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={40}
                                            deleteSpeed={40}
                                            delaySpeed={1000}
                                        />
                                    </span></h1>
                                <Slide>
                                    <p className="text-white text-lg text-center">Unlock new experiences with our dynamic tourism website!</p>
                                </Slide>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[60vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${torism3})` }}>
                            <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                                <h1 className="text-white text-center text-3xl font-bold mb-4">Discover Your{' '}
                                    <span>
                                        <Typewriter
                                            words={['Next Adventure', 'Unforgettable Experiences!', 'Dream Vacation!']}
                                            loop={4}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={40}
                                            deleteSpeed={40}
                                            delaySpeed={1000}
                                        />
                                    </span></h1>
                                <Slide>
                                    <p className="text-white text-lg text-center">Unlock new experiences with our dynamic tourism website!</p>
                                </Slide>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[60vh] md:h-[80vh] rounded-lg bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${torism4})` }}>
                            <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-center items-center">
                                <h1 className="text-white text-center text-3xl font-bold mb-4">Discover Your{' '}
                                    <span>
                                        <Typewriter
                                            words={['Next Adventure!', 'Unforgettable Experiences!', 'Dream Vacation!']}
                                            loop={4}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={40}
                                            deleteSpeed={40}
                                            delaySpeed={1000}
                                        />
                                    </span></h1>
                                <Slide>
                                    <p className="text-white text-lg text-center">Unlock new experiences with our dynamic tourism website!</p>
                                </Slide>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;