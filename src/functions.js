/**
 * 
 * @param {string} text 
 * @param {string} indentationString 
 * 
 * @returns {string}
 */
 function createDocumentationComment(text, indentationString) {
    // Add the [indentationString] to all but the first line
    return text.trim().split("\n").map((line, index) => ((index > 0) ? `${indentationString}` : ``) + `/// ${line}`).join("\n")
}

Pulsar.registerFunction("createDocumentationComment", createDocumentationComment)

function fontWeightName(subfamily) {
    const map = {
        '100': 'Thin',
        '200': 'ExtraLight',
        '300': 'Light',
        '400': 'Regular',
        '500': 'Medium',
        '600': 'SemiBold',
        '700': 'Bold',
        '800': 'ExtraBold',
        '900': 'Black'
    }
    return map[String(subfamily)] || subfamily
}

Pulsar.registerFunction("fontWeightName", fontWeightName)

function buttonStyleName(groupName) {
    return groupName.charAt(0).toUpperCase() + groupName.slice(1) + "ButtonStyle"
}

Pulsar.registerFunction("buttonStyleName", buttonStyleName)

function toLowerCase(str) {
    return String(str).toLowerCase()
}

Pulsar.registerFunction("toLowerCase", toLowerCase)

function lowerFirst(str) {
    const s = String(str)
    if (!s) return s
    return s.charAt(0).toLowerCase() + s.slice(1)
}

Pulsar.registerFunction("lowerFirst", lowerFirst)
