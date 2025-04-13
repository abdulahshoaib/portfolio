import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-4 relative overflow-hidden">
            <div className="z-10 w-full max-w-4xl mx-auto mt-16">
                <h1 className="text-3xl text-center font-bold text-emerald-500 mb-8">Contact Me</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-black/10 backdrop-blur-sm border-emerald-800">
                        <CardHeader className="text-xl text-white font-semibold">Get In Touch</CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-black/10 backdrop-blur-sm p-2 rounded-full">
                                        <Mail className="h-5 w-5 text-green-500" />
                                    </div>
                                    <Link href="mailto:contact@hackabdullah.site" className="text-white hover:text-green-500 transition-colors">
                                        contact@hackabdullah.site
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-black/10 backdrop-blur-sm p-2 rounded-full">
                                        <Github className="h-5 w-5 text-green-500" />
                                    </div>
                                    <Link
                                        href="https://github.com/abdulahshoaib"
                                        target="_blank"
                                        className="text-white hover:text-green-500 transition-colors"
                                    >
                                        github.com/abdulahshoaib
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-black/10 backdrop-blur-sm p-2 rounded-full">
                                        <Linkedin className="h-5 w-5 text-green-500" />
                                    </div>
                                    <Link
                                        href="https://www.linkedin.com/in/abdullahshoaibkhan/"
                                        target="_blank"
                                        className="text-white hover:text-green-500 transition-colors"
                                    >
                                        linkedin.com/in/abdullahshoaibkhan
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-black/10 backdrop-blur-sm p-2 rounded-full">
                                        <Instagram className="h-5 w-5 text-green-500" />
                                    </div>
                                    <Link
                                        href="https://instagram.com/abdulahshoaib"
                                        target="_blank"
                                        className="text-white hover:text-green-500 transition-colors"
                                    >
                                        abdulahshoaib
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-black/10 backdrop-blur-sm border-emerald-800">
                        <CardHeader className="text-xl font-semibold text-white">Send a Message</CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">
                                        Name
                                    </label>
                                    <Input id="name" className="mt-2 bg-white/10 text-green-300 backdrop-blur-sm border-none" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">
                                        Email
                                    </label>
                                    <Input id="email" type="email" className=" mt-2 bg-white/10 text-green-300 backdrop-blur-sm border-none" placeholder="Your email" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-slate-300">
                                        Message
                                    </label>
                                    <Textarea id="message" className="mt-2 bg-white/10 text-green-300 backdrop-blur-sm border-none min-h-[80px]" placeholder="Your message" />
                                </div>
                                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}
