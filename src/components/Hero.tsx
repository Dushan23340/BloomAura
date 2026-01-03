import { ArrowRight, Truck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBouquet from "@/assets/hero-bouquet.jpg";

const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-24 min-h-[90vh] flex items-center flora-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-flora-sage-light rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-flora-rose-light rounded-full blur-3xl opacity-30" />
      </div>

      <div className="flora-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            {/* Delivery Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <Truck className="h-4 w-4" />
              Same-day delivery available
            </div>

            {/* Main Heading */}
            <h1 className="flora-heading-xl text-foreground">
              Fresh, elegant flowers{" "}
              <span className="italic text-primary">for every moment</span>
            </h1>

            {/* Subheading */}
            <p className="flora-body text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Handcrafted bouquets designed with love, sourced from sustainable farms, 
              and delivered fresh to your doorstep. Make every occasion unforgettable.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="flora-btn-primary text-base px-8 py-6 group">
                Shop Bouquets
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="flora-btn-secondary text-base px-8 py-6">
                Wedding Consultation
              </Button>
            </div>

            {/* Delivery Info */}
            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Order by 2 PM for same-day</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/3] lg:aspect-square">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl overflow-hidden flora-shadow-elevated">
                <img
                  src={heroBouquet}
                  alt="Beautiful handcrafted bouquet with roses and peonies"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-card rounded-xl p-4 flora-shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-2xl">🌸</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Best Sellers</p>
                    <p className="text-sm text-muted-foreground">Starting at $45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
