"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, User, Briefcase, Mail, Terminal } from "lucide-react"

export default function Navbar() {

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-lg font-bold flex items-center gap-2">
                            <Code className="h-5 w-5" />
                            <span>Abdullah's Portfolio</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" asChild>
                            <Link href="/about">
                                <User className="h-4 w-4 mr-2" />
                                About
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/projects" >
                                <Briefcase className="h-4 w-4 mr-2" />
                                Projects
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/skills">
                                <Code className="h-4 w-4 mr-2" />
                                Skills
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild>
                        <Link href="/dotfiles">
                        <Terminal className="h-4 w-4 mr-2" />
                        DotFiles
                        </Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/contact">
                                <Mail className="h-4 w-4 mr-2" />
                                Contact
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}


