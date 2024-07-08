import * as graphql from "@nestjs/graphql";
import { GranitTypeResolverBase } from "./base/granitType.resolver.base";
import { GranitType } from "./base/GranitType";
import { GranitTypeService } from "./granitType.service";

@graphql.Resolver(() => GranitType)
export class GranitTypeResolver extends GranitTypeResolverBase {
  constructor(protected readonly service: GranitTypeService) {
    super(service);
  }
}
