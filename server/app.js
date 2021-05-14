var express = require('express');

const PRODUCTS = [
    {
        pid: "4f2a635e-4b55-47e7-809d-2700eccda4f8",
        name: "Predovic Inc",
        brand: "Geba",
        image: "https://image.shutterstock.com/image-illustration/mobile-phone-on-white-backgroundcell-600w-251329036.jpg",
        price: "$617.64",
        ip_address: "246.237.74.73",
    },
    {
        pid: "7f13b4d8-12cb-4f74-ab2d-fd65c7467cff",
        name: "Upton Group",
        brand: "Agivu",
        image: "https://image.shutterstock.com/image-vector/new-phone-front-black-vector-600w-1362542807.jpg",
        price: "$785.61",
        ip_address: "66.37.242.66",
    },
    {
        pid: "5a823009-6221-4925-8b58-7da3a29aacaa",
        name: "Zemlak Inc",
        brand: "Realbuzz",
        image: "https://image.shutterstock.com/image-vector/vector-illustration-modern-phone-halved-600w-196100984.jpg",
        price: "$997.07",
        ip_address: "137.114.207.226",
    },
    {
        pid: "3804d6dc-9c14-467b-b072-b55f9aa1cad1",
        name: "Gibson-Terry",
        brand: "Gigaclub",
        image: "https://image.shutterstock.com/image-vector/this-illustration-smartphone-600w-1697019841.jpg",
        price: "$856.72",
        ip_address: "59.198.250.58",
    },
    {
        pid: "ead997da-01b7-47c9-9a23-0215f250381c",
        name: "Kirlin-Ruecker",
        brand: "Rhynyx",
        image: "https://image.shutterstock.com/image-vector/this-illustration-smartphone-600w-1697019841.jpg",
        price: "$577.66",
        ip_address: "17.23.97.106",
    },
    {
        pid: "0ea6d311-d2c4-41df-96f5-7f2dc444439e",
        name: "Collier-Grimes",
        brand: "Reallinks",
        image: "https://image.shutterstock.com/image-vector/smartphone-vector-illustration-flat-style-600w-1225631506.jpg",
        price: "$894.44",
        ip_address: "25.10.192.173",
    },
    {
        pid: "38f6ef2a-d0fd-4caf-a131-99a4c3c62934",
        name: "Kuvalis Group",
        brand: "Riffpath",
        image:"https://image.shutterstock.com/image-vector/new-phone-front-black-vector-600w-1362542807.jpg",
        price: "$585.01",
        ip_address: "200.69.167.209",
    },
    {
        pid: "ec3d6c50-9d8a-40a7-839a-b80cabe0ab35",
        name: "Weissnat-O'Conner",
        brand: "Thoughtstorm",
        image: "https://image.shutterstock.com/image-vector/new-phone-front-black-vector-600w-1362542807.jpg",
        price: "$709.93",
        ip_address: "51.135.216.111",
    },
    {
        pid: "37e5d60c-1b37-4298-912d-7a69f53939c9",
        name: "Braun-Barton",
        brand: "Yacero",
        image: "https://image.shutterstock.com/image-vector/smartphone-vector-illustration-flat-style-600w-1225631506.jpg",
        price: "$897.07",
        ip_address: "17.4.32.190",
    },
    {
        pid: "4870f96d-5711-421c-a7df-89328e67813d",
        name: "Rau LLC",
        brand: "Skiptube",
        image: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: "$894.15",
        ip_address: "130.248.48.36",
    },
];

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', (req, res) => {
	res.send(PRODUCTS);
});

app.listen(8080, function () {
    console.log('Port running at 8080!');
});
