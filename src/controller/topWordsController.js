import { TopWordsHeap } from "../service/wordCloudService.js";

export const topWordsController = (cant,res) => {

    if(cant <= 0){
        res.status(400).json({error : "Number negative or zero"});
    }

    const topWords = TopWordsHeap(cant);

    /*if(topWords.length === 0)
        res.status(404).json({error : "Too many words given"});*/


    res.json(topWords).status(200);
}