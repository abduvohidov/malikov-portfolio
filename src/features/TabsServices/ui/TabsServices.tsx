'use client';
import { cn } from "@/shared/lib/cn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FC, ReactNode } from "react";

interface TabsServiceProps {
  className?: string;
  shortVideosContent?: ReactNode;
  longVideosContent?: ReactNode;
}

export const TabsServices: FC<TabsServiceProps> = (props) => {
  const { className, shortVideosContent, longVideosContent } = props;
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("tab") || "short-videos";

  const handleTabChange = (tab: string) => {
    router.push(`/services?tab=${tab}`, { scroll: false });
  };

  return (
    <Tabs
      defaultValue={activeTab}
      onValueChange={handleTabChange}
      className={cn("md:mt-12 mt-4", className)}
    >
      <TabsList className="lg:me-0 mx-auto lg:min-w-[320px]">
        <TabsTrigger value="short-videos" className="cursor-pointer text-md">
          Short Videos
        </TabsTrigger>
        <TabsTrigger value="long-videos" className="cursor-pointer p-3 text-md">
          Long Videos
        </TabsTrigger>
      </TabsList>
      <TabsContent value="short-videos">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-4">
          {shortVideosContent}
        </div>
      </TabsContent>
      <TabsContent value="long-videos">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-4">
          {longVideosContent}
        </div>
      </TabsContent>
    </Tabs>
  );
};
