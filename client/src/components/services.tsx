import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Hammer, 
  PaintbrushVertical, 
  Home, 
  Cpu, 
  Video, 
  Key, 
  Sun,
  Check,
  ArrowRight,
  Leaf,
  TrendingUp,
  Wrench,
  Shield
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Building Construction",
      icon: Hammer,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Professional construction services from planning to completion. We deliver high-quality residential and commercial buildings using modern techniques and materials.",
      features: ["Residential Construction", "Commercial Buildings", "Project Management"],
      color: "text-covenant-blue bg-covenant-blue/10"
    },
    {
      title: "Interior Design",
      icon: PaintbrushVertical,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Transform your spaces with our expert interior design services. From concept to completion, we create beautiful and functional environments.",
      features: ["Space Planning", "Custom Furniture", "Lighting Design"],
      color: "text-purple-600 bg-purple-100"
    },
    {
      title: "Home Automation",
      icon: Home,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Make your home intelligent with our comprehensive automation solutions. Control lighting, climate, security, and entertainment from anywhere.",
      features: ["Smart Lighting", "Climate Control", "Voice Integration"],
      color: "text-blue-600 bg-blue-100"
    },
    {
      title: "Smart Home Technology",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Integrate cutting-edge IoT devices and smart systems to create a fully connected living experience with enhanced convenience and efficiency.",
      features: ["IoT Integration", "Smart Appliances", "Energy Management"],
      color: "text-green-600 bg-green-100"
    },
    {
      title: "CCTV Security Systems",
      icon: Video,
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Comprehensive surveillance solutions with HD cameras, remote monitoring, and intelligent analytics to protect your property 24/7.",
      features: ["HD Surveillance", "Remote Monitoring", "Motion Detection"],
      color: "text-red-600 bg-red-100"
    },
    {
      title: "Access Control & Barriers",
      icon: Key,
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      description: "Advanced access control systems with biometric readers, card access, and automated barriers to secure your premises effectively.",
      features: ["Biometric Systems", "Card Access", "Automated Barriers"],
      color: "text-orange-600 bg-orange-100"
    }
  ];

  const solarFeatures = [
    { icon: Leaf, text: "Eco-Friendly Energy", color: "text-green-500" },
    { icon: TrendingUp, text: "High Efficiency", color: "text-blue-500" },
    { icon: Wrench, text: "Professional Installation", color: "text-orange-500" },
    { icon: Shield, text: "25-Year Warranty", color: "text-red-500" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive technology solutions for modern construction, automation, and security needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              <div className="overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${service.color}`}>
                    <service.icon className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-black ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={scrollToContact}
                  className="text-covenant-blue font-semibold hover:text-covenant-light-blue transition-colors duration-200 flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solar Panel Section */}
        <div className="bg-gradient-to-r from-covenant-accent/10 to-yellow-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-covenant-accent/20 p-4 rounded-xl">
                  <Sun className="text-covenant-accent text-2xl" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-covenant-dark ml-4">
                  Solar Panels & Inverters
                </h3>
              </div>
              <p className="text-lg text-covenant-gray mb-6">
                Harness the power of the sun with our premium solar energy solutions. Reduce your electricity bills while contributing to a sustainable future.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {solarFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <feature.icon className={`mr-3 h-5 w-5 ${feature.color}`} />
                    <span className="text-covenant-gray">{feature.text}</span>
                  </div>
                ))}
              </div>
              <Button 
                onClick={scrollToContact}
                className="bg-covenant-accent text-white hover:bg-yellow-600"
              >
                Get Solar Quote
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Solar panels on modern house roof" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Large solar panel installation" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                alt="Solar inverter technology" 
                className="rounded-xl shadow-lg w-full h-48 object-cover sm:col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
