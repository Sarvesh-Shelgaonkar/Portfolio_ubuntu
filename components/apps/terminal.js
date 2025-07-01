import React, { Component } from 'react'
import $ from 'jquery';
import ReactGA from 'react-ga4';

export class Terminal extends Component {
    constructor() {
        super();
        this.cursor = "";
        this.terminal_rows = 1;
        this.current_directory = "~";
        this.curr_dir_name = "root";
        this.prev_commands = [];
        this.commands_index = -1;
        this.child_directories = {
            root: ["books", "projects", "personal-documents", "skills", "languages", "PICT", "interests"],
            PICT: ["Sem-6"],
            books: ["Eric-Jorgenson_The-Almanack-of-Naval-Ravikant.pdf", "Elon Musk: How the Billionaire CEO of SpaceX.pdf", "The $100 Startup_CHRIS_GUILLEBEAU.pdf", "The_Magic_of_Thinking_Big.pdf"],
            skills: ["Full-Stack Development", "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "C++", "AI-powered applications"],
            projects: ["PrimeEstate-Solutions", "AI-SQL-Generator", "TradeForge", "WanderLust", "Simon-Game", "Library-Management-System"],
            interests: ["Software Engineering", "AI Development", "Full Stack Development"],
            languages: ["Javascript", "C++", "C", "HTML", "CSS"],
        };
        this.state = {
            terminal: [],
        }
    }

    componentDidMount() {
        this.reStartTerminal();
    }

    componentDidUpdate() {
        clearInterval(this.cursor);
        this.startCursor(this.terminal_rows - 2);
    }

    componentWillUnmount() {
        clearInterval(this.cursor);
    }

    reStartTerminal = () => {
        clearInterval(this.cursor);
        $('#terminal-body').empty();
        this.appendTerminalRow();
    }

    appendTerminalRow = () => {
        let terminal = this.state.terminal;
        terminal.push(this.terminalRow(this.terminal_rows));
        this.setState({ terminal });
        this.terminal_rows += 2;
    }

    terminalRow = (id) => {
        return (
            <React.Fragment key={id}>
                <div className="flex w-full h-5">
                    <div className="flex">
                        <div className=" text-ubt-green">sarvesh@PICT</div>
                        <div className="text-white mx-px font-medium">:</div>
                        <div className=" text-ubt-blue">{this.current_directory}</div>
                        <div className="text-white mx-px font-medium mr-1">$</div>
                    </div>
                    <div id="cmd" onClick={this.focusCursor} className=" bg-transperent relative flex-1 overflow-hidden">
                        <span id={`show-${id}`} className=" float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider"></span>
                        <div id={`cursor-${id}`} className=" float-left mt-1 w-1.5 h-3.5 bg-white"></div>
                        <input id={`terminal-input-${id}`} data-row-id={id} onKeyDown={this.checkKey} onBlur={this.unFocusCursor} className=" absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent" spellCheck={false} autoFocus={true} autoComplete="off" type="text" />
                    </div>
                </div>
                <div id={`row-result-${id}`} className={"my-2 font-normal"}></div>
            </React.Fragment>
        );

    }

    focusCursor = (e) => {
        clearInterval(this.cursor);
        this.startCursor($(e.target).data("row-id"));
    }

    unFocusCursor = (e) => {
        this.stopCursor($(e.target).data("row-id"));
    }

    startCursor = (id) => {
        clearInterval(this.cursor);
        $(`input#terminal-input-${id}`).trigger("focus");
        // On input change, set current text in span
        $(`input#terminal-input-${id}`).on("input", function () {
            $(`#cmd span#show-${id}`).text($(this).val());
        });
        this.cursor = window.setInterval(function () {
            if ($(`#cursor-${id}`).css('visibility') === 'visible') {
                $(`#cursor-${id}`).css({ visibility: 'hidden' });
            } else {
                $(`#cursor-${id}`).css({ visibility: 'visible' });
            }
        }, 500);
    }

    stopCursor = (id) => {
        clearInterval(this.cursor);
        $(`#cursor-${id}`).css({ visibility: 'visible' });
    }

    removeCursor = (id) => {
        this.stopCursor(id);
        $(`#cursor-${id}`).css({ display: 'none' });
    }

    clearInput = (id) => {
        $(`input#terminal-input-${id}`).trigger("blur");
    }

    checkKey = (e) => {
        if (e.key === "Enter") {
            let terminal_row_id = $(e.target).data("row-id");
            let command = $(`input#terminal-input-${terminal_row_id}`).val().trim();
            if (command.length !== 0) {
                this.removeCursor(terminal_row_id);
                this.handleCommands(command, terminal_row_id);
            }
            else return;
            // push to history
            this.prev_commands.push(command);
            this.commands_index = this.prev_commands.length - 1;

            this.clearInput(terminal_row_id);
        }
        else if (e.key === "ArrowUp") {
            let prev_command;

            if (this.commands_index <= -1) prev_command = "";
            else prev_command = this.prev_commands[this.commands_index];

            let terminal_row_id = $(e.target).data("row-id");

            $(`input#terminal-input-${terminal_row_id}`).val(prev_command);
            $(`#show-${terminal_row_id}`).text(prev_command);

            this.commands_index--;
        }
        else if (e.key === "ArrowDown") {
            let prev_command;

            if (this.commands_index >= this.prev_commands.length) return;
            if (this.commands_index <= -1) this.commands_index = 0;

            if (this.commands_index === this.prev_commands.length) prev_command = "";
            else prev_command = this.prev_commands[this.commands_index];

            let terminal_row_id = $(e.target).data("row-id");

            $(`input#terminal-input-${terminal_row_id}`).val(prev_command);
            $(`#show-${terminal_row_id}`).text(prev_command);

            this.commands_index++;
        }
    }

    childDirectories = (parent) => {
        let files = [];
        files.push(`<div class="flex justify-start flex-wrap">`)
        this.child_directories[parent].forEach(file => {
            files.push(
                `<span class="font-bold mr-2 text-ubt-blue">'${file}'</span>`
            )
        });
        files.push(`</div>`)
        return files;
    }

    closeTerminal = () => {
        $("#close-terminal").trigger('click');
    }

    handleCommands = (command, rowId) => {
        let words = command.split(' ').filter(Boolean);
        let main = words[0];
        words.shift()
        let result = "";
        let rest = words.join(" ");
        rest = rest.trim();
        switch (main) {
            case "cd":
                if (words.length === 0 || rest === "") {
                    this.current_directory = "~";
                    this.curr_dir_name = "root"
                    break;
                }
                if (words.length > 1) {
                    result = "too many arguments, arguments must be <1.";
                    break;
                }

                if (rest === "personal-documents") {
                    result = `bash /${this.curr_dir_name} : Permission denied 😏`;
                    break;
                }

                if (this.child_directories[this.curr_dir_name].includes(rest)) {
                    this.current_directory = `${this.current_directory}/${rest}`;
                    this.curr_dir_name = rest;
                } else {
                    result = `bash: cd: ${rest}: No such file or directory`;
                }
                break;
            case "ls":
                if (words.length > 1) {
                    result = "too many arguments, arguments must be <1.";
                    break;
                }
                if (words.length === 0 || rest === "") {
                    result = this.childDirectories(this.curr_dir_name);
                    break;
                }
                if (this.child_directories[this.curr_dir_name].includes(rest)) {
                    if (this.child_directories[rest] === undefined) {
                        result = `'${rest}'`;
                    } else {
                        result = this.childDirectories(rest);
                    }
                } else {
                    result = `ls: cannot access '${rest}': No such file or directory`;
                }
                break;
            case "pwd":
                result = this.current_directory;
                break;
            case "whoami":
                result = "Sarvesh Shelgaonkar - Full Stack Developer";
                break;
            case "date":
                result = new Date().toString();
                break;
            case "sudo":
                result = `Permission denied: with little power comes... no responsibility? 🤷‍♂️`;
                break;
            case "clear":
                this.reStartTerminal();
                return;
            case "exit":
                this.closeTerminal();
                return;
            case "echo":
                result = rest;
                break;
            case "help":
                result = this.help();
                break;
            case "contact":
                result = `Email: sarveshshelgaonkar864@gmail.com<br>GitHub: https://github.com/Sarvesh-Shelgaonkar<br>LinkedIn: https://www.linkedin.com/in/sarvesh-shelgaonkar-04a1b8248/`;
                break;
            case "about":
                result = `Hi! I'm Sarvesh Shelgaonkar, a Computer Engineering student at PICT with expertise in Full Stack Development using MERN stack. I love building scalable web applications and AI-powered solutions!`;
                break;
            default:
                result = `Command '${main}' not found. Type 'help' for available commands.`;
                break;
        }
        document.getElementById(`row-result-${rowId}`).innerHTML = result;
        this.appendTerminalRow();
    }

    help = () => {
        return `<div class="mt-2">
        <div class="text-ubt-blue font-bold">Available Commands:</div>
        <div class="grid grid-cols-2 gap-2 mt-2">
            <div><span class="text-ubt-green">ls</span> - list directory contents</div>
            <div><span class="text-ubt-green">cd</span> - change directory</div>
            <div><span class="text-ubt-green">pwd</span> - print working directory</div>
            <div><span class="text-ubt-green">whoami</span> - display current user</div>
            <div><span class="text-ubt-green">date</span> - display current date</div>
            <div><span class="text-ubt-green">echo</span> - display text</div>
            <div><span class="text-ubt-green">clear</span> - clear terminal</div>
            <div><span class="text-ubt-green">exit</span> - close terminal</div>
            <div><span class="text-ubt-green">contact</span> - show contact info</div>
            <div><span class="text-ubt-green">about</span> - about Sarvesh</div>
            <div><span class="text-ubt-green">help</span> - show this help</div>
        </div>
        </div>`;
    }

    render() {
        return (
            <div className="h-full w-full bg-ub-cool-grey text-ubt-grey text-sm font-bold">
                <div className="flex flex-col h-full">
                    <div className="flex-grow overflow-auto" id="terminal-body">
                        {this.state.terminal}
                    </div>
                </div>
            </div>
        );
    }
}

export default Terminal;

export const displayTerminal = () => {
    return <Terminal />;
}