import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Coffee {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  brand: string;
  @Field(() => [String])
  flavors: string[];
}
