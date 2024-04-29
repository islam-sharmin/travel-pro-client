import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="mt-8">
            <footer className="footer p-10 bg-purple-300 text-base-content">
                <nav className="space-y-2">
                    <h6 className="text-2xl text-purple-700 font-bold">Travel Pro</h6>
                    <p className="text-black">Explore. Discover. Plan. Book. Travel. Enjoy. Share.</p>
                    <div className="flex gap-5 items-center">
                        <p className="text-2xl text-black"><FaFacebook /></p>
                        <p className="text-2xl text-black"><FaGithub /></p>
                        <p className="text-2xl text-black"><FaTwitter /></p>
                        <p className="text-2xl text-black"><FaLinkedin /></p>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-purple-700 font-bold">Services</h6>
                    <a className="link link-hover text-black">Branding</a>
                    <a className="link link-hover text-black">Design</a>
                    <a className="link link-hover text-black">Marketing</a>
                    <a className="link link-hover text-black">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-purple-700 font-bold">Legal</h6>
                    <a className="link link-hover text-black">Terms of use</a>
                    <a className="link link-hover text-black">Privacy policy</a>
                    <a className="link link-hover text-black">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="text-purple-700 font-bold">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-black">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input w-1/2 md:w-full join-item" />
                            <button className="btn bg-purple-600 text-white join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;