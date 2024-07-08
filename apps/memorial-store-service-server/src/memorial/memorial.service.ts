import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MemorialServiceBase } from "./base/memorial.service.base";

@Injectable()
export class MemorialService extends MemorialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
