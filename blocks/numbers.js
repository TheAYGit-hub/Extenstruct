Blockly.Blocks.number = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldNumber(0), 'number')
        this.setOutput(true, 'Number')
        this.setColour("#59c059")
    }
}
Blockly.JavaScript.forBlock.number = function(block) {
    return [block.getFieldValue('number') ?? 0, 0]
}