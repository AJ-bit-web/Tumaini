import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import {
  ArrowRight,
  Users,
  Globe,
  Heart,
  GraduationCap,
  Stethoscope,
  Droplets,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    { icon: Users, value: "125,000+", label: "Lives Impacted" },
    { icon: Globe, value: "47", label: "Counties" },
    { icon: Heart, value: "3,200+", label: "Volunteers" },
    { icon: TrendingUp, value: "96%", label: "Success Rate" },
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: "Education Initiative",
      description:
        "Providing quality education and literacy programs to underserved communities worldwide.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Access",
      description:
        "Delivering essential medical care and health education to remote and impoverished areas.",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Droplets,
      title: "Clean Water Project",
      description:
        "Building sustainable water systems and sanitation facilities for clean, safe drinking water.",
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description:
        "Empowering communities through skill training, microfinance, and entrepreneurship programs.",
      color: "bg-green-50 text-green-600",
    },
  ];

  const testimonials = [
    {
      name: "Grace Wanjiku",
      role: "Community Leader, Kiambu",
      content:
        "Tumaini Kenya transformed our village with their clean water project. Now every family in our community has access to safe drinking water.",
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Samuel Kimani",
      role: "Medical Volunteer",
      content:
        "Working with Tumaini Kenya has been incredibly rewarding. Their healthcare programs are reaching even the most remote areas of Kenya.",
      image: "/placeholder.svg",
    },
    {
      name: "Faith Akinyi",
      role: "Teacher, Kisumu",
      content:
        "The education initiative has opened doors for so many children in western Kenya. It's amazing to see their dreams come to life.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <Layout>
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Welcome to <span className="text-primary">Tumaini Kenya</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empowering Kenyan communities through education, healthcare, and
              sustainable development programs from Nairobi to Turkana, from
              Mombasa to Kisumu.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                className="text-base md:text-lg px-6 md:px-8"
                asChild
              >
                <Link to="/contact">
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3 md:space-y-4">
                <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Our Programs
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              We work across all 47 counties to create comprehensive and lasting
              change in Kenyan communities from rural villages to urban centers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mb-4`}
                  >
                    <program.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Stories of Impact
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Hear from the communities and volunteers who have experienced the
              transformative power of collective action.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl opacity-90 px-4">
              Every contribution, whether time or resources, creates ripples of
              positive change. Join our community of changemakers across Kenya
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-base md:text-lg px-6 md:px-8"
                asChild
              >
                <Link to="/get-involved">Start Volunteering</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-6 md:px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/contact">Make a Donation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
