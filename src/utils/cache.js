let mapID = new Map();

export function isIDinCache(productID){

    if(!mapID.has(productID)){
        mapID.set(productID,true);
        return false;
    }

    return true;
}