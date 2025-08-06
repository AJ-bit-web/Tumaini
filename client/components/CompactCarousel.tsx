import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface CompactCarouselProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  height?: string;
}

const CompactCarousel = ({
  images,
  height = "h-64 md:h-80",
}: CompactCarouselProps) => {
  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 rounded-lg overflow-hidden">
                <CardContent className="relative p-0">
                  <div className={`relative ${height} overflow-hidden`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    {(image.title || image.description) && (
                      <div className="absolute inset-0 bg-black/30 flex items-end">
                        <div className="p-4 md:p-6 text-white w-full">
                          {image.title && (
                            <h3 className="text-lg md:text-xl font-semibold mb-2">
                              {image.title}
                            </h3>
                          )}
                          {image.description && (
                            <p className="text-sm md:text-base opacity-90">
                              {image.description}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-2 md:right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
      </Carousel>
    </div>
  );
};

export default CompactCarousel;
