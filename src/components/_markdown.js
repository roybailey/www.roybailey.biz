import showdown from 'showdown'

export default (text) => {
    const converter = new showdown.Converter();
    converter.setFlavor('github');
    return converter.makeHtml(text);
} 