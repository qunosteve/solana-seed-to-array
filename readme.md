# seed-to-array 📥🔑

*A pocket‑size utility that converts a 12‑word Solana **mnemonic** into the JSON private‑key array expected by `@solana/web3.js`, NoMo’ FOMO, and most CLI tools.*

---

## ✨ What it does

1. **Reads** your 12‑word **BIP‑39** seed phrase (mnemonic).
2. **Derives** the default Solana key at path `m/44'/501'/0'/0'` (same as Phantom & Sollet).
3. **Prints** the full **secret‑key array**—ready to paste into your `.env`.

That’s it. **No internet calls, no uploads, no telemetry.** Everything happens locally, and you can audit the 25 lines of source to prove it.

---

## 🔧 Quick Start

```bash
# 1 · Download
git clone https://github.com/qunosteve/solana-seed-to-array
cd seed-to-array

# 2 · Install deps
npm install    # installs bip39, ed25519-hd-key, @solana/web3.js, ts‑node

# 3 · Insert your mnemonic
#    macOS / Linux:
nano index.ts        # opens Nano – replace the placeholder with *your* 12‑word phrase
#    Windows PowerShell / CMD:
notepad index.ts     # or use VS Code →  code index.ts

# 4 · Run it
npx ts-node index.ts
```

### Example output

```
🔑 Private Key Array (copy into .env):
[106,219,42, … ,99,14]
```

Paste that array (including the brackets) into the `PRIVATE_KEY=` line of your NoMo’ FOMO `.env`.

---

## 🕵️‍♀️ Why it’s safe

* **Zero network activity** – the script never imports `fetch`, `axios`, or any networking library.
* **Open source** – less than 30 lines; read it in under a minute.
* **Single‑purpose** – does one job and exits.

*Pro tip:* run with `--inspect` or offline to convince yourself.

---

## 🤝 Contributing

PRs are welcome—whether it’s supporting alternate derivation paths, adding CLI flags, or improving docs.

---

## 📜 License – ISC

```
ISC License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

---

Made with ☕. Fork it, tweak it, ship it.
