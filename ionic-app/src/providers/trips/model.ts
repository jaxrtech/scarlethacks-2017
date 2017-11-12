
export interface JsonTrip {
    id: string,
    name: string,
    address: string,
    lat_lng: {
        lat: number,
        lng: number,
    }
    phone_number: string,
    photos: string[],
    reviews: string[]
    rating: number,
    sentiment: number,
    duration: number
}