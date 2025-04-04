import { cn } from "@/shared/lib/cn";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Text } from "@/shared/ui/Text";
import React from "react";

interface PriceCardProps {
  className?: string;
  tarifName: string | string[] |string[][];
  contents: string | string[] | string[][];
  price: { from: number; to: number };
}

export const PriceCard: React.FC<PriceCardProps> = (props) => {
  const { className, tarifName, contents, price } = props;

  // If tarifName is an array, join it into a single string
  const tarifNameDisplay = Array.isArray(tarifName)
    ? tarifName.join(", ")
    : tarifName;

  // Normalize contents into a flat array
  const contentsArray = Array.isArray(contents)
    ? contents.flat() // Flatten nested arrays, if any
    : [contents]; // Wrap in an array if it's a single string

  return (
    <Card className={cn(className, "relative min-w-[300px]")}>
      <CardHeader>
        <Text variant="display-1">{tarifNameDisplay}</Text>
      </CardHeader>
      <CardContent className="mb-12">
        <ul className="text-gray-300">
          {contentsArray.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="absolute bottom-5">
        <Text variant="body-2" className="text-gray-300">
          Price:
          <span className="text-blue-400 font-bold px-1">
            ${price.from} - ${price.to}
          </span>
          for 1 minute video
        </Text>
      </CardFooter>
    </Card>
  );
};
