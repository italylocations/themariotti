import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

// ─── Load .env.local manually (no dotenv dependency) ──────────────────────
const envPath = ".env.local";
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const [key, ...rest] = line.split("=");
    if (key && rest.length) process.env[key.trim()] ??= rest.join("=").trim();
  }
}

// ─── Config ────────────────────────────────────────────────────────────────
const ENDPOINT  = process.env.R2_ENDPOINT ?? (process.env.R2_ACCOUNT_ID ? `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com` : null);
const ACCESS_KEY = process.env.R2_ACCESS_KEY_ID;
const SECRET_KEY = process.env.R2_SECRET_ACCESS_KEY;
const BUCKET     = process.env.R2_BUCKET ?? "themariotti";

if (!ENDPOINT || !ACCESS_KEY || !SECRET_KEY) {
  console.error(
    "Missing R2 credentials.\n" +
    "Add to .env.local:\n" +
    "  R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com\n" +
    "  R2_ACCESS_KEY_ID=...\n" +
    "  R2_SECRET_ACCESS_KEY=..."
  );
  process.exit(1);
}

const client = new S3Client({
  region: "auto",
  endpoint: ENDPOINT,
  credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
});

// ─── Mapping: local filename → R2 key ─────────────────────────────────────
const MAPPING = [
  // traditions
  ["IMG_3151.jpg",                                          "traditions/fisherman-octopus.jpg"],
  ["italian-lifestyle-locations-portrait-photography9.jpg", "traditions/octopus-detail.jpg"],
  ["IMG_5081.jpg",                                          "traditions/fisherman-nets.jpg"],
  ["IMG_6338.jpg",                                          "traditions/grape-harvest-crates.jpg"],
  ["italian-lifestyle-locations-portrait-photography23.jpg","traditions/wine-press-group.jpg"],
  ["italian-lifestyle-locations-portrait-photography15.jpg","traditions/wine-press-portrait.jpg"],
  ["IMG_5252.jpg",                                          "traditions/sicilian-cart-wheel.jpg"],
  ["IMG_3009.jpg",                                          "traditions/alpine-cow-mountains.jpg"],
  // coastline
  ["IMG_4783.jpg",                                          "coastline/positano-striped-umbrellas.jpg"],
  ["IMG_4812.jpg",                                          "coastline/positano-nautical-rope.jpg"],
  ["IMG_4797.jpg",                                          "coastline/positano-color.jpg"],
  ["IMG_4977.jpg",                                          "coastline/capri-boat-fontelina.jpg"],
  ["IMG_2839.jpg",                                          "coastline/storm-cloud-sea-rays.jpg"],
  ["IMG_4274.jpg",                                          "coastline/sculptural-cloud-bw.jpg"],
  // cuisine
  ["italian-lifestyle-locations-portrait-photography14.jpg","cuisine/octopus-menu-blackboard.jpg"],
  ["IMG_7209.jpg",                                          "cuisine/handmade-ravioli.jpg"],
  ["italian-lifestyle-locations-portrait-photography5.jpg", "cuisine/mushroom-sign-forest.jpg"],
  // details
  ["italian-lifestyle-locations-portrait-photography11.jpg","details/ferrari-spider-vintage.jpg"],
  ["IMG_5071.jpg",                                          "details/spoke-wheel-classic-car.jpg"],
  ["italian-lifestyle-locations-portrait-photography22.jpg","details/trulli-rooftops-puglia.jpg"],
  ["IMG_5347.jpg",                                          "details/friends-umbrella-puglia.jpg"],
  ["IMG_5577.jpg",                                          "details/masseria-gate-puglia.jpg"],
  ["IMG_5567.jpg",                                          "details/rusty-garage-sign.jpg"],
  ["IMG_6473.jpg",                                          "details/child-toy-camera.jpg"],
  // about
  ["IMG_4516.jpg",                                          "about/matteo-couple-sea.jpg"],
  // duplicate (extra)
  ["italian-lifestyle-locations-portrait-photography12.jpg","traditions/fisherman-nets-alt.jpg"],
];

// ─── Helpers ───────────────────────────────────────────────────────────────
async function alreadyExists(key) {
  try {
    await client.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }));
    return true;
  } catch {
    return false;
  }
}

async function upload(localFile, r2Key) {
  const localPath = join("./photos", localFile);
  if (!existsSync(localPath)) {
    console.warn(`  ⚠  not found locally: ${localFile}`);
    return "missing";
  }
  if (await alreadyExists(r2Key)) {
    console.log(`  ↩  skip (exists): ${r2Key}`);
    return "skip";
  }
  const body = readFileSync(localPath);
  await client.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: r2Key,
    Body: body,
    ContentType: "image/jpeg",
    CacheControl: "public, max-age=31536000, immutable",
  }));
  console.log(`  ✓  ${r2Key}  (${Math.round(body.length / 1024)} KB)`);
  return "ok";
}

// ─── Main ──────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\nUploading ${MAPPING.length} photos → R2 bucket "${BUCKET}"\n`);
  const counts = { ok: 0, skip: 0, missing: 0, error: 0 };

  for (const [local, r2Key] of MAPPING) {
    try {
      const result = await upload(local, r2Key);
      counts[result]++;
    } catch (e) {
      console.error(`  ✗  error: ${r2Key} — ${e.message}`);
      counts.error++;
    }
  }

  console.log(
    `\nDone — uploaded: ${counts.ok}  skipped: ${counts.skip}` +
    `  missing: ${counts.missing}  errors: ${counts.error}\n`
  );
}

main();
