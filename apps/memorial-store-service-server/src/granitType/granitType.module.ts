import { Module } from "@nestjs/common";
import { GranitTypeModuleBase } from "./base/granitType.module.base";
import { GranitTypeService } from "./granitType.service";
import { GranitTypeController } from "./granitType.controller";
import { GranitTypeResolver } from "./granitType.resolver";

@Module({
  imports: [GranitTypeModuleBase],
  controllers: [GranitTypeController],
  providers: [GranitTypeService, GranitTypeResolver],
  exports: [GranitTypeService],
})
export class GranitTypeModule {}
