import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { actionList } from "./warehouse-records.actions";
import { EMPTY, exhaustMap, map, catchError } from "rxjs";
import { BookserviceService } from "../sharedservices/bookservice.service";

@Injectable()
export class WareHouseRecordsEffeccts{


    actions$ = inject(Actions);
    booksService = inject(BookserviceService);

    loadStudentsRecords$ = createEffect(() => this.actions$.pipe(
        ofType(actionList.callWarehousrRecordsApi),
        exhaustMap(() => this.booksService.getWareHpiseProducts()
        .pipe(
            map(wareHouseRecords => ({ type: actionList.callWarehousrRecordsApiSuccess, payload: wareHouseRecords })),
            catchError(() => EMPTY)
        ))
    ));
}
