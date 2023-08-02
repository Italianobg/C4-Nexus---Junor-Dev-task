export function removeFromArray(arr: Array<string>, item: string): Array<string> {
    let index: number = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}