import { z } from 'zod';

const portSchema = z.coerce.number().min(1).max(65535).default(3000);
export const Port = portSchema.parse(process.env.Port);

console.log(`Server will run on port: ${Port} `);