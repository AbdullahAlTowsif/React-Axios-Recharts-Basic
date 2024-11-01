import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "One free personal training session",
                "Access during off-peak hours"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Three free personal training sessions",
                "Access during all hours",
                "Access to group fitness classes"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 79.99,
            "features": [
                "Access to gym equipment",
                "Locker room access with premium amenities",
                "Five free personal training sessions",
                "24/7 gym access",
                "Access to group fitness and specialty classes",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 4,
            "name": "VIP",
            "price": 109.99,
            "features": [
                "All-access gym membership",
                "Locker room with private showers",
                "Ten free personal training sessions",
                "24/7 gym access with priority",
                "Access to all group classes and personal training",
                "Unlimited guest passes",
                "Free nutritional guidance sessions",
                "Dedicated locker"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;