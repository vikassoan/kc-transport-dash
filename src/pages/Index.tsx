
import { Truck, Phone, Mail, MapPin, Star, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const handleCallNow = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleEmail = () => {
    window.open('mailto:kctransport786@gmail.com', '_self');
  };

  const services = [
    "Punjab", "Haryana", "Chandigarh", "Delhi", "UP", "Uttaranchal", 
    "Bihar", "Kolkata", "Assam", "Gujarat", "All Over India"
  ];

  return (
    <div className="min-h-screen font-oswald">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-red-600 uppercase tracking-wider">
                  KC TRANSPORT
                </h1>
                <p className="text-blue-900 font-semibold uppercase text-sm tracking-wide">
                  Transport Contractor & Commission Agents
                </p>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button 
                onClick={() => handleCallNow('7006069502')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold uppercase"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                onClick={handleEmail}
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[url(/truck1.jpg)] bg-cover bg-bottom"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-blue-900">
            <h2 className="text-5xl md:text-7xl font-bold uppercase mb-6 leading-tight">
              SAFE & ON TIME
              <span className="block text-red-600">CARGO TRANSPORT</span>
              <span className="block text-yellow-500">SERVICES</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Daily cargo transport services across major states in India. 
              Direct handling by fleet owners with full truck and part-load options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleCallNow('7006069502')}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold uppercase text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                7006069502
              </Button>
              <Button 
                onClick={() => handleCallNow('8082176534')}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                8082176534
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-red-600 font-bold uppercase text-sm tracking-wider">- 01</span>
              <h3 className="text-4xl font-bold text-blue-900 uppercase mb-6">About Us</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                KC TRANSPORT has been providing reliable logistics solutions across India. 
                As fleet owners and commission agents, we ensure your cargo reaches its destination 
                safely and on time. Our direct handling approach eliminates middlemen, 
                providing you with cost-effective and efficient transport services.
              </p>
              <p className="text-blue-900 font-semibold text-xl uppercase mb-8">
                We Make Cargo Transport Easy!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-red-600" />
                  <span className="font-semibold">Safe Transport</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-red-600" />
                  <span className="font-semibold">On Time Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-red-600" />
                  <span className="font-semibold">Direct Handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-red-600" />
                  <span className="font-semibold">Trusted Service</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img 
                src="/truck2.jpg" 
                alt="KC Transport Fleet" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-bold uppercase text-sm tracking-wider">- 02</span>
            <h3 className="text-4xl font-bold text-white uppercase mb-6">Our Services</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 border-none">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <Truck className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-2xl font-bold text-white uppercase">Road Freight</h4>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Daily transport services across Punjab, Haryana, Chandigarh, Delhi, UP, Uttaranchal, 
                  Bihar, Kolkata, Assam, Gujarat, and all over India. Full truck and part-load options available.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white uppercase">Fleet Management</h4>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  As fleet owners, we provide direct handling of your cargo with our own vehicles. 
                  No middlemen, competitive rates, and guaranteed service quality.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 rounded-lg p-8">
            <h4 className="text-2xl font-bold text-white uppercase mb-6 text-center">Service Coverage Areas</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg text-center uppercase">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-bold uppercase text-sm tracking-wider">- 03</span>
            <h3 className="text-4xl font-bold text-blue-900 uppercase mb-6">Contact Us</h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Ready to transport your cargo? Contact Ankit for immediate service and competitive rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-blue-900 uppercase mb-4">Contact Person</h4>
                <p className="text-2xl font-bold text-red-600">Ankit</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <Phone className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-blue-900">Phone Numbers</p>
                    <div className="space-y-1">
                      <Button 
                        variant="link" 
                        className="text-lg font-bold text-red-600 p-0 h-auto"
                        onClick={() => handleCallNow('7006069502')}
                      >
                        7006069502
                      </Button>
                      <br />
                      <Button 
                        variant="link" 
                        className="text-lg font-bold text-red-600 p-0 h-auto"
                        onClick={() => handleCallNow('8082176534')}
                      >
                        8082176534
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
                  <Mail className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-blue-900">Email</p>
                    <Button 
                      variant="link" 
                      className="text-lg font-bold text-red-600 p-0 h-auto"
                      onClick={handleEmail}
                    >
                      kctransport786@gmail.com
                    </Button>
                    <br />
                    <Button 
                      variant="link" 
                      className="text-lg font-bold text-red-600 p-0 h-auto"
                      onClick={handleEmail}
                    >
                      ankitchadgal290@gmail.com
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900 mb-2">Head Office</p>
                    <p className="text-gray-700">
                      Canal Road, Ward No. 8, Rajive Colony,<br />
                      Bari Brahmana, Samba, Jammu – 181133
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-900 mb-2">Branch Office</p>
                    <p className="text-gray-700">
                      NH-44, Nealki, Sarore Adda,<br />
                      Bari Brahmana, Jammu – 181133
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => handleCallNow('7006069502')}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xl px-12 py-6"
                >
                  GET FREE QUOTE NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="text-2xl font-bold uppercase mb-4">KC TRANSPORT</h4>
            <p className="text-yellow-400 font-semibold uppercase mb-4">
              Transport Contractor & Commission Agents
            </p>
            <p className="text-gray-300 mb-4">
              Daily cargo transport services across India | Safe & On Time Delivery
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <span>Contact: Ankit</span>
              <span>7006069502 | 8082176534</span>
              <span>kctransport786@gmail.com | ankitchadgal290@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
