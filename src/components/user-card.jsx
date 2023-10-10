"use client";
import 'atropos/css'
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { dateFormat } from "@/lib/date-format";
import Atropos from "atropos/react";

export default function UserCard({
  name,
  avatar_url,
  html_url,
  login,
  created_at,
  bio,
  public_repos,
  followers,
  following,
}) {
  return (
    <Atropos activeOffset={40} shadowScale={1.05} rotateTouch className="w-full h-full rounded-md">
      <Card
        isBlurred
        className="w-full max-w-xl border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody className="p-2">
          <div className="flex flex-row items-center gap-6 px-2 py-2 md:px-4">
            <Image
              alt={name}
              className="object-cover md:w-36 md:h-36 w-28 h-28"
              shadow="md"
              radius="sm"
              src={avatar_url}
              data-atropos-offset="3"
            />

            <div className="flex flex-col gap-2">
              <h3  className="text-base font-medium md:text-xl text-foreground/90">
                {name}
              </h3>
              <a
              
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors md:text-sm text-foreground/80 hover:underline hover:text-zinc-100"
              >
                @{login}
              </a>
              <p  className="text-xs font-light md:text-sm">
                {dateFormat(created_at)}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-2 md:px-4">
            <p  className="text-sm text-foreground/80">{bio}</p>
            <div data-atropos-offset="3" className="flex flex-row items-center justify-around gap-4 px-2 py-2 rounded-md md:px-4 bg-zinc-950 ">
              <div className="flex flex-col items-center">
                <p className="text-sm font-light text-zinc-400">Repos</p>
                <p className="text-lg font-medium">{public_repos}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm font-light text-zinc-400">Seguidores</p>
                <p className="text-lg font-medium">{followers}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm font-light text-zinc-400">Seguidos</p>
                <p className="text-lg font-medium">{following}</p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Atropos>
  );
}
