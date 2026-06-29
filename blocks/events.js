Blockly.Blocks.whenFlagClicked = {
    init: function() {
        this.appendDummyInput().appendField('when').appendField(new Blockly.FieldImage('images/blue-flag.png', 20, 20)).appendField('clicked')
        this.setNextStatement(true, "Action")
        this.setColour("#ffd500")
    }
}
Blockly.JavaScript.forBlock.whenFlagClicked = function(block, generator) {
    const body = generator.statementToCode(block, 'BODY')
    return `Scratch.vm.on('PROJECT_RUN_START', (async () => {\n${body}}))\n`
}
Blockly.Blocks.whenStopSignClicked = {
    init: function() {
        this.appendDummyInput().appendField('when').appendField(new Blockly.FieldImage('images/red-stop-sign.png', 20, 20)).appendField('clicked')
        this.setNextStatement(true, "Action")
        this.setColour("#ffd500")
    }
}
Blockly.JavaScript.forBlock.whenStopSignClicked = function(block, generator) {
    const body = generator.statementToCode(block, 'BODY')
    return `Scratch.vm.on('PROJECT_RUN_STOP', (async () => {\n${body}}))\n`
}
Blockly.Blocks.whenExtensionLoaded = {
    init: function() {
        this.appendDummyInput().appendField('when').appendField(new Blockly.FieldImage('images/extension.png', 20, 20)).appendField('loaded')
        this.setNextStatement(true, "Action")
        this.setColour("#ffd500")
    }
}
Blockly.JavaScript.forBlock.whenExtensionLoaded = function(block, generator) {
    return generator.statementToCode(block, 'BODY')
}
Blockly.Blocks.beforeProjectTick = {
    init: function() {
        this.appendDummyInput().appendField('before project tick')
        this.setNextStatement(true, "Action")
        this.setColour("#ffd500")
    }
}
Blockly.JavaScript.forBlock.beforeProjectTick = function(block, generator) {
    const body = generator.statementToCode(block, 'BODY')
    return `Scratch.vm.on('BEFORE_EXECUTE', (async () => {\n${body}}))\n`
}
Blockly.Blocks.afterProjectTick = {
    init: function() {
        this.appendDummyInput().appendField('after project tick')
        this.setNextStatement(true, "Action")
        this.setColour("#ffd500")
    }
}
Blockly.JavaScript.forBlock.afterProjectTick = function(block, generator) {
    const body = generator.statementToCode(block, 'BODY')
    return `Scratch.vm.on('AFTER_EXECUTE', (async () => {\n${body}}))\n`
}
