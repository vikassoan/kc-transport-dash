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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

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
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 bg-primary-blue border-b-2 border-accent-red">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-accent-red p-3 rounded">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white font-barlow uppercase tracking-wider">
                  KC TRANSPORT
                </h1>
                <p className="text-white/80 text-sm font-dm-sans">
                  Transport Contractor & Commission Agents
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-accent-red transition-colors font-barlow uppercase"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-accent-red transition-colors font-barlow uppercase"
              >
                About
              </a>
              <a
                href="#services"
                className="text-white hover:text-accent-red transition-colors font-barlow uppercase"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-white hover:text-accent-red transition-colors font-barlow uppercase"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:flex space-x-4">
              <Button
                onClick={() => handleCallNow("7006069502")}
                className="bg-accent-red hover:bg-red-700 text-white font-barlow uppercase"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-[url(/truck1.jpg)] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white font-barlow uppercase leading-tight mb-6">
              Safe & On Time
              <span className="block text-accent-red">Cargo Transport</span>
              <span className="block">Services</span>
            </h2>
            <p className="text-xl text-white/90 font-dm-sans mb-8 leading-relaxed">
              Daily Service for: Punjab, Haryana, Chandigarh, Delhi, UP,
              Uttaranchal, Bihar, Kolkata, Assam, Gujarat & All over India.
            </p>
            <Button
              onClick={handleEmail}
              className="bg-accent-red hover:bg-red-700 text-white font-barlow uppercase text-lg px-8 py-4"
            >
              Get A Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-red font-barlow font-bold uppercase text-sm tracking-wider">
                - 01
              </span>
              <h3 className="text-5xl font-bold text-primary-blue font-barlow uppercase mb-8 leading-tight">
                About Us
              </h3>
              <p className="text-gray-700 font-dm-sans text-lg leading-relaxed mb-6">
                KC TRANSPORT - Transport Contractor & Commission Agents
                providing daily service for Punjab, Haryana, Chandigarh, Delhi,
                UP, Uttaranchal, Bihar, Kolkata, Assam, Gujarat & All over
                India.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-red rounded flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-dm-sans font-semibold">
                    Safe Transport
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-red rounded flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-dm-sans font-semibold">
                    On Time Delivery
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-red rounded flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-dm-sans font-semibold">
                    Direct Handling
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-red rounded flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-dm-sans font-semibold">
                    Trusted Service
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/truck2.jpg"
                alt="KC Transport Fleet"
                className="w-full h-96 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent-red font-barlow font-bold uppercase text-sm tracking-wider">
              - 02
            </span>
            <h3 className="text-5xl font-bold text-primary-blue font-barlow uppercase mb-8">
              Our Services
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-accent-red rounded mx-auto mb-6 flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-primary-blue font-barlow uppercase mb-4">
                    {service.title}
                  </h4>
                  <p className="text-gray-700 font-dm-sans leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white border-2 border-accent-red rounded p-8">
            <h4 className="text-2xl font-bold text-primary-blue font-barlow uppercase mb-6 text-center">
              Service Coverage Areas
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-accent-red text-white font-bold py-3 px-4 rounded text-center uppercase font-barlow"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-red">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="text-4xl font-bold font-barlow uppercase mb-4">
                Get A Free Quote
              </h3>
              <p className="font-dm-sans text-lg">
                Contact us today for competitive rates and reliable transport
                solutions across India.
              </p>
            </div>
            <Button
              onClick={() => handleCallNow("7006069502")}
              className="bg-white text-accent-red hover:bg-gray-100 font-barlow uppercase px-8 py-4 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent-red font-barlow font-bold uppercase text-sm tracking-wider">
              - 03
            </span>
            <h3 className="text-5xl font-bold text-primary-blue font-barlow uppercase mb-8">
              Contact
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-primary-blue font-barlow uppercase mb-6">
                  Our Offices
                </h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent-red pl-6">
                    <h5 className="font-bold text-primary-blue font-barlow uppercase mb-2">
                      H.O
                    </h5>
                    <p className="text-gray-700 font-dm-sans">
                      Canal Road, Ward No. 8, Rajive Colony,
                      <br />
                      Bari Brahmana, Samba, Jammu - 181133
                    </p>
                  </div>
                  <div className="border-l-4 border-accent-red pl-6">
                    <h5 className="font-bold text-primary-blue font-barlow uppercase mb-2">
                      B.O
                    </h5>
                    <p className="text-gray-700 font-dm-sans">
                      NH-44, Nealki, Sarore Adda,
                      <br />
                      Bari Brahmana, Jammu-181133
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-primary-blue font-barlow uppercase mb-6">
                Message Us
              </h4>
              <div className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full p-4 border-2 border-gray-200 rounded font-dm-sans focus:border-accent-red outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-4 border-2 border-gray-200 rounded font-dm-sans focus:border-accent-red outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Subject*"
                    className="w-full p-4 border-2 border-gray-200 rounded font-dm-sans focus:border-accent-red outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Message*"
                    rows={6}
                    className="w-full p-4 border-2 border-gray-200 rounded font-dm-sans focus:border-accent-red outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <Button
                  onClick={handleEmail}
                  className="bg-accent-red hover:bg-red-700 text-white font-barlow uppercase px-8 py-4"
                >
                  Submit
                </Button>

                <div className="pt-6 border-t border-gray-200">
                  <h5 className="font-bold text-primary-blue font-barlow uppercase mb-4">
                    Contact Person: Ankit
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-accent-red" />
                      <div className="space-x-4">
                        <Button
                          variant="link"
                          className="text-primary-blue font-dm-sans p-0 h-auto hover:text-accent-red"
                          onClick={() => handleCallNow("7006069502")}
                        >
                          7006069502
                        </Button>
                        <Button
                          variant="link"
                          className="text-primary-blue font-dm-sans p-0 h-auto hover:text-accent-red"
                          onClick={() => handleCallNow("8082176534")}
                        >
                          8082176534
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-accent-red" />
                      <Button
                        variant="link"
                        className="text-primary-blue font-dm-sans p-0 h-auto hover:text-accent-red"
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
      <footer className="py-8 bg-primary-blue border-t-2 border-accent-red">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <p className="font-dm-sans">
              Copyright © 2024 KC Transport. All rights reserved.
            </p>
            <p className="font-dm-sans text-sm text-white/80 mt-2">
              Powered by KC Transport Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
