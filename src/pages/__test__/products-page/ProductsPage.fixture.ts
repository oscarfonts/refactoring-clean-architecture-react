import productsResponse from './data/productsResponse.json';
import {MockWebServer} from '../../../tests/MockWebServer.ts';

export function givenAProducts(mockWebServer: MockWebServer) {
    mockWebServer.addRequestHandlers([
        {
            method: "get",
            endpoint: `https://fakestoreapi.com/products`,
            httpStatusCode: 200,
            response: productsResponse,
        },
    ]);
}

export function givenNoProducts(mockWebServer: MockWebServer) {
    mockWebServer.addRequestHandlers([
        {
            method: "get",
            endpoint: `https://fakestoreapi.com/products`,
            httpStatusCode: 200,
            response: [],
        },
    ]);
}
