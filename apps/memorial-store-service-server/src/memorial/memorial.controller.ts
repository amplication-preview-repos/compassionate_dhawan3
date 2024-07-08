import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MemorialService } from "./memorial.service";
import { MemorialControllerBase } from "./base/memorial.controller.base";

@swagger.ApiTags("memorials")
@common.Controller("memorials")
export class MemorialController extends MemorialControllerBase {
  constructor(protected readonly service: MemorialService) {
    super(service);
  }
}
