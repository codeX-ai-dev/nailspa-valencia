const r = await fetch('https://nail-salon-redesign--eldelgas05.replit.app/');
const t = await r.text();
const lines = t.split('\n');
for (const l of lines) {
  if (/font|googleapis/i.test(l)) {
    console.log(l.trim());
  }
}
