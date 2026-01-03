import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    event: "Wedding",
    content: "BloomAura made our wedding absolutely magical. The floral arrangements exceeded all expectations. Their attention to detail and creativity is unmatched.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James Chen",
    event: "Anniversary Gift",
    content: "I've never seen my wife so happy! The bouquet was stunning and arrived exactly on time. The quality of flowers is exceptional.",
    rating: 5,
    avatar: "JC",
  },
  {
    name: "Emma Rodriguez",
    event: "Subscription",
    content: "The monthly subscription has transformed my home. Every delivery feels like a gift. Fresh, beautiful, and always thoughtfully arranged.",
    rating: 5,
    avatar: "ER",
  },
];

const Testimonials = () => {
  return (
    <section className="flora-section bg-background">
      <div className="flora-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="flora-heading-lg text-foreground mt-3">
            Loved by our customers
          </h2>
          <p className="flora-body text-muted-foreground mt-4">
            Don't just take our word for it. Here's what our customers have to say 
            about their BloomAura experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 lg:p-8 flora-shadow-soft relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-accent" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-flora-rose text-flora-rose" />
                ))}
              </div>

              {/* Content */}
              <p className="flora-body text-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
