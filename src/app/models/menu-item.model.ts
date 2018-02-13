export class MenuItemModel{
    id:string ;
    name:string ;
    frontImg:string ;
    rate:number ;
    briefDesc:string ;
    vendorName:string ;
    rating: {
        avgRating:number,
        likes:number
    };
    isActive:boolean ;
    stock:number ;
    discount:number ;
    ishomeDeliveryAvailable:boolean;
}