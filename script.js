
const verses = [
    { content: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16" },
    { content: "The Lord is my shepherd, I lack nothing.", reference: "Psalm 23:1" },
    { content: "I can do all this through him who gives me strength.", reference: "Philippians 4:13" },
    { content:"The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you.", reference: "Numbers 6:24-25" },
{ content:"Trust in the Lord with all your heart, and do not lean on your own understanding.", reference: "Proverbs 3:5" },
{ content:"But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness.",reference: "Galatians 5:22" },
{ content:"Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.", reference: "1 Thessalonians 5:16-18" },
{ content:"Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.", reference: "Deuteronomy 31:6" },
{ content:"And we know that for those who love God all things work together for good, for those who are called according to his purpose.", reference: "Romans 8:28" },
{ content:"But seek first the kingdom of God and his righteousness, and all these things will be added to you.",reference: "Matthew 6:33" },
{ content:"The Lord is near to the brokenhearted and saves the crushed in spirit.", reference: "Psalm 34:18" },
{ content:"He gives power to the faint, and to him who has no might he increases strength.", reference: "Isaiah 40:29" },
{ content:"Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
{ content:"And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.", reference: "Colossians 3:17" },
{ content:"But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light.", reference: "1 Peter 2:9" },
{ content:"Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him.", reference: "James 1:12" },
{ content:"Your word is a lamp to my feet and a light to my path.", reference: "Psalm 119:105" },
{ content:"The fear of the Lord is the beginning of wisdom, and the knowledge of the Holy One is insight.", reference: "Proverbs 9:10" },
{ content:"But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.", reference: "Isaiah 40:31" },
{ content:"Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.", reference: "John 14:6" },

];

const verseContent = document.getElementById('verse-content');
const verseReference = document.getElementById('verse-reference');
const newVerseBtn = document.getElementById('new-verse-btn');

function getRandomVerse() {
    return verses[Math.floor(Math.random() * verses.length)];
}

function displayVerse() {
    const verse = getRandomVerse();
    verseContent.textContent = verse.content;
    verseReference.textContent = verse.reference;
}

newVerseBtn.addEventListener('click', displayVerse);


displayVerse();