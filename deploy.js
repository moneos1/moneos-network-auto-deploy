const fs = require("fs");
const path = require("path");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const supply = ethers.parseUnits("1000000", 18);

  const MO = await ethers.getContractFactory("MO");
  const mo = await MO.deploy(supply);
  await mo.waitForDeployment();

  const addr = await mo.getAddress();
  console.log("MO deployed to:", addr);

  const outDir = path.join(__dirname, "..", "addresses");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  fs.writeFileSync(path.join(outDir, "bscTestnet.json"), JSON.stringify({ address: addr }, null, 2));
  console.log("Saved addresses/bscTestnet.json");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});