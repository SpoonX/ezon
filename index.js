module.exports = (definitionString, options = {}) => {
  let unQuotedRegex = /:\s*"?([^\s{},"'\\]+(?:\\.[^\s{},"'\\]*|\s+[^\s{},"'\\]*)*)"?/g;

  definitionString = definitionString.replace(/^\{|\}$/g, '').split(',').map(definition => {
    if (definition.search(':') === -1) {
      return `${options.defaultKey || definition}:'${definition}'`;
    }

    return definition;
  }).join(',');

  definitionString = `{${definitionString}}`;

  let formattedDefinitionString = definitionString.replace(unQuotedRegex, (x, y) => {
    if (y === 'true' || y === 'false') {
      return x;
    }

    if (/^\d+$/.test(y)) {
      return `:${y}`;
    }

    return `:"${y}"`;
  });

  eval('fieldDefinition = ' + formattedDefinitionString);

  return fieldDefinition;
};