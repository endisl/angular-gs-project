export interface Product {
    id: number  //"Alterei id?: por id:"" senão dá erro em product-read2-datasources.ts //Alteração 1
    name: string
    price?: number
}