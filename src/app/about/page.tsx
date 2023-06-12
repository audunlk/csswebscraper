import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-2 px-24
        max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:p-4 max-sm:mt-8
        ">
            <Link href="/">
                <AiOutlineClose className="
          absolute top-0 right-0 m-4
          text-xl text-gray-500 mb-4" />
            </Link>
            <h1 className="text-4xl font-bold text-center ">
                Welcome to ScanMyDesign.com
            </h1>
            <h4 className="text-xl mb-4 text-center ">
                Discover the Colors and Fonts of Any Website
            </h4>
            <div className='flex flex-col border-2 border-black rounded-lg p-8
             items-center justify-center gap-4 max-sm:flex-col max-sm:items-center max-sm:justify-center'
            >
                <p className="">
                    ScanMyDesign.com is your ultimate tool for uncovering the captivating colors and fonts used on any website. With just a few clicks, you can explore the visual elements that define the aesthetic appeal of your favorite sites, gain design inspiration, or conduct competitor analysis.
                </p>
                <p className=" ">
                    Our innovative scanning tool allows you to effortlessly enter the URL of any website and instantly retrieve a comprehensive list of the colors and fonts employed. Whether you're a web designer, developer, or simply curious about the visual choices made by others, ScanMyDesign.com provides valuable insights to enhance your creative process.</p>
                <p className=" ">
                    Discover the color palette feature, which showcases the primary and secondary colors utilized on the site. From vibrant hues to subtle tones, you can explore, compare, and draw inspiration from the color schemes that make websites visually stunning. Unleash your creativity by incorporating similar color combinations or use them as a starting point for your own design projects.</p>
                <p className=" ">
                    Delve into the font list provided by ScanMyDesign.com to unravel the typography choices that shape a website's personality. Discover the fonts that convey professionalism, playfulness, elegance, or uniqueness. Explore how different typefaces influence user experience and transform the overall impact of a website's content.</p>
                <p className=" ">
                    Stay ahead of the competition by leveraging the valuable insights from ScanMyDesign.com. Whether you're optimizing your own website's design, revamping a client's project, or simply indulging your curiosity, our tool empowers you with the knowledge of the colors and fonts that define successful web design.</p>
                <p className=" ">
                    Unlock the secrets behind captivating visuals and visit ScanMyDesign.com today. Discover the colors and fonts that bring websites to life and take your design skills to new heights.</p>
            </div>
        </main>
    );
}
