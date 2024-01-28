import { Query, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entitiy.ts/coffee.entitiy.ts';

@Resolver()
export class CoffeesResolver {
  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return [];
  }
}
