ALTER TABLE "profiles" ADD COLUMN "id" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "bio" varchar(256);--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "user_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
