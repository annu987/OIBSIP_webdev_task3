function showPopup(message, type = 'success') {
  const popup = document.getElementById('popup');
  popup.textContent = message;
  popup.className = `popup show ${type}`;

  setTimeout(() => {
    popup.className = 'popup'; // Hide after 3s
  }, 3000);
}

function convertTemp() {
  const input = document.getElementById('tempInput').value.trim();
  const unit = document.getElementById('unitSelect').value;
  const resultDiv = document.getElementById('result');

  if (input === '') {
    showPopup('⚠️ Please enter a temperature!', 'warning');
    return;
  }

  if (isNaN(input)) {
    showPopup('❌ Invalid number entered!', 'error');
    return;
  }

  const temp = parseFloat(input);
  let c, f, k;

  switch (unit) {
    case 'C':
      f = (temp * 9 / 5) + 32;
      k = temp + 273.15;
      resultDiv.innerHTML = `${temp}°C = ${f.toFixed(2)}°F<br>${temp}°C = ${k.toFixed(2)}K`;
      break;

    case 'F':
      c = (temp - 32) * 5 / 9;
      k = c + 273.15;
      resultDiv.innerHTML = `${temp}°F = ${c.toFixed(2)}°C<br>${temp}°F = ${k.toFixed(2)}K`;
      break;

    case 'K':
      c = temp - 273.15;
      f = (c * 9 / 5) + 32;
      resultDiv.innerHTML = `${temp}K = ${c.toFixed(2)}°C<br>${temp}K = ${f.toFixed(2)}°F`;
      break;

    default:
      showPopup('❌ Invalid unit!', 'error');
      return;
  }

  showPopup('✅ Conversion successful!', 'success');
}
