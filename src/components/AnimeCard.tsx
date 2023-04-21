import React from "react";
import Link from "next/link";

type AnimeProps = {
  title: string;
  src: string;
  additional: string;
};

function AnimeCard({ title, src, additional }: AnimeProps) {
  return (
    <Link href={`/${title}`}>
      <div className="card card-compact w-[180px] lg:w-[200px] bg-base-300 shadow-xl">
        <figure className="h-[250px]">
          <img src={src} alt="Shoes" width="100%" height="100%" />
        </figure>
        <div className="card-body">
          <p className="font-bold">
            {title.length > 35 ? title.slice(0, 35) + "..." : title}
          </p>
          <p className="text-accent">{additional}</p>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;