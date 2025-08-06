import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({
  className,
  iconClassName,
  textClassName,
  showText = true,
  size = "md",
}: LogoProps) => {
  const sizeClasses = {
    sm: {
      container: "p-1.5",
      icon: "h-4 w-4",
      text: "text-sm",
    },
    md: {
      container: "p-2",
      icon: "h-6 w-6",
      text: "text-xl",
    },
    lg: {
      container: "p-3",
      icon: "h-8 w-8",
      text: "text-2xl",
    },
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div
        className={cn(
          "bg-primary rounded-full flex items-center justify-center",
          sizeClasses[size].container,
        )}
      >
        <Heart
          className={cn(
            "text-primary-foreground",
            sizeClasses[size].icon,
            iconClassName,
          )}
        />
      </div>
      {showText && (
        <span
          className={cn(
            "font-bold text-foreground",
            sizeClasses[size].text,
            textClassName,
          )}
        >
          Tumaini Kenya
        </span>
      )}
    </div>
  );
};

export default Logo;
