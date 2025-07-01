import React from 'react'

function DefaultMenu(props) {
    
    const copyText = () => {
        // Copy selected text or current page URL
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            navigator.clipboard.writeText(selectedText);
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    }

    const pasteText = async () => {
        try {
            const text = await navigator.clipboard.readText();
            // You can implement paste functionality here if needed
            console.log('Pasted text:', text);
        } catch (err) {
            console.log('Failed to read clipboard');
        }
    }

    const selectAll = () => {
        window.getSelection().selectAllChildren(document.body);
    }

    const refreshPage = () => {
        window.location.reload();
    }

    const viewSource = () => {
        window.open('view-source:' + window.location.href, '_blank');
    }

    const inspectElement = () => {
        // This will attempt to open developer tools (may not work in all browsers)
        console.log('Inspect element clicked');
    }

    return (
        <div id="default-menu" className={(props.active ? " block " : " hidden ") + " cursor-default w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm"}>
            <div onClick={copyText} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">📋</span> <span className="ml-2">Copy</span>
            </div>
            <div onClick={pasteText} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">📄</span> <span className="ml-2">Paste</span>
            </div>
            <Devider />
            <div onClick={selectAll} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🔘</span> <span className="ml-2">Select All</span>
            </div>
            <Devider />
            <div onClick={refreshPage} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🔄</span> <span className="ml-2">Refresh</span>
            </div>
            <div onClick={viewSource} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">📝</span> <span className="ml-2">View Source</span>
            </div>
            <Devider />
            <div onClick={inspectElement} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🔍</span> <span className="ml-2">Inspect Element</span>
            </div>
            <Devider />
            <a rel="noreferrer noopener" href="https://github.com/Sarvesh-Shelgaonkar" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🤝</span> <span className="ml-2">Visit My <strong>GitHub</strong></span>
            </a>
            <a rel="noreferrer noopener" href="mailto:sarveshshelgaonkar864@gmail.com" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">📧</span> <span className="ml-2">Contact Me</span>
            </a>
            <Devider />
            <div onClick={() => { localStorage.clear(); window.location.reload() }} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🧹</span> <span className="ml-2">Reset Ubuntu</span>
            </div>
        </div>
    )
}

function Devider() {
    return (
        <div className="flex justify-center w-full">
            <div className=" border-t border-gray-900 py-1 w-2/5"></div>
        </div>
    );
}

export default DefaultMenu
