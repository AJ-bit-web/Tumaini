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
import { Heart, Users, HandHeart, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  const volunteerImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F9ce153f7973741be9c50ceb4f620535a?format=webp&width=800",
      alt: "Volunteers coming together in unity",
      title: "Join Our Community",
      description: "Become part of a movement that's transforming Kenya",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2Fdd2024416704448a9d48b4c7544914ae?format=webp&width=800",
      alt: "Volunteers distributing aid to community",
      title: "Make a Direct Impact",
      description: "Work directly with communities to create lasting change",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F6953ad12d5fb4b43a46f2a83efa5d3be?format=webp&width=800",
      alt: "Volunteer teaching and mentoring",
      title: "Share Your Skills",
      description: "Use your expertise to empower communities",
    },
  ];

  const ways = [
    {
      icon: Users,
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers working directly with communities across Kenya. From teaching to construction, we have opportunities for every skill set.",
      cta: "Become a Volunteer",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Heart,
      title: "Donate",
      description:
        "Your financial contribution helps fund our programs and reach more communities. Every donation, no matter the size, makes a real difference.",
      cta: "Make a Donation",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: HandHeart,
      title: "Sponsor",
      description:
        "Sponsor a child's education, a water project, or an entire community program. Create a lasting partnership that transforms lives.",
      cta: "Sponsor a Program",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Megaphone,
      title: "Advocate",
      description:
        "Help spread awareness about our work and the needs of Kenyan communities. Share our mission with your network and social media.",
      cta: "Share Our Story",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <Layout>
      <div className="py-8 md:py-12">
        <CompactCarousel images={volunteerImages} height="h-48 md:h-64" />
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Get <span className="text-primary">Involved</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community of changemakers and help transform lives across
              all 47 counties of Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {ways.map((way, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${way.color} flex items-center justify-center mb-4`}
                  >
                    <way.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{way.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {way.description}
                  </CardDescription>
                  <Button className="w-full" asChild>
                    <Link to="/contact">
                      {way.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Every action, big or small, creates ripples of positive change.
              Join thousands of others who are already making Kenya a better
              place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Link to="/contact">Start Your Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/programs">Learn About Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
