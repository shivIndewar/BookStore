import { createSelector } from "@ngrx/store";
import { WareHouseRecord } from "./warehouse-records";


export interface AppState{
    wareHouseRecords :  WareHouseRecord[];
}

export const selectFeature = (state : AppState) => state.wareHouseRecords;

export const selectAll = createSelector(selectFeature, (state : WareHouseRecord[]) => state);