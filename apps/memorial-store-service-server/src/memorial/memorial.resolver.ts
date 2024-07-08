import * as graphql from "@nestjs/graphql";
import { MemorialResolverBase } from "./base/memorial.resolver.base";
import { Memorial } from "./base/Memorial";
import { MemorialService } from "./memorial.service";

@graphql.Resolver(() => Memorial)
export class MemorialResolver extends MemorialResolverBase {
  constructor(protected readonly service: MemorialService) {
    super(service);
  }
}
