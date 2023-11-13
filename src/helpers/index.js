import { createElement } from 'react';

const roundTo2Dec = function (value) {
    return value % 1 !== 0 ? parseFloat(value).toFixed(2) : value;
}

const insertGapInline = function (emptyCharacters) {
    return createElement('span', {}, "\u00a0".repeat(emptyCharacters));
};

export { roundTo2Dec, insertGapInline };
