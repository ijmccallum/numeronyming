const numeronym = require('./numeronym');

test('translates a single word', () => {
    expect(numeronym("accessibility")).toEqual("a11y");
});

test('translates multiple words', () => {
    expect(numeronym("accessibility kubernetes internationalization")).toEqual("a11y k8s i18n");
});

test('translates a single word with punctuation', () => {
    expect(numeronym("accessibility.")).toEqual("a11y.");
});

test('translates multiple words with punctuation', () => {
    expect(numeronym("accessibility, kubernetes, & internationalization.")).toEqual("a11y, k8s, & i18n.");
});
