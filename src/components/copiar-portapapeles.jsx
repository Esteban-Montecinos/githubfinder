"use client";
import { IconCopy } from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function CopiarPortapapeles() {
  async function handleClick() {
    const image = await toast.promise(fetch(`${location.pathname}/opengraph-image`).then(
      (res) => res.blob()
    ),
    {
      pending: 'Copiando imagen 🤔',
      success: 'Imagen copiada 🤩',
      error: 'Error al copiar imagen 🤯'
    })
    await navigator.clipboard.write([
      new ClipboardItem({ [image.type]: image }),
    ]);
    
  }
  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        aria-label="Copiar imagen"
        title="Copiar imagen"
        className="inline-flex items-center p-2 text-sm text-white transition-colors border rounded-full group border-zinc-700 bg-zinc-900 hover:bg-zinc-800"
      >
      <IconCopy className="mr-0 md:mr-2" />
        <span className="hidden md:inline-block">Copiar imagen</span>
      </button>
      <ToastContainer/>
    </>
  );
}
