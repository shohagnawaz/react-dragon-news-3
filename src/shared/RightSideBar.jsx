import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";

const RightSideBar = () => {
    return (
        <div>
            <div className='p-4 space-y-3'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    <span>Google</span>
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    <span>Github</span>
                </button>
            </div>
            <div className='p-4'>
                <h2 className="text-3xl">Find Us On</h2>
                <a className='p-4 flex items-center border rounded-t-lg' href="">
                    <FaFacebook></FaFacebook>
                    <span className='ml-3'>Facebook</span>
                </a>
                <a className='p-4 flex items-center border-x' href="">
                    <FaTwitter></FaTwitter>
                    <span className='ml-3'>Twitter</span>
                </a>
                <a className='p-4 flex items-center border rounded-b-lg' href="">
                    <FaInstagram></FaInstagram>
                    <span className='ml-3'>Instagram</span>
                </a>
            </div>
            {/*q zone*/}
            <div className='p-4 space-y-3'>
                <h2 className="text-3xl mb-10">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideBar;