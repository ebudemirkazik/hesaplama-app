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
    return;
  }

  if (isNaN(ugrama)) {
    alert("Lütfen uğrama alanını doldurunuz.");
    return;
  }

  let toplamUcret = 0;

  if (toplama <= 50) {
    toplamUcret = toplama * 10.75;
  } else if (toplama <= 150) {
    toplamUcret = 50 * 10.75 + (toplama - 50) * 7.5;
  } else if (toplama <= 500) {
    toplamUcret = 50 * 10.75 + 100 * 7.5 + (toplama - 150) * 3;
  } else {
    toplamUcret = 50 * 10.75 + 100 * 7.5 + 350 * 3 + (toplama - 500) * 1.7;
  }

  let ugramaUcret = 0;

  if (ugrama <= 5) {
    ugramaUcret = ugrama * 75;
  } else if (ugrama <= 10) {
    ugramaUcret = 5 * 75 + (ugrama - 5) * 37;
  } else {
    ugramaUcret = 5 * 75 + 5 * 37 + (ugrama - 10) * 20.5;
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
