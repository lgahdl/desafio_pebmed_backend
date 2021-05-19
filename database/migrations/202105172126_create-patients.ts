import Knex, {CreateTableBuilder} from "knex";

exports.up = function(knex: Knex){
  return knex.schema.createTable('patients', (table:CreateTableBuilder)=>{
      table.increments("patient_id").notNullable().primary();
      table.string("name", 100).nullable().defaultTo(null);
      table.decimal("height", 15,2).nullable().defaultTo(null);
      table.decimal("weight", 15, 2).nullable().defaultTo(null);
      table.string("phone_number", 40).nullable().defaultTo(null);
      table.timestamp("birthday").nullable().defaultTo(null);
      table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));
      table.timestamp("updated_at").notNullable().defaultTo(knex.raw("now()"));
  });
}

exports.down = function(knex: Knex){
    return knex.schema.dropTable("patients");
}