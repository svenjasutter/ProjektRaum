import 'leaflet';

declare module 'leaflet' {
    interface PolylineOptions {
        name?: string;
    }
}
