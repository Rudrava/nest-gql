import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Coffee {
  @Field(() => ID)
  id: number;
  @Field()
  name: string;
  @Field()
  brand: string;
  @Field(() => [String])
  flavors: string[];
}
