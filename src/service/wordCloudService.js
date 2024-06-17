import { stopWords } from "../utils/stopwords.js";
import MinHeap from "heap";

let topWordsHeap = new MinHeap((a,b) => a.count - b.count);

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

}


export function TopWordsHeap(cant){

    /*if(cant > topWordsHeap.size()){
        return [];
    }*/

    wordCounts.forEach((count,word)=>{

        
        if(topWordsHeap.size() < cant){
            topWordsHeap.push({word,count});
        }
        else if (count > topWordsHeap.peek().count){

            topWordsHeap.pop();
            topWordsHeap.push({word,count})
        }
    });

    const topWords = []

    while(topWordsHeap.size() > 0)
        topWords.push(topWordsHeap.pop());

    return topWords;
}
