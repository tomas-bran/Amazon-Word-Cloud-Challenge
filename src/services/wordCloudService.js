import { stopWords } from "../utils/stopwords.js";

let wordCounts = new Map();

export function processDescription (description){

    const cleanDescription = description.replace(/[^\w\s']/g, ' ');
    const words = cleanDescription.toLowerCase().split(/\s+/);

    words.forEach(word => {
        if(!stopWords.has(word)){
            const currentCount = wordCounts.get(word) || 0;
            wordCounts.set(word, currentCount + 1);
        }
    });

    console.log(wordCounts);
}