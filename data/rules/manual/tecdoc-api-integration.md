---
description: "General rules for working with the TecDoc APIs and getting parts for vehicles"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "Birkis/bilxtra-product-updater"
__meta__service: "TecDoc"
__meta__tags: ["API","Vehicle Data","Integration","Testing","Credits Management"]
__meta__rate: 7
---
# Working with TecDoc

## SUPER IMPORTANT:

Never forget that running the 'getVehiclesByKeyNumberPlates' to get a car ID from a license plate costs us a credit each time. We only have 99 credits, so use them very very sparingly in testing.


## What files to use

When working with TecDoc and their APIs we're using the [+server.ts](mdc:src/routes/api/tecdoc/parts/+server.ts) and the [+server.ts](mdc:src/routes/api/tecdoc/vehicle/+server.ts) to test.


## What default values to use

For the license plate request:

```json
{
  "getVehiclesByKeyNumberPlates": {
    "country": "NO",
    "details": true,
    "keySystemNumber": "EB34033",
    "keySystemType": 95,
    "lang": "no",
    "provider":"20260"
  }
}
```

We get this response:
```json
{
    "data": {
        "array": [
            {
                "carId": 138779,
                "carName": "AUDI E-TRON (GEN) 50 quattro",
                "country": "NO",
                "linkingTargetType": "P",
                "subLinkageTargetType": "V",
                "manuId": 5,
                "modelId": 39213,
                "vehicleDetails": {
                    "engineCode": "EAWA",
                    "engineCodes": [
                        "EAWA"
                    ],
                    "registrationNumber": "EB34033",
                    "tecDocNumber": "138779",
                    "tecDocType": "PASSENGER"
                }
            }
        ]
    },
    "status": 200
}
```

registrationNumber: "EB34033" == TecDocNumber: 138779