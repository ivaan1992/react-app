import connectApi from './base';

const CHAR = 'character';

const fetchChars = (page) => connectApi(page, CHAR);

export default fetchChars;
