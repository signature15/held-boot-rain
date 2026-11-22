import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// This still life begins with rainwater resting in a boot by the door.
// The boot is ordinary, patient, and still carrying the weather indoors.
// Its folded tongue makes a small sheltered basin for the rain.
// A leaf arrives on that surface and gives the scene one gentle detail.
// It turns once, slowly, as if finding the quietest place to settle.
// Nothing needs to be solved before the image can be appreciated.
// The held water gives the reader a sense of pause and containment.
// The leaf's final rest offers a soft ending without asking for attention.
// Together, these details let the reader breathe alongside the scene's small motion.
// Its quiet scale makes room for attention to soften and remain there.

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
const entryText =
  "Rainwater gathers in the boot by the door, held below the folded tongue. A small leaf turns once on its surface, then comes to rest.";

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, "entry.txt"), entryText, "utf8");
