import { getUser } from "@/service/api-github";
import { redirect } from "next/navigation";

import CopiarPortapapeles from "@/components/copiar-portapapeles";
import CopiarURL from "@/components/copiar-url";
import UserCard from "@/components/user-card";
export async function generateMetadata({ params: { user } }) {
  const {name, bio} = await getUser(user);
  return {
    title: "GitHub Finder | "+ name,
    description: bio
  };
}
export default async function page({ params: { user } }) {
  const {
    name,
    avatar_url,
    html_url,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    message,
  } = await getUser(user);
  if (!name || message === "Not Found") {
    redirect("/");
  }
  return (
    <>
      <UserCard
        name={name}
        avatar_url={avatar_url}
        html_url={html_url}
        login={login}
        created_at={created_at}
        bio={bio}
        public_repos={public_repos}
        followers={followers}
        following={following}
      />
      <footer className="flex flex-row justify-end w-full gap-2">
        <CopiarPortapapeles />
        <CopiarURL />
      </footer>
    </>
  );
}
