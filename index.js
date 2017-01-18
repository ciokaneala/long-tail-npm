import unirest from 'unirest';

export const SOURCES = {
	GOOGLE : 'google',
	EBAY   : 'ebay',
	AMAZON : 'amazon',
	YOUTUBE: 'youtube'
};

export default class LongTail {
	constructor(apiKey) {
		this.apiKey = apiKey;
	}

	suggest(keyword, callback, country = 'us', language = 'en', source = SOURCES.GOOGLE) {
		unirest.post("https://ciokan-keyword-suggestion-v1.p.mashape.com/api/keyword/suggest/")
			.header("X-Mashape-Key", this.apiKey)
			.header("Content-Type", "application/x-www-form-urlencoded")
			.header("Accept", "application/json")
			.send(`country=${country}`)
			.send(`keyword=${keyword}`)
			.send(`language=${language}`)
			.send(`source=${source}`)
			.end((result) => {
				if (result.status != 200) {
					callback(result.error ? result.error : "Error fetching suggestions");
				} else {
					const res = result.body;

					if (res.error) {
						callback(res.error);
					} else {
						callback(null, 'results' in res ? res['results'] : []);
					}
				}
			});
	}
}