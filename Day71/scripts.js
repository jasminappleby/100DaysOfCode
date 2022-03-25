const zodiac = [
	{
		zodiacName: "aries",
		birthdayRange: "March 21 - April 19",
		attributes: "Aries are fire signs and those born under this element are regarded in astrology as adventurous, active and outgoing. I know so many Aries that are just absolute chaos to be around and completely self centred. Talk about themselves a lot. Exhausting...",
	},
    {
        zodiacName: "taurus",
        birthdayRange: "April 20 - May 20",
        attributes: "Taureans manage to discreetly stay apart from the crowd, even though they have a well earned reputation for being socialisers. Very stubborn and borderline rude. Sometimes make really uncomfortable comments or cause really unnessecary drama because they thrive off that attention.",
    },
    {
        zodiacName: "gemini",
        birthdayRange: "May 21 - June 20",
        attributes: "Terminally curious and sometimes even mischievous, Geminis are multi-faceted souls who enjoy knowing a little bit of everything but generally not too much about one particular subject. Geminis get a bad rep, I know a lot of great Gemini people who are caring and supportive. Geminis are the friend that you don't talk to for years, but can get together with and have a great time like old times.",
    },
	{
        zodiacName: "cancer",
		birthdayRange: "June 21 - July 22",
		attributes: "It is fair to say that most Cancers are a bundle of contradictions. Compassionate and caring with friends, family and lovers, yet they can cut to the bone with their jealous remarks and ever-changing moods. Endearingly eccentric on one hand, and on the other, insecure about how others see them. As a cancer myself, I completely agree. Very emotional beings with a lot of deep routed anger towards trigger points.",
	},
    {
        zodiacName: "leo",
        birthdayRange: "July 23 - August 22",
        attributes: "People born under the sign of Leo are natural born leaders. They are dramatic, creative self-confident, dominant and extremely difficult to resist. They can achieve anything they want, whether it's about work or time spent will family and friends. LIFE OF THE PARTY. Leos are really great vibes. Personally I think it's because they're summer babies. Not a single complaint about them.",
    },
    {
        zodiacName: "virgo",
        birthdayRange: "August 23 - September 22",
        attributes: "Virgos are often put down badly by many astrologers and written up as being fussy and narrow-minded. But when a Virgo shines, there is practically no sign to match their inner light. An in-tune Virgo is a treat to meet. Perfectionists. That is enough to explain the fussy, stuck up part. They're just trying to keep everything up with their standards. This time of year usually is lovely weather in the UK. Good time to have a birthday.",
    },
	{
        zodiacName: "libra",
        birthdayRange: "September 23 - October 22",
        attributes: "Libra is obsessed with symmetry and strives to create equilibrium in all areas of life. Sometimes they can be slobs, or just disorganised. This also leads into laziness, causing lateness to commitments. They are born in the most boring part of September and October where summer is more than certainly over and Halloween is not happening yet. I feel bad for them.",
    },
    {
        zodiacName: "scorpio",
        birthdayRange: "October 23 - November 21",
        attributes: "Reputed to be the most powerful sign of the zodiac, Scorpios lead fate filled lives and have intense and dramatic personal relationships. They suck at showing emotion though, which is a major downfall. They really don't understand why people cry, and are often seen as heartless. If you are even the slightest into Astrology, you may have gathered Scorpios are really intense with things of a sexual nature. Halloween + Firework night babies, with the addition of potential Thanksgiving babies.",
    },
    {
        zodiacName: "sagittarius",
        birthdayRange: "November 22 - December 21",
        attributes: "Sagittarians possess a natural exuberance, sense of adventure and love of life that makes them one of the most optimistic zodiac signs of all. However optimistic they may be, they can be pretty toxic and very good at putting people down. This may be due to being a fire sign or just because people shorten their starsign name down to 'Sag'.",
    },
    {
		zodiacName: "capricorn",
		birthdayRange: "December 22 - January 19",
		attributes: "The sign of the high roller, Capricorn is regarded as the zodiac top, but also quiet, life and business achievers. Capricons are cheap to be friends with, because you can get them a birthday + Christmas present wrapped into one! They hate it! Their starsign also gets hit by unfortunate New Years resolutions AND Blue Monday. They literally just get absolutely shafted by the world. I know nothing about Capricons because their birthdays are so unforgettable.",
	},
    {
        zodiacName: "aquarius",
        birthdayRange: "January 20 - February 18",
        attributes: "Although they can easily adapt to the energy that surrounds them, Aquarius representatives have a deep need to have some time alone and away from everything in order to restore power. If you tell an Aquarius to do something, no matter how outlandish it may be, they are going to do it. They do not get angry often, or nfact even show their emotions, but when they get angry.... you are going to know about it!!",
    },
	{
		zodiacName: "pisces",
		birthdayRange: "February 19 - March 20",
		attributes: "Mysterious and alluring individuals, most Pisces are extremely talented, but even though they are gifted in many ways, they still manage to spend most of their lives battling confusing conditions. Picses are always the victim, no matter the event. This therefore means they cannot take responsibility for any action that is considered bad or unacceptable. Not the best!",
	}
	
]

function astSign() {
	
	let userInput = document.getElementById("your-sign").value.toLowerCase()
	
	let sign = document.getElementById("yourSign")
	let range = document.getElementById("birthdayRange")
	let attributes = document.getElementById("attributes")

	for(i = 0; i < zodiac.length; i++) {
		if(userInput == zodiac[i].zodiacName) {
			sign.innerHTML = zodiac[i].zodiacName
			range.innerHTML = zodiac[i].birthdayRange
			attributes.innerHTML = zodiac[i].attributes
			return
		} else {
			sign.innerHTML = "oops! That's not a sign. Try again"
			range.innerHTML = " "
			attributes.innerHTML = " "
		}
	}
}

//not sure why pressing enter refreshes the page, its super annoying