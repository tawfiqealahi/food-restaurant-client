

const FoodCard = ({item}) => {
    const {name,image,price,recipe}=item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt={name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Card</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;