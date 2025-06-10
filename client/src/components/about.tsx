import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Medal, Lightbulb, Handshake, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Medal,
      title: "Excellence in Quality",
      description: "We maintain the highest standards in every project, ensuring superior quality and long-lasting results.",
      color: "text-covenant-blue"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "We stay ahead of technology trends to offer the most advanced solutions for modern living and working.",
      color: "text-covenant-accent"
    },
    {
      icon: Handshake,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We work closely with clients to understand and exceed their expectations.",
      color: "text-green-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-covenant-dark mb-6">
              About Covenant Advanced Technologies
            </h2>
            <p className="text-lg text-covenant-gray mb-6">
              With over 20 years of experience in the construction and technology industry, we are committed to delivering innovative solutions that exceed expectations. Our team of certified professionals combines traditional craftsmanship with cutting-edge technology to create spaces that are both beautiful and intelligent.
            </p>
            
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <value.icon className={`${value.color} text-xl mt-1 mr-4`} />
                  <div>
                    <h4 className="font-semibold text-covenant-dark">{value.title}</h4>
                    <p className="text-covenant-gray">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-covenant-blue text-white hover:bg-blue-700"
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional construction team" 
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Certification Badge */}
            <Card className="absolute -bottom-6 -left-6 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Award className="text-covenant-accent text-2xl mr-3" />
                  <div>
                    <div className="font-bold text-covenant-dark">ISO Certified</div>
                    <div className="text-sm text-covenant-gray">Quality Management</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
