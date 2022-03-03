import { IsNumber, IsString } from "class-validator";

export class ConvertDto {
	@IsString()
	currency: string;

	@IsNumber()
	amount: number
}