import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const handleCallNow = (phone: string) => {
    window.open(`tel:${phone}`, "_self");
  };

  const handleEmail = () => {
    window.open("mailto:kctransport786@gmail.com", "_self");
  };

  const services = [
    {
      icon: Truck,
      title: "Road Freight",
      description:
        "Daily cargo transport services across Punjab, Haryana, Chandigarh, Delhi, UP, Uttaranchal, Bihar, Kolkata, Assam, Gujarat, and all over India. Full truck and part-load options available.",
    },
    {
      icon: Shield,
      title: "Fleet Management",
      description:
        "As fleet owners, we provide direct handling of your cargo with our own vehicles. No middlemen, competitive rates, and guaranteed service quality.",
    },
    {
      icon: Clock,
      title: "On Time Delivery",
      description:
        "Reliable and punctual delivery services ensuring your cargo reaches its destination safely and on schedule across all major routes in India.",
    },
    {
      icon: Users,
      title: "Direct Handling",
      description:
        "Direct handling by fleet owners eliminates middlemen, providing cost-effective and efficient transport services with transparent pricing.",
    },
  ];

  const serviceAreas = [
    "Punjab",
    "Haryana",
    "Chandigarh",
    "Delhi",
    "UP",
    "Uttaranchal",
    "Bihar",
    "Kolkata",
    "Assam",
    "Gujarat",
    "All Over India",
  ];

  return (
    <div className="min-h-screen bg-dark-primary overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 bg-dark-primary/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-accent-green p-3 rounded-lg">
                <Truck className="w-8 h-8 text-dark-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white uppercase tracking-wider">
                  KC TRANSPORT
                </h1>
                <p className="text-white/60 text-sm">
                  Transport Contractor & Commission Agents
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-accent-green transition-colors text-lg"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-accent-green transition-colors text-lg"
              >
                About
              </a>
              <a
                href="#services"
                className="text-white hover:text-accent-green transition-colors text-lg"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-white hover:text-accent-green transition-colors text-lg"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:flex space-x-4">
              <Button
                onClick={() => handleCallNow("7006069502")}
                className="bg-accent-green hover:bg-accent-green/90 text-dark-primary font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20"
      >
        <div className="absolute inset-0 bg-[url(/truck1.jpg)] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary/90 via-dark-primary/80 to-dark-secondary/90"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <span className="text-accent-green text-lg font-semibold tracking-wider uppercase">
                  Transport Services
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8">
                SAFE &<span className="block text-accent-green">ON TIME</span>
                <span className="block">CARGO</span>
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-xl">
                Daily Service for: Punjab, Haryana, Chandigarh, Delhi, UP,
                Uttaranchal, Bihar, Kolkata, Assam, Gujarat & All over India.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  onClick={handleEmail}
                  className="bg-accent-green hover:bg-accent-green/90 text-dark-primary font-semibold text-lg px-8 py-4 rounded-lg transition-all"
                >
                  Get A Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => handleCallNow("7006069502")}
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-accent-green/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src="/truck2.jpg"
                alt="KC Transport Fleet"
                className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Large Typography Section */}
      <section className="py-20 overflow-hidden">
        <div className="text-center">
          <h2 className="text-8xl md:text-[160px] font-bold text-white leading-none mb-4">
            TRANSPORT
          </h2>
          <h3 className="text-6xl md:text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-accent-green/50 leading-none">
            SOLUTIONS
          </h3>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-dark-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-green/10 rounded-full blur-2xl"></div>
              <div className="relative bg-dark-secondary rounded-2xl p-8 border border-white/10">
                <img
                  src="/truck2.jpg"
                  alt="KC Transport Fleet"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>

            <div>
              <span className="text-accent-green text-lg font-semibold tracking-wider uppercase mb-4 block">
                About Company
              </span>
              <h3 className="text-5xl font-bold text-white mb-8 leading-tight">
                Our Main Goal to Satisfy Local & Global Clients
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-12">
                KC TRANSPORT - Transport Contractor & Commission Agents
                providing daily service for Punjab, Haryana, Chandigarh, Delhi,
                UP, Uttaranchal, Bihar, Kolkata, Assam, Gujarat & All over
                India.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, text: "Safe Transport" },
                  { icon: Clock, text: "On Time Delivery" },
                  { icon: Users, text: "Direct Handling" },
                  { icon: Star, text: "Trusted Service" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-dark-secondary/50 rounded-xl border border-white/10 hover:border-accent-green/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-dark-primary" />
                    </div>
                    <span className="text-white font-semibold">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { number: "500+", label: "PROJECTS", accent: true },
              { number: "15+", label: "YEARS" },
              { number: "50+", label: "CITIES" },
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <CheckCircle className="w-8 h-8 text-accent-green mx-auto mb-4" />
                <div
                  className={`text-8xl font-bold ${stat.accent ? "text-accent-green" : "text-white"}`}
                >
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-dark-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-accent-green text-lg font-semibold tracking-wider uppercase mb-4 block">
              All Services
            </span>
            <h3 className="text-5xl font-bold text-white mb-8">Our Services</h3>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Comprehensive Transport Services to Power Your Business Growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-dark-secondary border border-white/10 hover:border-accent-green/30 transition-all group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-accent-green/10 border border-accent-green/30 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:bg-accent-green/20 transition-all">
                    <service.icon className="w-10 h-10 text-accent-green" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 uppercase">
                    {service.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-dark-secondary border border-white/10 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white mb-8 text-center uppercase">
              Service Coverage Areas
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-accent-green/10 border border-accent-green/30 text-accent-green font-semibold py-3 px-4 rounded-lg text-center uppercase hover:bg-accent-green/20 transition-all"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Large Typography Section 2 */}
      <section className="py-20 overflow-hidden">
        <div className="text-center">
          <h2 className="text-6xl md:text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 leading-none mb-4">
            Digital
          </h2>
          <h3 className="text-6xl md:text-[120px] font-bold text-white leading-none">
            solutions
          </h3>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Get Ready to
            <span className="block text-accent-green">Grow Your Business</span>
          </h3>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Contact us today for competitive rates and reliable transport
            solutions across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => handleCallNow("7006069502")}
              className="bg-accent-green hover:bg-accent-green/90 text-dark-primary font-semibold text-xl px-12 py-6 rounded-lg transition-all"
            >
              <Phone className="w-6 h-6 mr-3" />
              7006069502
            </Button>
            <Button
              onClick={() => handleCallNow("8082176534")}
              className="bg-accent-green hover:bg-accent-green/90 text-dark-primary font-semibold text-xl px-12 py-6 rounded-lg transition-all"
            >
              <Phone className="w-6 h-6 mr-3" />
              8082176534
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-accent-green text-lg font-semibold tracking-wider uppercase mb-4 block">
              What we do
            </span>
            <h3 className="text-5xl font-bold text-white mb-8">Contact</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h4 className="text-2xl font-bold text-white mb-8 uppercase">
                  Our Offices
                </h4>
                <div className="space-y-8">
                  <div className="bg-dark-secondary border border-white/10 rounded-xl p-6 hover:border-accent-green/30 transition-all">
                    <h5 className="font-bold text-accent-green text-lg mb-3 uppercase">
                      H.O
                    </h5>
                    <p className="text-white/80 leading-relaxed">
                      Canal Road, Ward No. 8, Rajive Colony,
                      <br />
                      Bari Brahmana, Samba, Jammu - 181133
                    </p>
                  </div>
                  <div className="bg-dark-secondary border border-white/10 rounded-xl p-6 hover:border-accent-green/30 transition-all">
                    <h5 className="font-bold text-accent-green text-lg mb-3 uppercase">
                      B.O
                    </h5>
                    <p className="text-white/80 leading-relaxed">
                      NH-44, Nealki, Sarore Adda,
                      <br />
                      Bari Brahmana, Jammu-181133
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-secondary border border-white/10 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-8 uppercase">
                Drop Us a Message
              </h4>
              <div className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full p-4 bg-dark-primary border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-accent-green outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-4 bg-dark-primary border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-accent-green outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Subject*"
                    className="w-full p-4 bg-dark-primary border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-accent-green outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Message*"
                    rows={6}
                    className="w-full p-4 bg-dark-primary border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:border-accent-green outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <Button
                  onClick={handleEmail}
                  className="w-full bg-accent-green hover:bg-accent-green/90 text-dark-primary font-semibold text-lg py-4 rounded-lg transition-all"
                >
                  Connect with KC Transport today
                </Button>

                <div className="pt-8 border-t border-white/10">
                  <h5 className="font-bold text-white text-lg mb-6 uppercase">
                    Contact Person: Ankit
                  </h5>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-accent-green" />
                      <div className="flex flex-wrap gap-4">
                        <Button
                          variant="link"
                          className="text-white p-0 h-auto hover:text-accent-green transition-colors text-lg"
                          onClick={() => handleCallNow("7006069502")}
                        >
                          7006069502
                        </Button>
                        <Button
                          variant="link"
                          className="text-white p-0 h-auto hover:text-accent-green transition-colors text-lg"
                          onClick={() => handleCallNow("8082176534")}
                        >
                          8082176534
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-accent-green" />
                      <Button
                        variant="link"
                        className="text-white p-0 h-auto hover:text-accent-green transition-colors text-lg"
                        onClick={handleEmail}
                      >
                        kctransport786@gmail.com
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-dark-secondary border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white/80">
            <p className="text-lg mb-2">
              © 2024 KC Transport. All Rights Reserved.
            </p>
            <p className="text-sm">Powered by KC Transport Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
