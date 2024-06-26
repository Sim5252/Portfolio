/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ybfHtr9kLcf
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">John Doe</h1>
              <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400 sm:text-2xl">Software Engineer</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Passionate about building innovative software solutions that solve complex problems. Experienced in
                full-stack development, with a focus on modern web technologies.
              </p>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Projects
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="John Doe"
                className="rounded-full w-[300px] h-[300px] object-cover"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="projects">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of the projects I've worked on. Click on the images to learn more.
            </p>
          </div>
          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <Link
              className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 rounded-xl dark:focus-visible:ring-gray-300"
              href="#"
            >
              <img
                alt="Project 1"
                className="object-cover aspect-[3/2] rounded-xl"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-semibold text-gray-50">Project 1</h3>
                <p className="text-sm text-gray-300 line-clamp-2">
                  A web application that helps users manage their tasks and projects.
                </p>
              </div>
            </Link>
            <Link
              className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 rounded-xl dark:focus-visible:ring-gray-300"
              href="#"
            >
              <img
                alt="Project 2"
                className="object-cover aspect-[3/2] rounded-xl"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-semibold text-gray-50">Project 2</h3>
                <p className="text-sm text-gray-300 line-clamp-2">
                  A mobile app that helps users track their fitness goals and progress.
                </p>
              </div>
            </Link>
            <Link
              className="relative overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 rounded-xl dark:focus-visible:ring-gray-300"
              href="#"
            >
              <img
                alt="Project 3"
                className="object-cover aspect-[3/2] rounded-xl"
                height="400"
                src="/placeholder.svg"
                width="600"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-semibold text-gray-50">Project 3</h3>
                <p className="text-sm text-gray-300 line-clamp-2">
                  A web-based dashboard that provides real-time analytics and insights.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of the technologies and tools I'm proficient in.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <RedoDotIcon className="w-10 h-10" />
              <div className="mt-2 text-sm font-medium">React</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <LeafIcon className="w-10 h-10" />
              <div className="mt-2 text-sm font-medium">Node.js</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <TypeIcon className="w-10 h-10" />
              <div className="mt-2 text-sm font-medium">TypeScript</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <WindIcon className="w-10 h-10" />
              <div className="mt-2 text-sm font-medium">Tailwind CSS</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <GitGraphIcon className="w-10 h-10" />
              <div className="mt-2 text-sm font-medium">Git</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <ForwardIcon className="w-10 h-10" />
              <div className="mt-2 text-sm font-medium">Next.js</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <PianoIcon className="w-10 h-10" />
              <div className="mt-2 text-sm font-medium">Prisma</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <DatabaseIcon className="w-10 h-10" />
              <div className="mt-2 text-sm font-medium">PostgreSQL</div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="contact">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon
              as possible.
            </p>
          </div>
          <div className="max-w-md mx-auto mt-8">
            <form className="space-y-4">
              <Input className="w-full" placeholder="Name" required type="text" />
              <Input className="w-full" placeholder="Email" required type="email" />
              <Textarea className="w-full" placeholder="Message" required rows={5} />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-50 py-6 w-full shrink-0">
        <div className="container px-4 md:px-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-sm">© 2024 John Doe. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Terms
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              GitHub
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              LinkedIn
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function ForwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 17 20 12 15 7" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </svg>
  )
}


function GitGraphIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function PianoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" />
      <path d="M2 14h20" />
      <path d="M6 14v4" />
      <path d="M10 14v4" />
      <path d="M14 14v4" />
      <path d="M18 14v4" />
    </svg>
  )
}


function RedoDotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="17" r="1" />
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  )
}


function TypeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function WindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}
