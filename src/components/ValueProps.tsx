import { Truck, Heart, Leaf, Shield } from "lucide-react";

const values = [
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Order by 2 PM for delivery today in the local area",
  },
  {
    icon: Heart,
    title: "Handcrafted With Love",
    description: "Each arrangement designed by our expert florists",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable sourcing and biodegradable packaging",
  },
  {
    icon: Shield,
    title: "Freshness Guaranteed",
    description: "7-day freshness promise or your money back",
  },
];

const ValueProps = () => {
  return (
    <section className="py-12 lg:py-16 bg-flora-sage-light">
      <div className="flora-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="flex flex-col items-center text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground">
                {value.title}
              </h3>
              <p className="flora-body-sm text-muted-foreground mt-2">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
