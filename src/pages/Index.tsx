import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Users,
  ChevronDown,
  Zap,
  Globe,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleCallNow = (phone: string) => {
    window.open(`tel:${phone}`, "_self");
  };

  const handleEmail = () => {
    window.open("mailto:kctransport786@gmail.com", "_self");
  };

  const services = [
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

  const stats = [
    { icon: Truck, value: "500+", label: "Vehicles" },
    { icon: Users, value: "10K+", label: "Happy Clients" },
    { icon: Globe, value: "50+", label: "Cities" },
    { icon: Award, value: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen font-oswald relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-yellow-500/10"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 group">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-xl shadow-lg transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-red-500/50">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div className="transform group-hover:translate-x-2 transition-all duration-300">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent uppercase tracking-wider">
                  KC TRANSPORT
                </h1>
                <p className="text-white/80 font-semibold uppercase text-sm tracking-wide">
                  Transport Contractor & Commission Agents
                </p>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button
                onClick={() => handleCallNow("7006069502")}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold uppercase transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                onClick={handleEmail}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold uppercase transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div
          className="absolute inset-0 bg-[url(/truck1.jpg)] bg-cover bg-center opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>

        {/* 3D Floating Truck Icon */}
        <div className="absolute top-1/4 right-1/4 transform-gpu">
          <div className="relative animate-float-3d">
            <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500 flex items-center justify-center">
              <Truck className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
          </div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="transform-gpu animate-slide-up">
              <h2 className="text-6xl md:text-8xl font-bold uppercase mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-gradient-x block">
                  SAFE & ON TIME
                </span>
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient-x block mt-4">
                  CARGO TRANSPORT
                </span>
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-gradient-x block mt-4">
                  SERVICES
                </span>
              </h2>
            </div>

            <div className="transform-gpu animate-slide-up animation-delay-300">
              <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Experience the future of logistics with our cutting-edge
                transport solutions. Direct handling by fleet owners with
                AI-powered tracking and real-time updates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center transform-gpu animate-slide-up animation-delay-600">
              <Button
                onClick={() => handleCallNow("7006069502")}
                size="lg"
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold uppercase text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                7006069502
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Button>
              <Button
                onClick={() => handleCallNow("8082176534")}
                size="lg"
                className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold uppercase text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                8082176534
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center transform hover:scale-110 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transform group-hover:rotate-12 transition-all duration-300">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 animate-count-up">
                  {stat.value}
                </h3>
                <p className="text-white/80 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="transform-gpu animate-slide-left">
              <span className="text-red-400 font-bold uppercase text-sm tracking-wider">
                - 01
              </span>
              <h3 className="text-5xl font-bold text-white uppercase mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  About Us
                </span>
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                KC TRANSPORT leverages cutting-edge technology and decades of
                expertise to revolutionize logistics across India. As fleet
                owners and commission agents, we provide transparent, efficient,
                and cost-effective transport solutions with real-time tracking
                and AI-powered optimization.
              </p>
              <p className="text-yellow-400 font-semibold text-2xl uppercase mb-10 animate-pulse">
                We Make Cargo Transport Effortless!
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, text: "Safe Transport" },
                  { icon: Clock, text: "On Time Delivery" },
                  { icon: Users, text: "Direct Handling" },
                  { icon: Zap, text: "Smart Logistics" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    <feature.icon className="w-6 h-6 text-red-400 group-hover:animate-pulse" />
                    <span className="font-semibold text-white">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative transform-gpu animate-slide-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-gradient-x"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src="/truck2.jpg"
                    alt="KC Transport Fleet"
                    className="w-full h-80 object-cover rounded-xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h4 className="text-2xl font-bold mb-2">Modern Fleet</h4>
                    <p className="text-white/80">GPS-enabled smart vehicles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 transform-gpu animate-slide-up">
            <span className="text-yellow-400 font-bold uppercase text-sm tracking-wider">
              - 02
            </span>
            <h3 className="text-5xl font-bold text-white uppercase mb-8">
              <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="group bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-xl shadow-xl group-hover:shadow-yellow-500/50 transform group-hover:rotate-12 transition-all duration-300">
                    <Truck className="w-10 h-10 text-black" />
                  </div>
                  <h4 className="text-3xl font-bold text-white uppercase">
                    Road Freight
                  </h4>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  AI-optimized daily transport services across Punjab, Haryana,
                  Chandigarh, Delhi, UP, Uttaranchal, Bihar, Kolkata, Assam,
                  Gujarat, and all over India. Smart routing with real-time
                  tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-xl shadow-xl group-hover:shadow-red-500/50 transform group-hover:rotate-12 transition-all duration-300">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-white uppercase">
                    Smart Fleet
                  </h4>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  Advanced fleet management with IoT sensors, GPS tracking, and
                  predictive maintenance. Direct handling ensures quality and
                  competitive pricing.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient-x"></div>
            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h4 className="text-3xl font-bold text-white uppercase mb-8 text-center">
                Service Coverage Network
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-6 rounded-xl text-center uppercase transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="group-hover:animate-pulse">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 transform-gpu animate-slide-up">
            <span className="text-red-400 font-bold uppercase text-sm tracking-wider">
              - 03
            </span>
            <h3 className="text-5xl font-bold text-white uppercase mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Connect with Ankit for instant quotes and premium transport
              solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8 transform-gpu animate-slide-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                  <h4 className="text-2xl font-bold text-white uppercase mb-4">
                    Contact Person
                  </h4>
                  <p className="text-4xl font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                    Ankit
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-red-400 group-hover:animate-bounce" />
                    <div>
                      <p className="font-semibold text-white mb-2">
                        Phone Numbers
                      </p>
                      <div className="space-y-2">
                        <Button
                          variant="link"
                          className="text-xl font-bold text-yellow-400 p-0 h-auto hover:text-yellow-300 transition-colors duration-300"
                          onClick={() => handleCallNow("7006069502")}
                        >
                          7006069502
                        </Button>
                        <br />
                        <Button
                          variant="link"
                          className="text-xl font-bold text-yellow-400 p-0 h-auto hover:text-yellow-300 transition-colors duration-300"
                          onClick={() => handleCallNow("8082176534")}
                        >
                          8082176534
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-red-400 group-hover:animate-bounce" />
                    <div>
                      <p className="font-semibold text-white mb-2">Email</p>
                      <div className="space-y-2">
                        <Button
                          variant="link"
                          className="text-lg font-bold text-yellow-400 p-0 h-auto hover:text-yellow-300 transition-colors duration-300"
                          onClick={handleEmail}
                        >
                          kctransport786@gmail.com
                        </Button>
                        <br />
                        <Button
                          variant="link"
                          className="text-lg font-bold text-yellow-400 p-0 h-auto hover:text-yellow-300 transition-colors duration-300"
                          onClick={handleEmail}
                        >
                          ankitchadgal290@gmail.com
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 transform-gpu animate-slide-right">
              <div className="group bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-red-400 mt-1 group-hover:animate-bounce" />
                  <div>
                    <p className="font-semibold text-white mb-3 text-xl">
                      Head Office
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      Canal Road, Ward No. 8, Rajive Colony,
                      <br />
                      Bari Brahmana, Samba, Jammu – 181133
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-red-400 mt-1 group-hover:animate-bounce" />
                  <div>
                    <p className="font-semibold text-white mb-3 text-xl">
                      Branch Office
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      NH-44, Nealki, Sarore Adda,
                      <br />
                      Bari Brahmana, Jammu – 181133
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={() => handleCallNow("7006069502")}
                  size="lg"
                  className="group bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold uppercase text-xl px-12 py-8 rounded-xl shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                >
                  <span className="group-hover:animate-pulse">
                    GET FREE QUOTE NOW
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 z-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <h4 className="text-4xl font-bold uppercase mb-4 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                KC TRANSPORT
              </h4>
              <p className="text-yellow-400 font-semibold uppercase mb-4 text-lg">
                Transport Contractor & Commission Agents
              </p>
              <p className="text-white/70 mb-6 text-lg">
                Revolutionary cargo transport services across India | Safe,
                Smart & On Time
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <span className="hover:text-white transition-colors duration-300">
                Contact: Ankit
              </span>
              <span className="hover:text-yellow-400 transition-colors duration-300">
                7006069502 | 8082176534
              </span>
              <span className="hover:text-red-400 transition-colors duration-300">
                kctransport786@gmail.com
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
