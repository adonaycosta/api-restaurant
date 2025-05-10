import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("products").del();

    await knex("products").insert([
        {name: "Grilled Chicken Salad", price: 12.99},
        {name: "Spaghetti Carbonara", price: 14.50},
        {name: "Margherita Pizza", price: 10.75},
        {name: "Beef Burger", price: 11.90},
        {name: "Vegetable Stir Fry", price: 9.80},
        {name: "Shrimp Tacos", price: 13.20},
        {name: "Chicken Alfredo Pasta", price: 15.60},
        {name: "BBQ Ribs", price: 17.45},
        {name: "Mushroom Risotto", price: 13.00},
        {name: "Fish and Chips", price: 12.25}
    ]);
};
