import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-green-600 flex flex-col rounded-lg p-4 text-black">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-6">{name}</h4>
            <div className="pl-6 flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="btn mt-12 bg-blue-500 w-full font-bold rounded-lg hover:bg-blue-900">Buy Now</button>
        </div>
    );
};

export default PriceOption;