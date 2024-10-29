import { Request, Response } from "express";
import { User } from "../entities/user";
import { itemsCollection } from "../repository/userCollection";

export const addUser = async (req: Request, res: Response) => {
  const { name, age }: User = req.body;
  try {
    const docRef = await itemsCollection.add({ name, age });
    res.status(201).send(`User added with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send(`Error adding user: ${error}`);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const snapshot = await itemsCollection.get();
    const users: User[] = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() } as User);
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(`Error retrieving users: ${error}`);
  }
};
