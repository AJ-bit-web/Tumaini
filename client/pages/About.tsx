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
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const aboutImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F6953ad12d5fb4b43a46f2a83efa5d3be?format=webp&width=800",
      alt: "Education in action - adult helping child with learning",
      title: "Our Mission",
      description: "Empowering communities through education and mentorship",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F292914d8f5904bf497a5db4663b40c3a?format=webp&width=800",
      alt: "Community outreach - volunteers distributing aid to families",
      title: "Our Impact",
      description: "Direct community outreach and support programs",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F9ce153f7973741be9c50ceb4f620535a?format=webp&width=800",
      alt: "Hands coming together in unity",
      title: "Our Vision",
      description:
        "Building stronger communities across all 47 counties of Kenya",
    },
  ];

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <CompactCarousel images={aboutImages} height="h-48 md:h-64" />
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                About <span className="text-primary">Tumaini Kenya</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Transforming communities across Kenya through sustainable
                development, education, and empowerment programs since our
                founding.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To empower Kenyan communities through comprehensive programs
                    in education, healthcare, clean water access, and economic
                    development, creating sustainable positive change across all
                    47 counties.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    A Kenya where every community has access to quality
                    education, healthcare, clean water, and economic
                    opportunities, fostering self-reliance and prosperity for
                    all.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Ready to Learn More?
              </h2>
              <p className="text-muted-foreground">
                Discover our programs and see how you can make a difference in
                Kenyan communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/programs">
                    View Our Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
