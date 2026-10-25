import type { Metadata } from "next";
/* Import metadata from next library - needs for SEO elements of page (title and description) */
import { Nunito } from "next/font/google";
/* Import font */
import "./global.css";
/* Import style file */

// Initialize the font
const nunito = Nunito({
    subsets: ["latin", "cyrillic"],  // Use english and russian letters on page
});

// Initialize the Metadata - in variable special font object
export const metadata: Metadata = {
    title: "Physics",              // Title of page - in browser tab
    description: "Learn physics",  // Description of page - appear when user sen the link
};

// Required function for Next
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${nunito.className} bg-gray-50 text-gray-900 antialiased min-h-screen`}>
                <div className="max-w-4xl mx-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}