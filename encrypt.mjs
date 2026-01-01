// encrypt.mjs
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { execSync } from 'child_process';

const BUILD_DIR = 'public'; // Quartz usually outputs here
const PASSWORD = process.env.PAGE_PASSWORD; // Set this in your environment

if (!PASSWORD) {
  console.error("❌ No password provided. Set PAGE_PASSWORD environment variable.");
  process.exit(1);
}

async function encryptPages() {
  console.log(`🔒 Scanning ${BUILD_DIR} for pages to encrypt...`);

  // Find all HTML files
  const files = await glob(`${BUILD_DIR}/**/*.html`);

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');

    // Check for "is-encrypted" meta flag
    if (content.includes('meta name="is-encrypted" content="true"')) {
      console.log(`   Encrypting: ${file}`);

      try {
        // Run staticrypt on the file
        // -d removes the .html extension from the directory output if needed,
        // but here we just overwrite the file in place using standard pipes or temp files.
        // Staticrypt doesn't support in-place overwrite easily via CLI without a temp dir,
        // so output to a temp file and move it back.

        const tempFile = file + '.temp';

        // This command encrypts 'file' and outputs to 'tempFile'
        // Add a salt so the output is deterministic if you want (optional)
        execSync(`npx staticrypt "${file}" -p "${PASSWORD}" -o "${tempFile}" --short`, { stdio: 'inherit' });

        // Replace original file with encrypted version
        fs.renameSync(tempFile, file);

      } catch (error) {
        console.error(`   ❌ Failed to encrypt ${file}:`, error);
        process.exit(1);
      }
    }
  }
  console.log("✅ Encryption complete.");
}

encryptPages();
