import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GranitTypeServiceBase } from "./base/granitType.service.base";

@Injectable()
export class GranitTypeService extends GranitTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
