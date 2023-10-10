"use client";
import { IconLink } from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function CopiarURL() {
  async function handleClick() {
       
    await toast.promise(navigator.clipboard.writeText(location.href),
    {
      pending: 'Copiando URL 🤔',
      success: 'URL copiada 🤩',
      error: 'Error al copiar URL 🤯'
    });
    
  }
  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        aria-label="Copiar URL"
        title="Copiar URL"
        className="inline-flex items-center p-2 text-sm text-white transition-colors border rounded-full border-zinc-700 bg-zinc-900 hover:bg-zinc-800"
      >
        <IconLink className="mr-0 md:mr-2"/>
        <span className="hidden md:inline-block">Copiar URL</span>
      </button>
      <ToastContainer/>
    </>
  );
}
