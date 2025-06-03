import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { User, GraduationCap } from "lucide-react"

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="z-10 w-full max-w-4xl mx-auto mt-16">
                <Card className="bg-black/10 backdrop-blur-sm border border-emerald-800">
                    <CardHeader className="text-emerald-500 text-2xl font-bold">
                        <div className="flex justify-center space-x-3">
                            <User className="w-7 h-7" />
                            <span>About Me</span>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 text-gray-200">
                        <p>
                            Hi there! I'm Abdullah — a computer and tech junkie through and through. I've been using computers for as long as I can remember. I built my first website back in 5th grade with my dad’s help — hard to believe that was over a decade ago. Even back then, I knew this was something I could see myself doing for the rest of my life. I’ve also always been big on gaming, so my connection with computers runs deep.
                        </p>
                        <p>
                            These days, I love working on backend systems.  Lately, I’ve been diving into build automation, CI/CD pipelines, and network security. Cybersecurity and hacking have always been core interests of mine. I even took a CISSP mock course at KICS-UET, where I explored offensive security and the fundamentals of ethical hacking.
                        </p>
                        <p>
                            Over the past few years, I’ve gone all-in on the Linux ecosystem — so much so that I’ve made it my daily driver. I’ve fully configured my system to suit my workflow. Right now, I’m running Arch Linux, using Neovim as my IDE (yep, I’m writing this in nvim), and handling software updates with Ansible for projects I’ve built from source.
                        </p>
                        <p>
                            As for frontend work? You can judge it yourself from this website :) I’ve listed my tech stack on the Skills page if you’re curious.
                        </p>
                        <p>
                            Currently, I’m a sophomore at FAST NUCES, and I love working with different technologies. I’ve become a bit of a Linux purist, constantly tweaking my setup to the nth degree — and honestly, I wouldn’t have it any other way.
                        </p>
                        <div className="pt-4">
                            <div className="flex text-emerald-500 space-x-3">
                                <GraduationCap />
                                <h3 className=" text-xl font-semibold mb-2">Education</h3>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-white/10 p-3 rounded-md">
                                    <h4 className="font-semibold">Bachelor of Computer Science</h4>
                                    <p className="text-sm text-muted-foreground">FAST NUCES, 2023-Present</p>
                                </div>
                                <div className="bg-white/10 p-3 rounded-md">
                                    <h4 className="font-semibold">High School Secondary Certificate, Engineering</h4>
                                    <p className="text-sm text-muted-foreground">Crecent Model High School, 2020-2022</p>
                                    <p className="text-xs text-muted-foreground">Grade: A*</p>
                                </div>

                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
