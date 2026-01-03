import { ArrowRight } from "lucide-react";
import collectionEveryday from "@/assets/collection-everyday.jpg";
import collectionWedding from "@/assets/collection-wedding.jpg";
import collectionSympathy from "@/assets/collection-sympathy.jpg";
import collectionSubscription from "@/assets/collection-subscription.jpg";

const collections = [
  {
    title: "Everyday Bouquets",
    description: "Brighten any day with fresh seasonal blooms",
    image: collectionEveryday,
    href: "#everyday",
  },
  {
    title: "Weddings & Events",
    description: "Custom floral designs for your special day",
    image: collectionWedding,
    href: "#weddings",
  },
  {
    title: "Sympathy & Tribute",
    description: "Thoughtful arrangements to honor loved ones",
    image: collectionSympathy,
    href: "#sympathy",
  },
  {
    title: "Subscriptions",
    description: "Monthly blooms delivered to your door",
    image: collectionSubscription,
    href: "#subscriptions",
  },
];

const Collections = () => {
  return (
    <section id="shop" className="flora-section bg-background">
      <div className="flora-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Collections
          </span>
          <h2 className="flora-heading-lg text-foreground mt-3">
            Curated for every occasion
          </h2>
          <p className="flora-body text-muted-foreground mt-4">
            From everyday joy to life's most precious moments, discover our thoughtfully 
            designed collections crafted with the freshest blooms.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <a
              key={collection.title}
              href={collection.href}
              className="group flora-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {collection.title}
                </h3>
                <p className="flora-body-sm text-muted-foreground mt-1">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm font-medium text-primary">
                  <span>View collection</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
