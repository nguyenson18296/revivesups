export const formatCurrency = (price: number) => {
    return price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}