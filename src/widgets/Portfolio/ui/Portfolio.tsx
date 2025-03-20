import { cn } from "@/shared/lib/cn";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/shared/ui/resizable";
import { FC } from "react";

interface PortfolioProps {
  className?: string;
}

export const Portfolio: FC<PortfolioProps> = ({ className }) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className={cn(className, "rounded-lg mx-auto border my-30")}
    >
      <ResizablePanel defaultSize={22}>
        <div className="flex flex-wrap">
          <iframe
            width="280"
            height="500"
            src="https://www.youtube.com/embed/kYbqB5HKU7w"
            title="Чувствуете ритм? #адельвейгель #veigel #литвин #fashion #рекомендации #newmusic #люблювас"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="m-4 mx-auto"
          />
          <iframe
            width="280"
            height="500"
            src="https://www.youtube.com/embed/kYbqB5HKU7w"
            title="Чувствуете ритм? #адельвейгель #veigel #литвин #fashion #рекомендации #newmusic #люблювас"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="m-4 mx-auto"
          />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={78}>
        <div className="flex flex-wrap">
          <iframe
            width="500"
            height="340"
            src="https://www.youtube.com/embed/dwHsifzccFg"
            title="🧩  Facebook va Telegram integratsiyasi dasturchilarsiz 5 daqiqada amalga oshirish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="mx-auto m-4"
          ></iframe>
          <iframe
            width="500"
            height="340"
            src="https://www.youtube.com/embed/dwHsifzccFg"
            title="🧩  Facebook va Telegram integratsiyasi dasturchilarsiz 5 daqiqada amalga oshirish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="mx-auto m-4"
          ></iframe>
          <iframe
            width="500"
            height="340"
            src="https://www.youtube.com/embed/dwHsifzccFg"
            title="🧩  Facebook va Telegram integratsiyasi dasturchilarsiz 5 daqiqada amalga oshirish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="mx-auto m-4"
          ></iframe>
          <iframe
            width="500"
            height="340"
            src="https://www.youtube.com/embed/dwHsifzccFg"
            title="🧩  Facebook va Telegram integratsiyasi dasturchilarsiz 5 daqiqada amalga oshirish"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="mx-auto m-4"
          ></iframe>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
