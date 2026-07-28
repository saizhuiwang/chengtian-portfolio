import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const expectedHash =
  "6dee8e1f9b65d49c4ce6b835441d1b6baf0576d8992d502474a175019a8fbb8e";
const sourceDirectory = path.join(
  process.cwd(),
  "source-assets",
  "rednote-assignment",
);
const outputPath = path.join(
  process.cwd(),
  "public",
  "projects",
  "rednote-assignment.pdf",
);

try {
  const existingPdf = await readFile(outputPath);
  const existingHash = createHash("sha256").update(existingPdf).digest("hex");

  if (existingHash === expectedHash) {
    console.log(`Verified original RedNote PDF (${existingPdf.byteLength} bytes).`);
    process.exit(0);
  }
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

const partNames = (await readdir(sourceDirectory))
  .filter((name) => name.startsWith("part-"))
  .sort();
const partBuffers = await Promise.all(
  partNames.map((name) => readFile(path.join(sourceDirectory, name))),
);
const pdf = Buffer.concat(partBuffers);
const actualHash = createHash("sha256").update(pdf).digest("hex");

if (actualHash !== expectedHash) {
  throw new Error(
    `RedNote PDF checksum mismatch: expected ${expectedHash}, received ${actualHash}`,
  );
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, pdf);

console.log(`Restored original RedNote PDF (${pdf.byteLength} bytes).`);
