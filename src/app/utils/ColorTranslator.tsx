import chroma from 'chroma-js';


export default function ColorTranslator(rgb: string): string {
    if(rgb.includes("rgb")
    ){

     return chroma(rgb).hex('rgb')
    }
    return rgb
  }