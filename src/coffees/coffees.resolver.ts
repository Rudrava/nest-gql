import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entitiy.ts/coffee.entitiy.ts';
import { ParseIntPipe } from '@nestjs/common';

@Resolver()
export class CoffeesResolver {
  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return [];
  }
  @Query(() => Coffee, { name: 'coffee', nullable: true })
  async findOne(
    @Args('id', { type: () => ID, name: 'id' }, ParseIntPipe) id: number,
  ) {
    console.log(id);
    return null;
  }
}
