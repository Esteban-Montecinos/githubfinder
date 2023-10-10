import {Input} from "@nextui-org/input";
import { SearchIcon } from "./search-svg"

export default function InputSearch() {
  return (
    <Input
        label="Busca un perfil de GitHub"
        isClearable
        autoFocus
        radius="lg"
        name="user"
        variant="bordered"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
        }}
        placeholder="octocat"
        startContent={
          <SearchIcon className="flex-shrink-0 pointer-events-none text-zinc-400" />
        }
      />
  )
}