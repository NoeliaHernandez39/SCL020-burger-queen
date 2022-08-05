
export function SaveDataInStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

export function GetDataInStorage(key){
    return JSON.parse(localStorage.getItem(key));
}