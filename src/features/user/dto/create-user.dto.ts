export class CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  parent_information: {
    father: string;
    mother: string;
  };
}
