import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GranitTypeService } from "./granitType.service";
import { GranitTypeControllerBase } from "./base/granitType.controller.base";

@swagger.ApiTags("granitTypes")
@common.Controller("granitTypes")
export class GranitTypeController extends GranitTypeControllerBase {
  constructor(protected readonly service: GranitTypeService) {
    super(service);
  }
}
