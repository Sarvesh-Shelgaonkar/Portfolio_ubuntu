import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutSarvesh } from './components/apps/sarvesh';
import { displayTerminalCalc } from './components/apps/calc';
import { displaySystemMonitor } from './components/apps/system-monitor';
import { displayCodeEditor } from './components/apps/code-editor';
import { displayWeather } from './components/apps/weather';

const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "about-sarvesh",
        title: "About Sarvesh",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutSarvesh,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify, // India Top 50 Playlist 😅
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
    {
        id: "github",
        title: "GitHub",
        icon: './themes/Yaru/apps/github.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        isExternalApp: true,
        url: "https://github.com/Sarvesh-Shelgaonkar",
        screen: () => {},
    },
    {
        id: "system-monitor",
        title: "System Monitor",
        icon: './themes/Yaru/status/emblem-system-symbolic.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySystemMonitor,
    },
    {
        id: "code-editor",
        title: "Code Editor",
        icon: './themes/Yaru/apps/code-editor.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayCodeEditor,
    },
    {
        id: "weather",
        title: "Weather",
        icon: './themes/Yaru/apps/weather.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayWeather,
    },
]

export default apps;