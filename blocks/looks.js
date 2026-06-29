Blockly.Blocks.setSize = {
    init: function() {
        this.appendValueInput('value').setCheck('Number').appendField('set size to')
        this.appendDummyInput().appendField('%')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#9966ff")
    }
}
Blockly.JavaScript.forBlock.setSize = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "value", 0) ?? 0
    return `util.target.setSize(${value})\n`
}
Blockly.Blocks.changeSize = {
    init: function() {
        this.appendValueInput('value').setCheck('Number').appendField('change size by')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setColour("#9966ff")
    }
}
Blockly.JavaScript.forBlock.changeSize = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "value", 0) ?? 0
    return `util.target.setSize(util.target.size + ${value})\n`
}
Blockly.Blocks.size = {
    init: function() {
        this.appendDummyInput().appendField('size')
        this.setOutput(true, 'Number')
        this.setColour("#9966ff")
    }
}
Blockly.JavaScript.forBlock.size = function(block) {
    return ['util.target.size', 1.2]
}