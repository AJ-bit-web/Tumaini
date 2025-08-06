import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  description: string;
}

const Placeholder = ({ title, description }: PlaceholderProps) => {
  return (
    <Layout>
      <section className="py-20 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader className="space-y-6">
              <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <Construction className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">{title}</CardTitle>
              <CardDescription className="text-lg">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                This page is currently under development. Please check back soon for more content, or feel free to continue prompting to help build this page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button variant="outline">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Placeholder;
