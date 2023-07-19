export type Flight = {
    date: any;
    destination_city: City;
    origin_city: City;
    no_passengers: number;
}

export type City = {
    code: string;
    name: string;
}