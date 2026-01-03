import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="flora-section bg-flora-sage-light">
      <div className="flora-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
            <span className="text-3xl">💐</span>
          </div>

          {/* Content */}
          <h2 className="flora-heading-md text-foreground">
            Get seasonal offers & flower tips
          </h2>
          <p className="flora-body text-muted-foreground mt-4 mb-8">
            Subscribe to our newsletter for exclusive discounts, care guides, 
            and first access to new collections.
          </p>

          {/* Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-card border-border rounded-full px-5 text-base"
                required
              />
              <Button type="submit" className="flora-btn-primary h-12 px-6 whitespace-nowrap">
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-primary animate-scale-in">
              <CheckCircle className="h-6 w-6" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
