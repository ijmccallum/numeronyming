module.exports = (text) => {
    //split into array of words & punctuation
    let textArray = text.match(/\w+|\s+|[^\s\w]+/g);
    //for each word, replace middle letters with the number of characters
    let shortenedArray = textArray.map((chunk) => {
        if (/^[a-z]+$/i.test(chunk)) {
            let num = chunk.length - 2;
            return `${chunk[0]}${num}${chunk[chunk.length - 1]}`
        }

        return chunk;
    });
    //join array and return
    return shortenedArray.join('');
}