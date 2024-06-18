import { fetchDescription } from "../service/amazonService.js";
import {
  processDescription,
  TopWordsHeap,
} from "../service/wordCloudService.js";

import { isIDinCache } from "../utils/cache.js";
import { parseURL } from "../utils/url.js";

export class ProductService {
  getDescriptionByID = async (url) => {
    const productID = parseURL(url);

    if (!isIDinCache(productID)) {
      const description = await fetchDescription(productID);

      if (description.length > 0) processDescription(description);
    }
  };

  getNTopWords = (cant, res) => {
    if (cant <= 0) res.status(400).json({ error: "Number negative or zero" });

    const topWords = TopWordsHeap(cant);

    return topWords.reverse();
  };
}
