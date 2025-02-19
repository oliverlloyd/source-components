const fontSizes = [12, 15, 17, 20, 24, 28, 34, 42, 50, 70]

const fonts = {
	headlineSerif: "GH Guardian Headline, Georgia, serif",
	bodySerif: "GuardianTextEgyptian, Georgia, serif",
	bodySans:
		"GuardianTextSans, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
}

const lineHeights = ["1.15em", "1.35em", "1.45em"]

const fontWeights = [300, 400, 500, 700]

// Arrays of colours should have pillar colors first
// e.g. for sport:
// const [dark, main, bright, pastel, faded] = colors.blue
const colors = {
	reds: [
		"#ab0613", //news-dark
		"#c70000", //news-main
		"#ff4e36", //news-bright
		"#ffbac8", //news-pastel
		"#fff4f2", //news-fade
	],
	oranges: [
		"#AB0613", //opinion-dark
		"#E05E00", //opinion-main
		"#FF7F0F", //opinion-bright
		"#F9B376", //opinion-pastel
		"#FEF9F5", //opinion-faded
	],
	blues: [
		"#005689", //sport-dark
		"#0084C6", //sport-main
		"#00B2FF", //sport-bright
		"#90DCFF", //sport-pastel
		"#F1F8FC", //sport-faded
		"#041F4A", //brand-dark
		"#052962", //brand-main
		"#0077B3", //brand-bright
		"#506991", //brand-pastel
		"#B6C5DB", //brand-faded
	],
	browns: [
		"#6B5840", //culture-dark
		"#A1845C", //culture-main
		"#EACCA0", //culture-bright
		"#E7D4B9", //culture-pastel
		"#FBF6EF", //culture-faded
	],
	pinks: [
		"#7D0068", //lifestyle-dark
		"#BB3B80", //lifestyle-main
		"#FFABDB", //lifestyle-bright
		"#FEC8D3", //lifestyle-pastel
		"#FEEEF7", //lifestyle-faded
	],
	yellows: [
		"#F3C100", //highlight-dark
		"#FFE500", //highlight-main
	],
	greens: [
		"#185E36",
		"#22874D",
		"#65A897", //labs-dark
		"#69D1CA", //labs-main
	],
	grays: [
		"#121212", //neutral-7
		"#1a1a1a", //neutral-10
		"#333333", //neutral-20
		"#767676", //neutral-46
		"#999999", //neutral-60
		"#d9d9d9", //neutral-85
		"#dcdcdc", //neutral-86
		"#ededed", //neutral-93
		"#f6f6f6", //neutral-97
		"#ffffff", //neutral-100
		"#3F464A", //special-report
	],
}

const space = [3, 6, 12, 18, 24, 36, 48, 96]

const size = [24, 36, 44]

const breakpoints = [740, 980, 1140, 1300]

// Diverges from https://system-ui.com
// At these widths, there are tweaks to the
// fluid grid on mobile devices
const tweakpoints = [375, 480, 660]

const transitions = [
	".2s cubic-bezier(.64, .57, .67, 1.53)",
	".3s ease-in-out",
	".65s ease-in-out",
]

export {
	fontSizes,
	fonts,
	lineHeights,
	fontWeights,
	colors,
	space,
	size,
	breakpoints,
	tweakpoints,
	transitions,
}
