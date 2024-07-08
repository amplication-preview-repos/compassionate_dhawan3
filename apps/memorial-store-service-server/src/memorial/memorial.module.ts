import { Module } from "@nestjs/common";
import { MemorialModuleBase } from "./base/memorial.module.base";
import { MemorialService } from "./memorial.service";
import { MemorialController } from "./memorial.controller";
import { MemorialResolver } from "./memorial.resolver";

@Module({
  imports: [MemorialModuleBase],
  controllers: [MemorialController],
  providers: [MemorialService, MemorialResolver],
  exports: [MemorialService],
})
export class MemorialModule {}
