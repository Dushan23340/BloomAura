import { Leaf, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="flora-container py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              <span className="font-serif text-xl font-medium">BloomAura</span>
            </a>
            <p className="text-sm opacity-70 mt-4 leading-relaxed">
              Premium floral artistry for life's most beautiful moments. 
              Handcrafted with love since 2015.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#shop" className="hover:opacity-100 transition-opacity">Shop All</a></li>
              <li><a href="#weddings" className="hover:opacity-100 transition-opacity">Weddings & Events</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Subscriptions</a></li>
              <li><a href="#gallery" className="hover:opacity-100 transition-opacity">Gallery</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Blossom Lane, Flower District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>hello@bloomaura.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium mb-4">Store Hours</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 8AM - 7PM</p>
                  <p>Saturday: 9AM - 6PM</p>
                  <p>Sunday: 10AM - 4PM</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-primary-foreground/5">
              <p className="text-xs opacity-70">
                🚚 We deliver within 25 miles of our location
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>© 2024 BloomAura. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
