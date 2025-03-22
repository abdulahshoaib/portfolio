import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
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
    },
    {
      name: "Embedded IoT Framework",
      description: "A lightweight framework for IoT devices with minimal resource requirements, built with Zig and C.",
      tech: ["Zig", "C", "Lua", "MQTT"],
      github: "#",
      demo: null,
      featured: true,
    },
    {
      name: "Secure Messaging App",
      description: "End-to-end encrypted messaging application with focus on privacy and security.",
      tech: ["React Native", "Node.js", "Cryptography", "SQLite"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      name: "2D Game Engine",
      description: "A lightweight 2D game engine built with Raylib, supporting multiple platforms.",
      tech: ["Raylib", "C++", "OpenGL", "Lua"],
      github: "#",
      demo: null,
      featured: false,
    },
    {
      name: "DevOps Automation Toolkit",
      description: "A collection of tools and scripts for automating CI/CD pipelines and infrastructure management.",
      tech: ["Bash", "Docker", "Kubernetes", "Terraform"],
      github: "#",
      demo: null,
      featured: false,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center p-4 relative overflow-hidden">
      <div className="z-10 w-full max-w-6xl mx-auto mt-16">
        <h1 className="text-3xl font-bold text-emerald-500 mb-8">My Projects</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
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
