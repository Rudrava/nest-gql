import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCoffeeDto {
  @Field()
  name: string;
  @Field()
  brand: string;
  @Field(() => [String])
  flavors: string[];
}
