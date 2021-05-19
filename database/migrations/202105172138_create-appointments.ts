import Knex from "knex";

exports.up = function(knex: Knex){
    return knex.schema.createTable('appointments', (table)=>{
        table.increments("appointment_id").notNullable().primary();
        table.timestamp("date").nullable().defaultTo(null);
        table.integer("patient_id").unsigned().index()
            .references("patient_id").inTable("patients")
            .onDelete("CASCADE").onUpdate("CASCADE").notNullable();
        table.string("annotations", 200).nullable().defaultTo(null);
        table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));
        table.timestamp("updated_at").notNullable().defaultTo(knex.raw("now()"));
    });
}

exports.down = function(knex: Knex){
    return knex.schema.dropTable("appointments");
}