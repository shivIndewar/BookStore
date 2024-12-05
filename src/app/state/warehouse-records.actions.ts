import { createAction, props } from "@ngrx/store";
import { WareHouseRecord } from "./warehouse-records";


export const actionList = {
    callWarehousrRecordsApi : "[ Side Panel Component ] call warehouse records api",
    callWarehousrRecordsApiSuccess : "[ Side Panel Component ] call warehouse records api success"
};

export const callWarehousrRecordsApi  = createAction(actionList.callWarehousrRecordsApi);
export const callWarehousrRecordsApiSuccess = createAction(actionList.callWarehousrRecordsApiSuccess, props<{ payload: WareHouseRecord []}>());
