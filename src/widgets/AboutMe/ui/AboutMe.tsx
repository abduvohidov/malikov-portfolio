import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import { Text } from "@/shared/ui/Text";
import { ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
// import Photo from "@/app/assets/Photo.jpeg";
import { cn } from "@/shared/lib/cn";

interface AboutMeProps {
  className?: string;
}

export const AboutMe: FC<AboutMeProps> = ({ className }) => {
  return (
    <div className="flex lg:justify-center max-lg:flex-col items-center gap-10 sm:my-50">
      {/* <Image
        src={Photo}
        alt="photo"
        className="rounded-xl w-[300px] h-auto"
        objectFit="contain"
      /> */}
      <div
        className={cn(
          className,
          "xl:w-[35%] lg:w-[50%] sm:w-[70%] max-sm:px-10"
        )}
      >
        <div className="space-y-1">
          <Text variant="display-4">Malikov Abduaziz</Text>
          <Text variant="body-2" className="text-gray-400">
            Hi! I am a video editor, turning ordinary footage into exciting
            stories. My main goal is to create high-quality and dynamic video
            content that attracts the attention of viewers.
          </Text>
        </div>
        <Link
          href={"https://t.me/malikovabduaziz"}
          className="block sm:hidden mt-4"
        >
          <Button className="w-full text-blue-400 hover:bg-blue-400 hover:text-white">
            <MessageCircle />
            Chat with me
          </Button>
        </Link>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <Link
            href={"https://t.me/malikovabduaziz"}
            className="hidden sm:block"
          >
            <Button className="w-full text-blue-400 hover:bg-blue-400 hover:text-white">
              <MessageCircle />
              Chat with me
            </Button>
          </Link>
          <Separator orientation="vertical" className="hidden sm:block" />
          <Link href={"https://www.youtube.com/@mlkvazka1"} target="_blank">
            <Text variant="body-1" className="text-gray-400 hover:text-white">
              Youtube
            </Text>
          </Link>
          <Separator orientation="vertical" />
          <Link href={"https://www.instagram.com/mlkvazka"} target="_blank">
            <Text variant="body-1" className="text-gray-400 hover:text-white">
              Instagram
            </Text>
          </Link>
          <Separator orientation="vertical" />
          <Link href={"https://t.me/azkaedits"} target="_blank">
            <Text variant="body-1" className="text-gray-400 hover:text-white">
              Telegram
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
};
