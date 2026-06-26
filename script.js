const workspace = Blockly.inject("blocklyDiv", {
    renderer: 'zelos',
    toolbox: document.getElementById("toolbox"),
    trashcan: true,
    scrollbars: true,
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1,
        maxScale: 3,
        minScale: 0.3
    }
})

function updateCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace)
    let display = '"use strict"\nthisTarget = {}\n\n'
    const blockHeader = (type, header) =>
        type instanceof Array
        ? type.map(x => blockHeader(x, header))
        : workspace.getAllBlocks().some(block => block.type === type) ? display += header : 0

    blockHeader("moveSteps", `function moveSteps(steps) {    const radians = MathUtil.degToRad(90 - target.direction)\n    const dx = steps * Math.cos(radians)\n    const dy = steps * Math.sin(radians)\n    thisTarget.setXY(thisTarget.x + dx, thisTarget.y + dy)\n}\n`)
    blockHeader("goTo", `function findPosition(preset, value) {\n    switch (preset) {\n        case 'mouse':\n            return [\n                Scratch.vm.runtime.ioDevices.mouse.getScratchX(),\n                Scratch.vm.runtime.ioDevices.mouse.getScratchY()\n            ]\n        case 'random':\n            return [\n                Math.round(this.runtime.stageWidth * (Math.random() - .5)),\n                Math.round(this.runtime.stageHeight * (Math.random() - .5))\n            ]\n        case 'center': return [0, 0]\n    }\n    return [value.x, value.y]\n}\n`)
    display += `\n${code}`
    
    document.getElementById("code").textContent = display
    //const state = Blockly.serialization.workspaces.save(workspace)
    //localStorage.setItem("blockly-workspace", JSON.stringify(state))
}

//if (localStorage.getItem("blockly-workspace")) Blockly.serialization.workspaces.load(JSON.parse(state), workspace)
workspace.addChangeListener(updateCode)
updateCode()