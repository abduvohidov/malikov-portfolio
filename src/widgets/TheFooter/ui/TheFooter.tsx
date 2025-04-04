import { cn } from "@/shared/lib/cn";
import { Footer, FooterBottom } from "@/shared/ui/footer";
import { Text } from "@/shared/ui/Text";

interface FooterProps {
  copyright?: string;
  className?: string;
}

export default function TheFooter({
  copyright = "© malikovabduaziz. All rights reserved",
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="container mx-auto flex justify-center items-center">
        <Footer>
          <FooterBottom className="py-5">
            <Text variant="body-1">{copyright}</Text>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
