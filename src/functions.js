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
