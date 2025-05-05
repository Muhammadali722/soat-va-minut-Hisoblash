// Seriya sonini so‘rash
let count = parseInt(prompt("Nechta seria ko‘rdingiz?"));

// Agar foydalanuvchi narsa kiritgan bo‘lsa
if (!isNaN(count) && count > 0) {
    // Har bir seriya davomiyligini so‘rash
    let minutesPerEpisode = parseInt(prompt("Har bir seriya necha daqiqa davom etdi?"));

    if (!isNaN(minutesPerEpisode) && minutesPerEpisode > 0) {
        // Jami daqiqani hisoblash
        let totalMinutes = count * minutesPerEpisode;

        // Kun, soat, daqiqa hisoblash
        let days = Math.floor(totalMinutes / (24 * 60));
        let hours = Math.floor((totalMinutes % (24 * 60)) / 60);
        let minutesLeft = totalMinutes % 60;

        // Natijani chiqarish
        alert(`Jami vaqt:\nKun: ${days} kun\nSoat: ${hours} soat\nDaqiqa: ${minutesLeft} daqiqa`);
    } else {
        alert("Noto‘g‘ri daqiqa qiymati kiritildi.");
    }
} else {
    alert("Noto‘g‘ri seriya soni kiritildi.");
}
