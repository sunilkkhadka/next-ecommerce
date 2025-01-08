"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImage = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[currentImage]}
        alt="Some Product Here"
        height={1000}
        width={1000}
        className="h-[350px] object-cover object-center"
      />
      <div className="flex gap-1">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrentImage(index)}
            className="cursor"
          >
            <Image
              src={image}
              alt={image}
              height={100}
              width={100}
              className={cn(
                "border mr-2 cursor-pointer p-1 hover:border-orange-600",
                currentImage === index && "border-orange-500"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
