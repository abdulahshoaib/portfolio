"use client"
import { useEffect, useRef, useState } from "react"
import { Terminal } from "xterm"
import { FitAddon } from "xterm-addon-fit"
import "xterm/css/xterm.css"

export default function WebTerm() {
    const terminalRef = useRef<HTMLDivElement>(null)
    const term = useRef<Terminal | null>(null)
    const fitAddon = useRef<FitAddon | null>(null)
    const [currentCommand, setCurrentCommand] = useState<string>("")

    useEffect(() => {
        if (terminalRef.current && !term.current) {
            // Create terminal instance
            term.current = new Terminal({
                cursorBlink: true,
                theme: { background: "transparent", foreground: "#fff" },
                scrollback: 0, // Limited scrollback
                convertEol: true,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
            })

            // Add the fit addon
            fitAddon.current = new FitAddon();
            term.current.loadAddon(fitAddon.current);

            term.current.open(terminalRef.current)

            // Initial greeting
            term.current.writeln("\r\n\x1b[1;32mWelcome to Terminal\x1b[0m");
            term.current.writeln("\x1b[90mType 'help' to see available commands\x1b[0m\r\n");
            promptUser();

            // Current command buffer
            let commandBuffer = "";

            // Handle terminal input
            term.current.onData((data) => {
                const code = data.charCodeAt(0);

                // Handle special keys
                if (code === 13) { // Enter key
                    // Process the command
                    processCommand(commandBuffer);
                    commandBuffer = "";
                    setCurrentCommand("");
                } else if (code === 127 || code === 8) { // Backspace
                    // Remove the last character from the buffer if it exists
                    if (commandBuffer.length > 0) {
                        commandBuffer = commandBuffer.substring(0, commandBuffer.length - 1);
                        setCurrentCommand(commandBuffer);
                        // Move cursor back and clear the character
                        term.current?.write("\b \b");
                    }
                } else if (code < 32) {
                    // Ignore other control characters
                } else {
                    // Add to command buffer and echo to terminal
                    commandBuffer += data;
                    setCurrentCommand(commandBuffer);
                    term.current?.write(data);
                }
            });
        }
    }, [])

    // Prompt function
    const promptUser = () => {
        term.current?.write("\x1b[38;2;57;255;20muser@console\x1b[0m:\x1b[1;34m~\x1b[0m$ ");
    }
        ;

    // Process commands
    const processCommand = (cmd: string) => {
        if (!term.current) return;

        term.current.writeln("");
        const command = cmd.trim().toLowerCase();

        if (command === "") {
            // Empty command, just show prompt again
        } else if (command === "help") {
            term.current.writeln("\x1b[38;2;255;255;255mAvailable commands:\x1b[0m"); // White title
            term.current.writeln("  \x1b[38;2;255;255;100mhelp\x1b[0m        - Show this help message");
            term.current.writeln("  \x1b[38;2;255;255;100mclear\x1b[0m       - Clear the terminal");
            term.current.writeln("  \x1b[38;2;255;255;100mecho [text]\x1b[0m  - Echo text to the terminal");
            term.current.writeln("  \x1b[38;2;255;255;100mdate\x1b[0m        - Show current date and time");
            term.current.writeln("  \x1b[38;2;255;255;100muname\x1b[0m       - Show system information");
        } else if (command === "clear") {
            term.current.reset();
        } else if (command.startsWith("echo ")) {
            const text = cmd.substring(5);
            term.current.writeln(`\x1b[38;2;255;255;255m${text}\x1b[0m`); // White output
        } else if (command === "date") {
            term.current.writeln(`\x1b[38;2;255;255;255m${new Date().toString()}\x1b[0m`); // White date output
        } else if (command === "uname") {
            term.current.writeln("\x1b[38;2;255;255;255mHack OS v1.0 running on Web Browser\x1b[0m"); // White system info
        } else {
            term.current.writeln(`\x1b[38;2;255;50;50mCommand not found: ${command}\x1b[0m`); // Red error
        }

        promptUser();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            {/* Terminal Window */}
            <div className="flex flex-col w-[700px] h-[475px] rounded-lg overflow-hidden border border-emerald-800 shadow-xl bg-black/10 backdrop-blur-xs">

                {/* Title Bar */}
                <div className="h-10 flex items-center justify-center border-b border-emerald-800 bg-black/20 backdrop-blur-2xl">
                    <span className="text-green-500 font-inter text-xl select-none">Terminal</span>
                </div>

                {/* Terminal Container */}
                <div
                    ref={terminalRef}
                    className="flex-1 relative overflow-hidden pl-2 select-none"
                    onContextMenu={(e) => e.preventDefault()}
                >
                    {/* Hide Scrollbars */}
                    <style jsx>{`
                    :global(.xterm) {
                        background-color: transparent !important;
                    }
                    :global(.xterm-viewport) {
                        background-color: transparent !important;
                    }
                    :global(.xterm-screen) {
                        background-color: transparent !important;
                    }
                    div::-webkit-scrollbar {
                        display: none;
                    }
                    :global(.xterm-viewport::-webkit-scrollbar) {
                        display: none !important;
                    }
                    :global(.xterm-viewport) {
                        scrollbar-width: none !important;
                        -ms-overflow-style: none !important;
                    }
                    :global(.xterm) {
                        padding-top: 0 !important;
                    }
            `}</style>

                </div>
            </div>
        </div>
    );
}
