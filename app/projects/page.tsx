import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
    const projects = [
        {
            name: "Treadify",
            description: "A GitHub-integrated team management system with role-based access control, goal tracking, and commit reviews.",
            tech: ["Next.js", "React", "Express.js", "Node.js", "MS-SQL Server", "GitHub OAuth"],
            github: "https://github.com/abdulahshoaib/treadify",
            demo: "https://treadify.vercel.app/",
            featured: true,
        },
        {
            name: "Notes",
            description: "A public Notes API project using Go and Fiber for the backend, with a Next.js and React frontend.",
            tech: ["Go", "Fiber", "PostgreSQL", "Next.js", "React"],
            github: "https://github.com/abdulahshoaib/notes-api",
            demo: null,
            featured: true,
        },
        {
            name: "PassCrypt",
            description: "A secure password manager built in Go, focused on cybersecurity and encryption.",
            tech: ["Go", "Cryptography", "Security"],
            github: "https://github.com/abdulahshoaib/Passcrypt",
            demo: null,
            featured: true,
        },
        {
            name: "Tetris ",
            description: "A modern Tetris clone implemented in C++ using the Raylib library, featuring smooth animations, responsive controls, and clean retro-style graphics.",
            tech: ["C++", "Raylib", "Game Development"],
            github: "https://github.com/abdulahshoaib/Tetris",
            demo: null,
            featured: true
        },
        {
            name: "Chess Masters",
            description: "A fully-functional chess game built with C++ and SFML, complete with legal move validation, drag-and-drop interaction, and a polished 2D board interface.",
            tech: ["C++", "SFML", "Game Development"],
            github: "https://github.com/abdulahshoaib/ChessMasters",
            demo: null,
            featured: false
        },
        {
            name: "MazeRunner",
            description: "A classic 2D game written in x86 Assembly, focusing on optimizing low-level input handling.",
            tech: ["x86 Assembly", "BIOS", "Interrupts"],
            github: "https://github.com/abdulahshoaib/MazeRunner",
            demo: null,
            featured: true,
        },
        {
            name: "Operating Systems Reference Website",
            description: "Operating System Concepts & POSIX func syntax guideline for dummies like me",
            tech: ["Hugo", "hextra", "docs"],
            github: "https://github.com/abdulahshoaib/os",
            demo: "https://os-ref.netlify.app",
            featured: false
        },
        {
            name: "wh!teboard",
            description: "My own whiteboard for drawings and annotations coz other online whiteboards suck and don't have vim motions",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/abdulahshoaib/whiteboard",
            demo: null,
            featured: false
        },
        {
            name: "HTML Tag Validator (C++)",
            description: "A command-line utility written in C++ that parses and validates HTML code by checking for proper tag nesting and matching. Supports both file and inline string inputs.",
            tech: ["C++", "Stack", "CLI", "Parsing"],
            github: "https://github.com/abdulahshoaib/HTML-Parser",
            demo: null,
            featured: false
        }
    ]

    return (
        <main className="flex min-h-screen flex-col items-center p-4 relative overflow-hidden">
            <div className="z-10 w-full max-w-6xl mx-auto mt-16">
                <h1 className="text-3xl font-bold text-emerald-500 mb-8">My Projects</h1>

                <div className="mb-8">
                    <h2 className="text-xl text-white font-semibold mb-4">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects
                            .filter((p) => p.featured)
                            .map((project, index) => (
                                <Card key={index} className="bg-black/10 backdrop-blur-sm overflow-hidden flex flex-col border border-emerald-800">
                                    <CardHeader>
                                        <CardTitle className="text-emerald-500">{project.name}</CardTitle>
                                        <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, i) => (
                                                <Badge key={i} variant="outline" className="bg-emerald-500/70 backdrop-blur-sm border-none">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button variant="outline" size="sm" asChild className="bg-white/40 backdrop-blur-sm hover:bg-emerald-500 border-none">
                                            <Link href={project.github} target="_blank">
                                                <Github className="mr-2 h-4 w-4" />
                                                Code
                                            </Link>
                                        </Button>
                                        {project.demo && (
                                            <Button variant="outline" size="sm" asChild className="bg-white/40 backdrop-blur-sm hover:bg-amber-500 border-none">
                                                <Link href={project.demo} target="_blank">
                                                    <ExternalLink className="mr-2 h-4 w-4" />
                                                    Demo
                                                </Link>
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl text-white font-semibold mb-4">Other Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects
                            .filter((p) => !p.featured)
                            .map((project, index) => (
                                <Card key={index} className="bg-black/10 backdrop-blur-sm overflow-hidden flex flex-col border-emerald-800">
                                    <CardHeader>
                                        <CardTitle className="text-emerald-500">{project.name}</CardTitle>
                                        <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, i) => (
                                                <Badge key={i} variant="outline" className="bg-emerald-500/70 backdrop-blur-sm border-none">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button variant="outline" size="sm" asChild className="bg-white/40 backdrop-blur-sm hover:bg-emerald-500 border-none">
                                            <Link href={project.github} target="_blank">
                                                <Github className="mr-2 h-4 w-4" />
                                                Code
                                            </Link>
                                        </Button>
                                        {project.demo && (
                                            <Button variant="outline" size="sm" asChild className="bg-white/40 backdrop-blur-sm hover:bg-amber-500 border-none">
                                                <Link href={project.demo} target="_blank">
                                                    <ExternalLink className="mr-2 h-4 w-4" />
                                                    Demo
                                                </Link>
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
