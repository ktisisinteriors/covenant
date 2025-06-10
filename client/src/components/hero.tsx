import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const stats = [
    { icon: Building, value: "10+", label: "Projects Completed", color: "text-covenant-blue bg-covenant-blue/10" },
    { icon: Users, value: "50+", label: "Happy Clients", color: "text-green-600 bg-green-100" },
    { icon: Award, value: "20+", label: "Years Experience", color: "text-covenant-accent bg-covenant-accent/10" },
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-covenant-blue/90 to-blue-600/80 z-10"></div>
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Building Tomorrow's Infrastructure Today
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            From intelligent construction solutions to cutting-edge home automation, we deliver comprehensive technology services that transform how you live and work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-white text-covenant-blue hover:bg-gray-50 font-semibold"
            >
              Explore Our Services
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-covenant-blue font-semibold"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <div className="text-2xl font-bold text-covenant-dark">{stat.value}</div>
                    <div className="text-covenant-gray text-sm">{stat.label}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
