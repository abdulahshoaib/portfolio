import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
    const projects = [
        /*{
            name: "Distributed Database System",
            description:
                "A high-performance distributed database system built with Go, supporting horizontal scaling and fault tolerance.",
            tech: ["Go", "PostgreSQL", "Docker", "Kubernetes"],
            github: "#",
            demo: "#",
            featured: true,
        },
        {
            name: "Real-time Collaboration Platform",
            description:
                "A collaborative platform for teams with real-time document editing, chat, and project management features.",
            tech: ["Next.js", "TypeScript", "WebSockets", "MongoDB"],
            github: "#",
            demo: "#",
            featured: true,
        },*/
        {
            name: "Notes",
            description: "A public Notes API project using Go and Fiber for the backend, with a Next.js and React frontend.",
            tech: ["Go", "Fiber", "PostgreSQL", "Next.js", "React"],
            github: "https://github.com/abdullahshoaib/notes-api",
            demo: null,
            featured: true,
        },
        {
            name: "Threadify",
            description: "A GitHub-integrated team management system with role-based access control, goal tracking, and commit reviews.",
            tech: ["Next.js", "React", "Express.js", "Node.js", "MS-SQL Server", "GitHub OAuth"],
            github: "https://github.com/abdullahshoaib/treadify",
            demo: "#",
            featured: true,
        },
        /*{
            name: "Embedded Systems Project",
            description: "A high-performance software written in Zig for low-level system operations.",
            tech: ["Zig"],
            github: "#",
            demo: null,
            featured: false,
        },
        {
            name: "Secure Messaging App",
            description: "End-to-end encrypted messaging application with focus on privacy and security.",
            tech: ["React Native", "Node.js", "Cryptography", "SQLite"],
            github: "#",
            demo: "#",
            featured: false,
        },*/
        {
            name: "PassCrypt",
            description: "A secure password manager built in Go, focused on cybersecurity and encryption.",
            tech: ["Go", "Cryptography", "Security"],
            github: "#",
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
            github: "https://github.com/abdullahshoaib/MazeRunner",
            demo: null,
            featured: true,
        },
        {
            name: "HTML Tag Validator (C++)",
            description: "A command-line utility written in C++ that parses and validates HTML code by checking for proper tag nesting and matching. Supports both file and inline string inputs.",
            tech: ["C++", "Stack", "CLI", "Parsing"],
            github: "https://github.com/abdullahshoaib/HTML-Parser",
            demo: null,
            featured: false
        },
        /*{
            name: "DevOps Automation Toolkit",
            description: "A collection of tools and scripts for automating CI/CD pipelines and infrastructure management.",
            tech: ["Bash", "Docker", "Kubernetes", "Terraform"],
            github: "#",
            demo: null,
            featured: false,
        },
        {
            name: "Tower Defense Game",
            description: "A 2D tower defense game built with Zig, focusing on performance and efficient resource management.",
            tech: ["Zig", "Raylib", "Game Development"],
            github: "#",
            demo: null,
            featured: false,
        },
        {
            name: "Self-Hosted File Sharing System",
            description: "A lightweight file-sharing system built with Go, allowing users to securely transfer files over a network.",
            tech: ["Go", "Fiber", "PostgreSQL"],
            github: "#",
            demo: null,
            featured: false,
        } */
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
