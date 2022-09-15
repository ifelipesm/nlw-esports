import { MagnifyingGlassPlus } from "phosphor-react";
import *  as Dialog from '@radix-ui/react-dialog';

export function AdBanner(){
  return(
  <div className="pt-1 bg-nlw-gradient self-stretch mt-8 overflow-hidden " >
  <div className="bg-[#2A2634] px-8 py-6 rounded-lg flex justify-between items-center">
    <div>
    <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
    <span className="text-zinc-400 block"> Anuncia aí e ache seu parceiro!</span>
    </div>
  <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
    <MagnifyingGlassPlus size={24}/>
    Anunciar Duo
  </Dialog.Trigger>
  </div>
</div>)
}