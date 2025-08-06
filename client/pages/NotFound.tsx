import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page not found</h2>
          <p className="text-muted-foreground max-w-md">
            The page you're looking for doesn't exist. Let's get you back to helping make a difference.
          </p>
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go back home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
