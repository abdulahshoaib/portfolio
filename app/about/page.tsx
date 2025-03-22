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
                            Hi there! I'm Abdullah, a computer and tech junkie. I have been using computers essentially as back as I can remember. I made my first website back in class 5, crazy that I think that this was about a decade ago, with the help of my father. Right then I knew this is the thing I can do for my entire life. Apart from that I have always been big on gaiming so the relation I've built with computers is a deep one.
                        </p>
                        <p>
                            I love to work on designing backends that work efficiently. I recently have been as working on build automation and deployment CI/CD, and network security. Hacking and cyber security has always been my key areas of interest. I did my CISSP mock course from KICS-UET. There I covered offensive security and aspects of ethical hacking. Over the past few years I have completely familiarized myself with the linux eco-system and even switched to it, using it as my daily driver. As for my frontend skills one could judge it off this website :) You can check out the techstack I'm fimiliar with on the skills page.
                        </p>
                        <p>
                            Currently, I'm a sophomore at FAST NUCES, and I enjoy working with technologies like Go, Node, React, Docker, and Kubernetes. I also have become sort of a linux junkie configuring everything of my setup to the nth degree. Currently I am using Arch, with neovim as my IDE (yes I am in nvim writing this) and using ansible to install software updates on new releases of softwares I've built from source.
                        </p>
                        <div className="pt-4">
                            <div className="flex text-emerald-500 space-x-3">
                                <GraduationCap />
                                <h3 className=" text-xl font-semibold mb-2">Education</h3>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-emerald-500/10 p-3 rounded-md">
                                    <h4 className="font-semibold">Bachelor of Computer Science</h4>
                                    <p className="text-sm text-muted-foreground">FAST NUCES, 2023-Present</p>
                                </div>
                                <div className="bg-emerald-500/10 p-3 rounded-md">
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
