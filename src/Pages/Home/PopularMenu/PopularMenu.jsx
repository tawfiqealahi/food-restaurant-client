
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
   const [menu] = useMenu();
   const popular = menu.filter(item=>item.category==='popular');



   return (
        <section className='my-6'>
        <SectionTitle
        subHeading={"Popular Items"}
        heading={"FROM OUR MENU"}
        ></SectionTitle>
           
            <button className="btn btn-outline border-0 border-b-4 mx-auto">Order Now</button>
        </section>
    );
};

export default PopularMenu;