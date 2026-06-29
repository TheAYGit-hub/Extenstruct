Blockly.Blocks.moveSteps = {
    init: function() {
        this.appendValueInput('steps').setCheck('Number').appendField('move')
        this.appendDummyInput().appendField('steps')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.moveSteps = function(block) {
    const steps = Blockly.JavaScript.valueToCode(block, "steps", 0) ?? 0
    return `moveSteps(${steps})\n`
}
Blockly.Blocks.turnRight = {
    init: function() {
        this.appendValueInput('degrees').setCheck('Number').appendField('turn').appendField(new Blockly.FieldImage('images/rotate-right.png', 20, 20))
        this.appendDummyInput().appendField('degrees')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.turnRight = function(block) {
    const degrees = Blockly.JavaScript.valueToCode(block, "degrees", 0) ?? 0
    return `util.target.setDirection(util.target.direction + ${degrees})\n`
}
Blockly.Blocks.turnLeft = {
    init: function() {
        this.appendValueInput('degrees').setCheck('Number').appendField('turn').appendField(new Blockly.FieldImage('images/rotate-left.png', 20, 20))
        this.appendDummyInput().appendField('degrees')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.turnLeft = function(block) {
    const degrees = Blockly.JavaScript.valueToCode(block, "degrees", 0) ?? 0
    return `util.target.setDirection(util.target.direction - ${degrees})\n`
}
Blockly.Blocks.goTo = {
    validate: function(newValue) {
        const block = this.getSourceBlock()
        if (block.workspace && !block.workspace.isFlyout) {
            block.updateConnections(newValue)
        }
        return newValue
    },
    init: function() {
        this.appendDummyInput().appendField('go to').appendField(new Blockly.FieldDropdown([
            ["random position", "random"],
            ["mouse pointer", "mouse"],
            ["center", "center"],
            "separator",
            ["target", "target"],
            ["vector", "vector"],
        ], this.validate), "preset")
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    },
    updateConnections: function(newValue) {
        if (this.getInput('value'))
            this.removeInput('value', true)
        switch (newValue) {
            case "target":
                this.appendValueInput('value').setCheck('Target')
                break
            case "vector":
                this.appendValueInput('value').setCheck('Vector')
        }
    }
}
Blockly.JavaScript.forBlock.goTo = function(block) {
    const preset = block.getFieldValue('preset')
    if (block.getInput('value')) {
        const value = Blockly.JavaScript.valueToCode(block, "value", 0) ?? '{}'
        return `util.target.setXY(findPosition("${preset}", ${value}))\n`
    }
    return `util.target.setXY(findPosition("${preset}"))\n`
}
Blockly.Blocks.goToXY = {
    init: function() {
        this.appendValueInput('x').setCheck('Number').appendField('go to x:')
        this.appendValueInput('y').setCheck('Number').appendField('y:')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.goToXY = function(block) {
    const x = Blockly.JavaScript.valueToCode(block, "x", 0) ?? 0
    const y = Blockly.JavaScript.valueToCode(block, "y", 0) ?? 0
    return `util.target.setXY(${x}, ${y})\n`
}
Blockly.Blocks.changeByXY = {
    init: function() {
        this.appendValueInput('x').setCheck('Number').appendField('change by x:')
        this.appendValueInput('y').setCheck('Number').appendField('y:')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.changeByXY = function(block) {
    const x = Blockly.JavaScript.valueToCode(block, "x", 0) ?? 0
    const y = Blockly.JavaScript.valueToCode(block, "y", 0) ?? 0
    return `util.target.setXY(util.target.x + ${x}, util.target.y + ${y})\n`
}
Blockly.Blocks.pointInDirection = {
    init: function() {
        this.appendValueInput('dir').setCheck('Number').appendField('point in direction')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.pointInDirection = function(block) {
    const dir = Blockly.JavaScript.valueToCode(block, "dir", 0) ?? 0
    return `util.target.setDirection(${dir})\n`
}
Blockly.Blocks.pointTowards = {
    validate: function(newValue) {
        const block = this.getSourceBlock()
        if (block.workspace && !block.workspace.isFlyout) {
            block.updateConnections(newValue)
        }
        return newValue
    },
    init: function() {
        this.appendDummyInput().appendField('point towards').appendField(new Blockly.FieldDropdown([
            ["random position", "random"],
            ["mouse pointer", "mouse"],
            ["center", "center"],
            "separator",
            ["target", "target"],
            ["vector", "vector"],
        ], this.validate), "preset")
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    },
    updateConnections: function(newValue) {
        if (this.getInput('value'))
            this.removeInput('value', true)
        switch (newValue) {
            case "target":
                this.appendValueInput('value').setCheck('Target')
                break
            case "vector":
                this.appendValueInput('value').setCheck('Vector')
        }
    }
}
Blockly.JavaScript.forBlock.pointTowards = function(block) {
    const preset = block.getFieldValue('preset')
    if (block.getInput('value')) {
        const value = Blockly.JavaScript.valueToCode(block, "value", 0) ?? '{}'
        return `util.target.setDirection(90 - MathUtil.radToDeg(Math.atan2(findPosition(${preset}, ${value})[1] - util.target.y, findPosition(${preset}, ${value})[0] - util.target.x)))\n`
    }
    return `util.target.setDirection(90 - MathUtil.radToDeg(Math.atan2(findPosition(${preset})[1] - util.target.y, findPosition(${preset})[0] - util.target.x)))\n`
}
Blockly.Blocks.pointTowardsXY = {
    init: function() {
        this.appendValueInput('x').setCheck('Number').appendField('point towards x:')
        this.appendValueInput('y').setCheck('Number').appendField('y:')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.pointTowardsXY = function(block) {
    const x = Blockly.JavaScript.valueToCode(block, "x", 0) ?? 0
    const y = Blockly.JavaScript.valueToCode(block, "y", 0) ?? 0
    return `util.target.setDirection(90 - MathUtil.radToDeg(Math.atan2(${y} - util.target.y, ${x} - util.target.x)))\n`
}
Blockly.Blocks.setX = {
    init: function() {
        this.appendValueInput('value').setCheck('Number').appendField('set x to')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.setX = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "value", 0) ?? 0
    return `util.target.setXY(${value}, util.target.y)\n`
}
Blockly.Blocks.changeX = {
    init: function() {
        this.appendValueInput('value').setCheck('Number').appendField('change x by')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.changeX = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "value", 0) ?? 0
    return `util.target.setXY(util.target.x + ${value}, util.target.y)\n`
}
Blockly.Blocks.setY = {
    init: function() {
        this.appendValueInput('value').setCheck('Number').appendField('set y to')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.setY = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "value", 0) ?? 0
    return `util.target.setXY(util.target.x, ${value})\n`
}
Blockly.Blocks.changeY = {
    init: function() {
        this.appendValueInput('value').setCheck('Number').appendField('change y by')
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.changeY = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, "value", 0) ?? 0
    return `util.target.setXY(util.target.x, util.target.y + ${value})\n`
}
Blockly.Blocks.pointTowards = {
    init: function() {
        this.appendDummyInput().appendField('set rotation style').appendField(new Blockly.FieldDropdown([
            ['left-right', 'left-right'],
            ['up-down', 'up-down'],
            ['look at', 'look at'],
            ['don\'t rotate', 'don\'t rotate'],
            ['all around', 'all around']
        ]), "style")
        this.setPreviousStatement(true, "Action")
        this.setNextStatement(true, "Action")
        this.setInputsInline(true)
        this.setColour("#4c97ff")
    },
}
Blockly.JavaScript.forBlock.pointTowards = function(block) {
    const style = block.getFieldValue('style')
    return `util.target.setRotationStyle(${style})\n`
}
Blockly.Blocks.position = {
    init: function() {
        this.appendDummyInput().appendField('position')
        this.setOutput(true, 'Vector')
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.position = function(block) {
    return ['new Vector(util.target.x, util.target.y)', 1.1]
}
Blockly.Blocks.xPosition = {
    init: function() {
        this.appendDummyInput().appendField('x position')
        this.setOutput(true, 'Number')
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.xPosition = function(block) {
    return ['util.target.x', 1.2]
}
Blockly.Blocks.yPosition = {
    init: function() {
        this.appendDummyInput().appendField('y position')
        this.setOutput(true, 'Number')
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.yPosition = function(block) {
    return ['util.target.y', 1.2]
}
Blockly.Blocks.direction = {
    init: function() {
        this.appendDummyInput().appendField('direction')
        this.setOutput(true, 'Number')
        this.setColour("#4c97ff")
    }
}
Blockly.JavaScript.forBlock.direction = function(block) {
    return ['util.target.direction', 1.2]
}