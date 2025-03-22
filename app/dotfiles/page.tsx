import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Github, Terminal, Code, Monitor } from "lucide-react"
import Link from "next/link"

export default function DotfilesPage() {
    const dotfiles = [
        {
            name: "Neovim Configuration",
            description:
                "My custom Neovim setup with Lazy, LSP, Treesitter, and various plugins for a modern development experience.",
            language: "lua",
            github: "https://github.com/WhoisCipher/nvim-config",
            preview: `  -- Example from init.lua

require("setup.remap")
require("setup.set")
require("setup.lazy_init")

local augroup = vim.api.nvim_create_augroup
local cipherGroup = augroup('Abdullah', {})

local autocmd = vim.api.nvim_create_autocmd
local yank_group = augroup('HighlightYank', {})



autocmd({ "BufWritePre" }, {
    group = cipherGroup,
    pattern = "*",
    command = [[%s/\s\+$//e]],
})

autocmd('TextYankPost', {
    group = yank_group,
    pattern = '*',
    callback = function()
        vim.highlight.on_yank({
            higroup = 'IncSearch',
            timeout = 40,
        })
    end,
})

autocmd('LspAttach', {
    group = cipherGroup,
    callback = function(ev)
        local opts = { buffer = ev.buf }
        vim.keymap.set("n", "gd", function() vim.lsp.buf.definition() end, opts)
        vim.keymap.set("n", "K", function() vim.lsp.buf.hover() end, opts)
        vim.keymap.set("n", "<leader>vws", function() vim.lsp.buf.workspace_symbol() end, opts)
        vim.keymap.set("n", "<leader>vd", function() vim.diagnostic.open_float() end, opts)
        vim.keymap.set("n", "[d", function() vim.diagnostic.goto_next() end, opts)
        vim.keymap.set("n", "]d", function() vim.diagnostic.goto_prev() end, opts)
        vim.keymap.set("n", "<leader>vca", function() vim.lsp.buf.code_action() end, opts)
        vim.keymap.set("n", "<leader>vrr", function() vim.lsp.buf.references() end, opts)
        vim.keymap.set("n", "<leader>vrn", function() vim.lsp.buf.rename() end, opts)
        vim.keymap.set("i", "<C-h>", function() vim.lsp.buf.signature_help() end, opts)
    end
})

vim.g.netrw_browse_split = 0
vim.g.netrw_banner = 0
vim.g.netrw_winsize = 25`,
        },
        {
            name: "Ghostty Terminal",
            description:
                "Configuration for Ghostty, terminal emulator written in Zig.",
            language: "bash",
            github: "https://github.com/WhoisCipher/ghostty-config",
            preview: `# Example from ghostty/config
    theme = UltraDark

    background-opacity = 0.8
    background-blur = 20

    window-decoration = none

    cursor-style = block
    window-theme = dark

    clipboard-read = ask
    clipboard-write = ask

    copy-on-select = false


    shell-integration = zsh
    shell-integration-features = sudo

    auto-update = download
    auto-update-channel = tip

    `,
        },
        {
            name: "Picom Configuration",
            description: "Custom Picom setup for enhanced window transparency, animations, and performance tuning.",
            language: "config",
            github: "https://github.com/WhoisCipher/picom-config",
            preview: `
#################################
#        Picom Config           #
#################################

# Backend
backend = "glx";

# VSync (reduce screen tearing - affects battery life)
vsync = false;

# Detect '_NET_WM_WINDOW_OPACITY' on client windows
detect-client-opacity = false;

# Blur settings (Only applied to specific windows)
blur:
{
  method = "gaussian";
  size = 5;
  deviation = 3.0;
  strength = 5.0;
};

# Window-specific effects
wintypes:
{
  tooltip = { blur-background = false; opacity = 0.85; };
  dock = { blur-background = false; opacity = 0.95; };
  dnd = { shadow = false; };
  popup_menu = { opacity = 0.90; blur-background = false};
  dropdown_menu = { opacity = 0.90; blur-background = false };
  menu = { blur-background = false; };
};

# Fading animations(have them off for a better battery life)
fading = false;
fade-in-step = 0.03;
fade-out-step = 0.03;
fade-delta = 5;

# Shadows
shadow = false;`
        },
        {
            name: "i3 Window Manager",
            description: "i3wm configuration for a keyboard-driven, tiling window manager experience on Linux.",
            language: "bash",
            github: "https://github.com/WhoisCipher/i3-config",
            preview: `# Example from i3 config

      ### Applications ###
# Start a terminal emulator
bindsym $mod+Return exec $wm_setting_app_terminal

# Start a web browser
bindsym $mod+$smod+Return exec $wm_setting_app_browser

# Start a program launcher
bindsym $mod+d exec $wm_setting_app_launcher

### Gaps ###
gaps horizontal $wm_setting_gap_width
gaps vertical   $wm_setting_gap_heigth
smart_gaps on

### Borders ###
default_border pixel $wm_setting_border_size
default_floating_border pixel $wm_setting_border_size
smart_borders on

### Colors ###
# class                 border                       background                   text                         indicator                    child_border
client.focused          $wm_color_border_active_bg   $wm_color_border_active_bg   $wm_color_border_active_fg   $wm_color_border_active_bg   $wm_color_border_active_bg
client.focused_inactive $wm_color_border_inactive_bg $wm_color_border_inactive_bg $wm_color_border_inactive_fg $wm_color_border_inactive_bg $wm_color_border_inactive_bg
client.unfocused        $wm_color_border_inactive_bg $wm_color_border_inactive_bg $wm_color_border_inactive_fg $wm_color_border_inactive_bg $wm_color_border_inactive_bg
client.urgent           $wm_color_border_inactive_bg $wm_color_border_inactive_bg $wm_color_border_inactive_fg $wm_color_border_inactive_bg $wm_color_border_inactive_bg
client.placeholder      $wm_color_border_inactive_bg $wm_color_border_inactive_bg $wm_color_border_inactive_fg $wm_color_border_inactive_bg $wm_color_border_inactive_bg
client.background       $wm_color_background

### i3bar ###
bar {
    position $bar_setting_position
    status_command $bar_setting_statusCommand
    font $bar_setting_font
    separator_symbol $bar_setting_separator
    tray_output $bar_setting_trayoutput

    colors {
        background $bar_color_background
        statusline $bar_color_statusline
        separator $bar_color_separator
    }
}

# Use Mouse+$mod to drag floating windows to their wanted position
floating_modifier $mod

# Enter fullscreen mode for the focused window
bindsym $mod+f fullscreen toggle

# Toggle between tiling and floating
bindsym $mod+$smod+f floating toggle

# Kill the focused window
bindsym $mod+$smod+q kill

# Restart i3 inplace (preserves your layout/session, can be used to upgrade i3)
bindsym $mod+$smod+r restart

# Exit i3 (logs you out of your X session)
bindsym $mod+$smod+e exec "i3-nagbar -t warning -m 'You pressed the exit shortcut. Do you really want to exit i3? This will end your X session.' -B 'Yes, exit i3' 'i3-msg exit'"

# Setup Wallpaper on startup
exec --no-startup-id feh --bg-max $bg

# Startup Programs
exec --no-startup-id ghostty
exec --no-startup-id brave
exec --no-startup-id spotify

# Compositor runs on startup
exec --no-startup-id $wm_compositor

# Caps Lock identifier
exec --no-startup-id caps_util

# lockscreen
bindsym $mod+$smod+l exec $wm_lock_sleep
bindsym $mod+l exec $wm_lock

# User-added function keys:
bindsym XF86AudioMute         exec --no-startup-id pamixer -t     && pkill -RTMIN+1 i3blocks
bindsym XF86AudioLowerVolume  exec --no-startup-id pamixer -d 3   && pkill -RTMIN+1 i3blocks
bindsym XF86AudioRaiseVolume  exec --no-startup-id pamixer -i 3   && pkill -RTMIN+1 i3blocks

      `
        },
        {
            name: "i3Blocks Status Bar",
            description: "Custom i3blocks setup for status bar customization, including scripts for system monitoring and aesthetics.",
            language: "config",
            github: "https://github.com/WhoisCipher/i3blocks-config",
            preview: `# Example from i3blocks/config
[SOUND]
full_text= 🔇:  0%
command=~/.config/i3blocks/sound/sound_info.sh
interval=0
signal=1

[TIME_DATE]
command=date +" %a, %d - %H:%M"
interval=6

[BATTERY]
command=~/.config/i3blocks/battery/battery_info.sh
interval=3
      `,
        },
        {
            name: "betterlockscreen",
            description: "A lockscreen better than the i3lock that provides more customization power",
            language: "config",
            github: "https://github.com/WhoisCipher/betterlockscreen",
            preview: `wallpath="$HOME/Pictures/wallpaper.jpg"
blur_strength=0.3
dim_strength=0.6
locktext="Password"
font="Inter"
 `
        },
    ]

    return (
        <main className="flex min-h-screen flex-col items-center p-4 relative overflow-hidden">
            <div className="z-10 w-full max-w-6xl mx-auto mt-16">
                <div className="flex items-center gap-3 mb-8">
                    <h1 className="text-3xl font-bold text-emerald-500">.DotFiles</h1>
                    <Button variant="outline" size="sm" asChild className="bg-emerald-500 border-none  backdrop-blur-xs hover:bg-emerald-600">
                        <Link href="https://github.com/WhoisCipher/" target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            View on GitHub
                        </Link>
                    </Button>
                </div>

                <Card className="bg-black/10 backdrop-blur-sm mb-8 border-emerald-800">
                    <CardHeader className="text-gray-200 text-xl font-semibold">My Development Environment</CardHeader>
                    <CardContent>
                        <p className="mb-4 text-muted-foreground">
                            These are my personal dotfiles that I use to configure my development environment. Feel free to explore,
                            fork, and adapt them to your own workflow.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
                                <Terminal className="h-5 w-5 text-emerald-500" />
                                <div>
                                    <h3 className="font-medium text-emerald-500">Shell</h3>
                                    <p className="text-sm text-muted-foreground">Zsh + Oh My Zsh</p>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
                                <Code className="h-5 w-5 text-emerald-500" />
                                <div>
                                    <h3 className="text-emerald-500 font-medium">Editor</h3>
                                    <p className="text-sm text-muted-foreground">Neovim + Custom Plugins</p>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
                                <Monitor className="h-5 w-5 text-emerald-500" />
                                <div>
                                    <h3 className="font-medium text-emerald-500">Window Manager</h3>
                                    <p className="text-sm text-muted-foreground">i3wm + i3blocks </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Tabs defaultValue="Neovim Configuration" className="w-full">
                    <TabsList className="bg-emerald-600/70 backdrop-blur-sm drop-shadow-lg mb-6 rounded-bl-none rounded-tr-none">
                        {dotfiles.map((dotfile, index) => (
                            <TabsTrigger className="data-[state=active]:bg-emerald-500 rounded-bl-none rounded-tr-none" key={index} value={dotfile.name.toLowerCase().replace(/\s+/g, "-")}>
                                {dotfile.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {dotfiles.map((dotfile, index) => (
                        <TabsContent key={index} value={dotfile.name.toLowerCase().replace(/\s+/g, "-")}>
                            <Card className="bg-black/10 backdrop-blur-sm border border-emerald-800">
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold text-emerald-500">{dotfile.name}</h2>
                                        <p className="text-sm text-muted-foreground">{dotfile.description}</p>
                                    </div>
                                    <Button variant="outline" size="sm" asChild className="bg-emerald-400 backdrop-blur-md border-none hover:bg-emerald-600">
                                        <Link href={dotfile.github} target="_blank">
                                            <Github className="mr-2 h-4 w-4" />
                                            View Files
                                        </Link>
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="glass-card p-4 rounded-lg overflow-x-auto">
                                        <pre className="text-sm text-slate-200">
                                            <code>{dotfile.preview}</code>
                                        </pre>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </main>
    )
}


