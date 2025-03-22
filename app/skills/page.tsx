"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Code, Database, Server, Gamepad2, Cpu, Terminal, Cloud } from "lucide-react"

export default function SkillsPage() {
    const [activeCategory, setActiveCategory] = useState("all")

    const skills = {
        backend: [
            { name: "Go", level: 90 },
            { name: "JavaScript", level: 90 },
            { name: "TypeScript", level: 90 },
            { name: "Node.js", level: 85 },
            { name: "Bun", level: 85 },
            { name: "Express", level: 85 },
        ],
        frontend: [
            { name: "Next.js", level: 95 },
            { name: "React", level: 95 },
            { name: "Vue.js", level: 65 },
        ],
        embedded: [
            { name: "C", level: 99 },
            { name: "Lua", level: 85 },
            { name: "Zig", level: 80 },
        ],
        databases: [
            { name: "PostgreSQL", level: 90 },
            { name: "MSSQL", level: 80 },
            { name: "SQLite", level: 75 },
            { name: "MongoDB", level: 65 },
        ],
        gameDev: [
            { name: "Raylib", level: 89 },
            { name: "Unity", level: 79 },
        ],
        deployment: [
            { name: "CI/CD", level: 80 },
            { name: "Docker", level: 75 },
            { name: "Kubernetes", level: 65 },
        ],
        security: [
            { name: "Penetration Testing", level: 85 },
            { name: "Vulnerability Assessment", level: 80 },
            { name: "Network Security", level: 75 },
            { name: "Cryptography", level: 65 },
            { name: "Security Auditing", level: 60 },
        ],
        scripting: [
            { name: "Bash", level: 80 },
            { name: "Lua", level: 70 },
        ],
    }

    const categoryIcons = {
        backend: <Server className="h-5 w-5" />,
        frontend: <Code className="h-5 w-5" />,
        embedded: <Cpu className="h-5 w-5" />,
        databases: <Database className="h-5 w-5" />,
        gameDev: <Gamepad2 className="h-5 w-5" />,
        deployment: <Cloud className="h-5 w-5" />,
        security: <Shield className="h-5 w-5" />,
        scripting: <Terminal className="h-5 w-5" />,
    }

    const categoryNames = {
        backend: "Backend",
        frontend: "Frontend",
        embedded: "Embedded Systems",
        databases: "Databases",
        gameDev: "Game Development",
        deployment: "Deployment",
        security: "Security",
        scripting: "Scripting",
    }

    const renderSkillBar = (skill: { name: string; level: number }) => (
        <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                    className="h-full bg-emerald-900 transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
        </div>
    )

    const renderSkillCard = (category: string) => {
        const categoryKey = category as keyof typeof skills
        return (
            <Card key={category} className="bg-white/10 backdrop-blur-sm h-full">
                <CardHeader className="text-emerald-700 flex flex-row items-center gap-2 pb-2">
                    {categoryIcons[categoryKey]}
                    <h3 className="font-semibold text-lg">{categoryNames[categoryKey]}</h3>
                </CardHeader>
                <CardContent>{skills[categoryKey].map(renderSkillBar)}</CardContent>
            </Card>
        )
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-4 relative overflow-hidden">
            <div className="z-10 w-full max-w-6xl mx-auto mt-16">
                <Card className="bg-white/10 backdrop-blur-sm mb-8">
                    <CardHeader className="text-emerald-700 text-2xl font-bold">My Skills</CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            I have expertise across various domains of software development, from frontend and backend technologies to
                            embedded systems, security, and game development. Below is a visualization of my technical skills and
                            proficiency levels.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <Button
                                className={`${activeCategory === "all" ? "bg-emerald-900 text-white" : "bg-emerald-800 text-white"
                                    } hover:bg-emerald-900`}
                                onClick={() => setActiveCategory("all")}
                            >
                                All Skills
                            </Button>
                            {Object.keys(skills).map((category) => (
                                <Button
                                    key={category}
                                    className={`flex items-center gap-2 ${activeCategory === category ? "bg-emerald-900 text-white" : "bg-emerald-800 text-white"
                                        } hover:bg-emerald-900`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {categoryIcons[category as keyof typeof categoryIcons]}
                                    {categoryNames[category as keyof typeof categoryNames]}
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeCategory === "all" ? Object.keys(skills).map(renderSkillCard) : renderSkillCard(activeCategory)}
                </div>
            </div>
        </main>
    )
}


