export const dataReverse = (data: string): string => {
    const dataTeste = /(^\d{4})(.|-|\/)\d{2}(.|-|\/)\d{2}$/;

    if(!!dataTeste) {
        const da = data.replace(/(^\d{2})[.-\/](\d{2})[.|-|\/](\d{4})$/gi, '$3-$2-$1');
        return da;
    }
    
    return data;
}