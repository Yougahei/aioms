import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateOderRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  price: number;

  @IsString()
  phoneNumber: string;
}
