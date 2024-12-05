import { createReducer } from "@ngrx/store";
import { WareHouseRecord } from "./warehouse-records";

export const initState : ReadonlyArray<WareHouseRecord> = [
    {
        categpryName : "Test",
        categoryId : 1,
        products : [{
            productId: 1,
            productName: "Test Product",
            productDescription: "Test prod desc",
            productUsage: "Test usage",
            categoryId: 1,
            productSerieasNo: "DRX",
            productInnerWidth: 10,
            productOuterWidth: 15,
            productInnerHeight: 10,
            productOuterHeight: 15,
            productBendingRadius: "45",
            productPitch: 10,
            productLinkPerMeter: 45
        }],
        cateogyDescription:"cat desc",
        brand : "test",
        usage : "tes usage cat"
    }];

    export const wareHouseReducer = createReducer(
        initState
    );