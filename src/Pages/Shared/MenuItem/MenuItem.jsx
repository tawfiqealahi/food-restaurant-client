
const MenuItem = ({item}) => {
    const {name,image,price,recipe} = item;

    return (
        <div className="flex space-x-2">
            <img style={{borderRadius:'0 10rem 10rem 10rem'}} className="w-[7rem]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}--------</h3>
                <p>{recipe}</p>
                <p className="text-yellow-400">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;