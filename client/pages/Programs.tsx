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
import {
  GraduationCap,
  Stethoscope,
  Droplets,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F6953ad12d5fb4b43a46f2a83efa5d3be?format=webp&width=800",
      alt: "Education program - adult teaching child",
      title: "Education Initiative",
      description: "Quality education and literacy programs for all ages",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2Fede431fe86e84046ad7ddea529755a44?format=webp&width=800",
      alt: "Healthcare program - medical professional taking blood pressure",
      title: "Healthcare Access",
      description: "Essential medical care and health education programs",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2Fa30f6b87714541379131a82be3d34fcf?format=webp&width=800",
      alt: "Clean water program - hands cupping fresh water",
      title: "Clean Water Project",
      description: "Safe, clean water access for every community",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2Fdd2024416704448a9d48b4c7544914ae?format=webp&width=800",
      alt: "Economic development - community volunteers distributing aid",
      title: "Economic Development",
      description: "Skills training and entrepreneurship programs",
    },
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: "Education Initiative",
      description:
        "Comprehensive education programs including literacy training, scholarship programs, and school infrastructure development across rural and urban communities.",
      impact: "12,000+ students supported",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Access",
      description:
        "Mobile health clinics, maternal health programs, and health education initiatives bringing medical care to underserved areas.",
      impact: "25,000+ patients treated",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Droplets,
      title: "Clean Water Project",
      description:
        "Borehole drilling, water purification systems, and sanitation facilities ensuring clean water access for entire communities.",
      impact: "150+ water points built",
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description:
        "Microfinance programs, vocational training, and small business support to create sustainable income opportunities.",
      impact: "3,500+ businesses supported",
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <CompactCarousel images={programImages} height="h-48 md:h-64" />
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives designed to create sustainable change
              across all 47 counties of Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                  <div className="text-sm font-medium text-primary">
                    {program.impact}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Get Involved Today
            </h2>
            <p className="text-muted-foreground">
              Join us in making a lasting impact across Kenyan communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/get-involved">
                  Volunteer With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Support Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
