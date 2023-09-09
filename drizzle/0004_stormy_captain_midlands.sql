CREATE TABLE IF NOT EXISTS "testTable" (
	"id" serial PRIMARY KEY NOT NULL,
	"qty" bigint,
	"price" numeric(7, 2),
	"score" double precision,
	"delivered" boolean,
	"description" varchar(256),
	"date" timestamp
);
