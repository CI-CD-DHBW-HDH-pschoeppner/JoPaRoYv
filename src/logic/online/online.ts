import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);

export function generateID(): string {
  return nanoid();
}
