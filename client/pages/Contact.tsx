import Layout from "@/components/layout/Layout";
import CompactCarousel from "@/components/CompactCarousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F0a2aa7b4e1f94a5bb81c7e0ed7362283?format=webp&width=800",
      alt: "Person making a phone call",
      title: "Get in Touch",
      description:
        "We're here to answer your questions and discuss opportunities",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F9ce153f7973741be9c50ceb4f620535a?format=webp&width=800",
      alt: "Community collaboration",
      title: "Partner With Us",
      description: "Explore partnership opportunities to expand our impact",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F3591f8e5a3b144feb158747b3b972210?format=webp&width=800",
      alt: "Community development work",
      title: "Visit Our Programs",
      description: "See our work in action across Kenyan communities",
    },
  ];

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <CompactCarousel images={contactImages} height="h-48 md:h-64" />
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to make a difference? Get in touch with our team to learn
              more about our work or discuss how you can get involved.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Our Office
                      </h3>
                      <p className="text-muted-foreground">
                        Tumaini House, Uhuru Highway
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">+254 700 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        info@tumainiken.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Office Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about how you'd like to get involved or any questions you have"
                      rows={6}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
