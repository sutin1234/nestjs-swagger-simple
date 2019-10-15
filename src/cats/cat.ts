import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from 'class-validator';

export class Cat {

    @ApiModelProperty()
    @IsNumber()
    id: number;

    @ApiModelProperty()
    @IsString()
    name: string;
  }