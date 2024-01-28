import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entitiy.ts/coffee.entitiy.ts';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto.js';

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

  @Mutation(() => Coffee, { name: 'createCoffee', nullable: true })
  async create(@Args('coffeeInput') coffeeInput: CreateCoffeeDto) {
    console.log(coffeeInput);
    return null;
  }
}
