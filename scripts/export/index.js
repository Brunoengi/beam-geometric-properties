export function exportDataToTxt () {
  const results = getFromLocalStorage()
  const jsonString = JSON.stringify(removeUnderscoreFromKeys(JSON.parse(results)), null, 2);
  const blob = new Blob([jsonString], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "data.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function removeUnderscoreFromKeys (obj) {
  const newObj = {};

  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          // Remove the first caracter if _
          const newKey = key.startsWith('_') ? key.slice(1) : key;
          newObj[newKey] = obj[key];
      }
  }

  return newObj;
}

export function getFromLocalStorage (key = 'results') {
  return localStorage.getItem(key)
}