import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube 
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry! We will contact you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: ["St. Martin Junction", "Cherthala, Kerala"],
      color: "bg-covenant-blue/10 text-covenant-blue"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: ["+91 9496054274", "Primary Contact"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      content: ["info@covenanttech.com", "sales@covenanttech.com"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Emergency Calls Only"],
      color: "bg-covenant-accent/20 text-covenant-accent"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: Twitter, href: "#", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: Linkedin, href: "#", color: "bg-blue-700 hover:bg-blue-800" },
    { icon: Youtube, href: "#", color: "bg-red-600 hover:bg-red-700" }
  ];

  const services = [
    "Building Construction",
    "Interior Design",
    "Home Automation",
    "Smart Home Technology",
    "CCTV Security Systems",
    "Access Control & Barriers",
    "Solar Panels & Inverters"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to start your next project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className={`p-3 rounded-lg ${info.color}`}>
                    <info.icon className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-black mb-1">{info.title}</h4>
                    <div className="text-gray-700">
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="font-semibold text-covenant-dark mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-white p-3 rounded-lg transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-black mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-black font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-black font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-black font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-black font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-black font-medium">
                    Service Interest
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-black font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-covenant-blue text-white hover:bg-blue-700 py-6 text-lg"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
