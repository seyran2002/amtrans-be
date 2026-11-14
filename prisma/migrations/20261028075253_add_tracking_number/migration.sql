/*
  Add trackingNumber safely without deleting existing orders.
*/

-- 1. Add the column as nullable.
ALTER TABLE "Order"
ADD COLUMN "trackingNumber" TEXT;

-- 2. Generate tracking numbers for existing orders.
UPDATE "Order"
SET "trackingNumber" =
    'AMT-' || upper(
        substr(
            md5(random()::text || clock_timestamp()::text || "id"::text),
            1,
            6
        )
    )
WHERE "trackingNumber" IS NULL;

-- 3. Make the column required.
ALTER TABLE "Order"
ALTER COLUMN "trackingNumber" SET NOT NULL;

-- 4. Enforce uniqueness.
CREATE UNIQUE INDEX "Order_trackingNumber_key"
ON "Order"("trackingNumber");
