## Long tail keyword suggestion tool

This module pulls data from a paid API. A very cheap API but still a paid one. As of this moment it costs $0.002 to
create a request and retrieve anywhere from **300** to **800** long tail suggestions. The results are pulled from the
search inputs from the various sources available (currently: eBay, Amazon, Google, Youtube) so the keywords are highly 
relevant and related to the provided keyword.

### Where to use this package

This package fits very well inside applications that has anything to do with SEO, writing blogs posts of articles. By
using this package a writer can gain insights into what is also popular regarding a given topic/keyword. This way he/she
is able to address more targeted visitors which are known to convert better since they are not browsing for a wide
keyword but a rather specific topic.

Since the results are being pulled out of the search bar from these services, the keywords are highly targeted and 
related. One could also do marketing research to see what products are in high demand when using the Amazon or eBay
service.

If you want to publish videos on youtube it's also recommended to do a research with this package. You can immediately
find out long tails that are guaranteed to drive traffic since it's what the users request anyway. Targeting long
tails makes the job easier because, the deeper you go, the lower the competition targeting the same audience.

![Alt text](bs/longtail.png "Long tail breakdown")

### Getting your API key

To get your API key you need to head over to the project's [API homepage](https://market.mashape.com/heroico/long-tail-keyword-suggestion),
which is hosted by mashape, and signup to the freemium plan which includes 5 free requests per day.

### How to use this package

There is 

```javascript
import LongTail, {SOURCES} from 'long-tail';

const tail = new LongTail('<mashape-api-token>');

/**
*     First param is the keyword with the second
*     being the callback for the results.
*     
*     Thirs param is the country in which you wish
*     to perform the search.
*     
*     Fourth param is the language code
*     
*     Fifth param is the service against you wish to
*     perform the research:
*     
*           - SERVICE.[GOOGLE, YOUTUBE, AMAZON, EBAY]
*           
*     For more info and alowed values please visit the
*     API page linked in this readme.
*/
tail.suggest('chickens', (error, results) => {
	if (error) {
		//	do something with error
	} else {
		results.forEach((keyword) => {
			console.log(keyword);
		});
	}
}, 'us', 'en', SOURCES.GOOGLE);
```