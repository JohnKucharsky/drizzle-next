DO $$ BEGIN
 CREATE TYPE "mood" AS ENUM('sad', 'ok', 'happy');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "testTable" ADD COLUMN "mood" "mood" DEFAULT 'ok' NOT NULL;