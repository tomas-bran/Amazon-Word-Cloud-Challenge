import { fetchDescription } from "../services/amazonServices.js";
import { isValidURL } from "../utils/url.js"


export const productController = async(url,res) => {
    if(!isValidURL(url))
        return res.status(400).json({error: 'Invalid URL'});
    
    //realizar un get usando axios 
    const description = await fetchDescription(url);

    //aca haria la remove de las palabras exceptuadas de mi descrip
    //hacer un json de excepciones con las palabras a eliminar o un vector con esas palabras
    //y comparar entre ambos elementos y sacarlo

    //el segundo filtrado seria removeDuplicates, eliminando las palabras duplicadas de mi descripcion
    //teniendo la palabra con la cantidad de ocurrencias

    

    res.send(description);
}