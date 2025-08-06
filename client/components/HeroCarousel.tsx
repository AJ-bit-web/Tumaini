import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = () => {
  const slides = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2Fa421c34fd3fe4b96ab828691ddf26a93?format=webp&width=800",
      title: "Unity in Action",
      description:
        "Communities coming together to create lasting change across Kenya",
      cta: "Join Our Mission",
      ctaLink: "/get-involved",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F7cb1167d30d34137809ee0c25430e5b1?format=webp&width=800",
      title: "Education for All",
      description:
        "Empowering the next generation through quality education programs",
      cta: "Support Education",
      ctaLink: "/programs",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2Fff7fcd50a079461fac6b241113a34015?format=webp&width=800",
      title: "Healthcare Access",
      description: "Bringing essential medical care to underserved communities",
      cta: "Learn More",
      ctaLink: "/programs",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F32e28a73721b4aafbefd28c82f5ddb46%2F8768d9de39dd42f9b15bedfa6e2f3b8e?format=webp&width=800",
      title: "Clean Water Initiative",
      description:
        "Providing safe, clean water to families across all 47 counties",
      cta: "Make Impact",
      ctaLink: "/contact",
    },
  ];

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 rounded-none">
                <CardContent className="relative p-0">
                  <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center">
                      <div className="container mx-auto px-4">
                        <div className="max-w-2xl text-white">
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            {slide.title}
                          </h2>
                          <p className="text-lg md:text-xl mb-6 opacity-90">
                            {slide.description}
                          </p>
                          <Button
                            size="lg"
                            className="text-base md:text-lg px-6 md:px-8 bg-primary hover:bg-primary/90"
                            asChild
                          >
                            <Link to={slide.ctaLink}>
                              {slide.cta}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white/60 hover:bg-white/90 transition-all duration-200"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
