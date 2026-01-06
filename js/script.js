document.getElementById("hesapla").addEventListener("click", () => {
  // Hesaplama kodları
  const toplamaInput = document.getElementById("toplama");
  const toplama = parseInt(toplamaInput.value);
  const ugramaInput = document.getElementById("ugrama");
  const ugrama = parseInt(ugramaInput.value);

  if (isNaN(toplama) && isNaN(ugrama)) {
    alert("Lütfen toplama ve uğrama alanlarını doldurunuz.");
    
    return;
  }

  if (isNaN(toplama)) {
    alert("Lütfen toplama alanını doldurunuz.");
    const randomNumber = Math.floor(Math.random() * 2000) + 1;
    toplamaInput.value = randomNumber;
  }

  if (isNaN(ugrama)) {
    alert("Lütfen uğrama alanını doldurunuz.");
    const randomNumber = Math.floor(Math.random() * 30) + 1;
    ugramaInput.value = randomNumber;
  }

  let toplamUcret = 0;

  if (toplama <= 50) {
    toplamUcret = toplama * 14;
  } else if (toplama <= 150) {
    toplamUcret = 50 * 14 + (toplama - 50) * 9.70;
  } else if (toplama <= 500) {
    toplamUcret = 50 * 14 + 100 * 9.70 + (toplama - 150) * 3;
  } else {
    toplamUcret = 50 * 14 + 100 * 9.70 + 350 * 3.90 + (toplama - 500) * 2.25;
  }

  let ugramaUcret = 0;

  if (ugrama <= 5) {
    ugramaUcret = ugrama * 97.5;
  } else if (ugrama <= 10) {
    ugramaUcret = 5 * 97.5 + (ugrama - 5) * 48;
  } else {
    ugramaUcret = 5 * 97.5 + 5 * 48 + (ugrama - 10) * 26.75;
  }

  const toplam = toplamUcret + ugramaUcret;
  const kdvDahil = toplam * 1.2;
  const kdvHesap = kdvDahil - toplam;

  document.getElementById(
    "kdv-haric-sonuc"
  ).textContent = `KDV Hariç: ${toplam.toFixed(2)} TL`;
  document.getElementById(
    "kdv-dahil-sonuc"
  ).textContent = `KDV Dahil: ${kdvDahil.toFixed(2)} TL`;
  document.getElementById(
    "kdv-fiyat"
  ).textContent = `KDV Fiyat: ${kdvHesap.toFixed(2)} TL`;
  document.getElementById(
    "ugrama-fiyat"
  ).textContent = `Ugrama Fiyat: ${ugramaUcret.toFixed(2)} TL`;
  document.getElementById(
    "toplama-fiyat"
  ).textContent = `Toplama Fiyat: ${toplamUcret.toFixed(2)}`;
});

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("toplama").value = "";
  document.getElementById("ugrama").value = "";
  document.getElementById("ugrama-fiyat").textContent = "0";
  document.getElementById("toplama-fiyat").textContent = "0";
  document.getElementById("kdv-haric-sonuc").textContent = "0";
  document.getElementById("kdv-dahil-sonuc").textContent = "0";
  document.getElementById("kdv-fiyat").textContent = "0";
});
