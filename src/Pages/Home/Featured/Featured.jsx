import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (

        <div className="featured-item  bg-fixed text-white ">
            <SectionTitle className="" subHeading='Check it out' heading='Featured Item'></SectionTitle>
            <div className="md:flex justify-center bg-slate-800 bg-opacity-40 items-center py-16 px-36  ">
            <div>
                <img src={featuredImg} alt=""/>
            </div>
            <div className="md:ml-10 mt-4">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can I get some? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid.</p>
<button className="btn btn-outline border-0 border-b-4">Order Now</button>


            </div>
            </div>
        </div>
    );
};

export default Featured;