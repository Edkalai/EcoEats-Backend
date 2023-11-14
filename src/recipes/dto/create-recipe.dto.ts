export class CreateRecipeDto {
    image?: string;
    title: string;
    description: string;
    ingredient?: string;
    quantity: number;
    comment?: string; // Add this line for comments
  }
  