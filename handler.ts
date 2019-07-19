import { Application } from "./src/Application";
import { Hello } from "./src/Controllers/Hello";

const app = new Application();

const hello = new Hello(app);

export const helloWorld = hello.getHelloWorld;
export const helloFriend = hello.helloMyFriend;
