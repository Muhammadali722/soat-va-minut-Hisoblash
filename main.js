// // Seriya sonini so‘rash
// let count = parseInt(prompt("Nechta seria ko‘rdingiz?"));

// // Agar foydalanuvchi narsa kiritgan bo‘lsa
// if (!isNaN(count) && count > 0) {
//     // Har bir seriya davomiyligini so‘rash
//     let minutesPerEpisode = parseInt(prompt("Har bir seriya necha daqiqa davom etdi?"));

//     if (!isNaN(minutesPerEpisode) && minutesPerEpisode > 0) {
//         // Jami daqiqani hisoblash
//         let totalMinutes = count * minutesPerEpisode;

//         // Kun, soat, daqiqa hisoblash
//         let days = Math.floor(totalMinutes / (24 * 60));
//         let hours = Math.floor((totalMinutes % (24 * 60)) / 60);
//         let minutesLeft = totalMinutes % 60;

//         // Natijani chiqarish
//         alert(`Jami vaqt:\nKun: ${days} kun\nSoat: ${hours} soat\nDaqiqa: ${minutesLeft} daqiqa`);
//     } else {
//         alert("Noto‘g‘ri daqiqa qiymati kiritildi.");
//     }
// } else {
//     alert("Noto‘g‘ri seriya soni kiritildi.");
// }




// ------------------------------------Foydalanuvchidan tilni tanlash



// Tilni tanlash
let language = prompt("Choose language / Tilni tanlang / Выберите язык:\n1. Uzbek\n2. English\n3. Russian");

let messages;

if (language === "1") {
    messages = {
        episodesPrompt: "Nechta seria ko‘rdingiz?",
        minutesPrompt: "Har bir seriya necha daqiqa davom etdi?",
        invalidCount: "Noto‘g‘ri seriya soni kiritildi.",
        invalidMinutes: "Noto‘g‘ri daqiqa qiymati kiritildi.",
        result: (d, h, m) => `Jami vaqt:\nKun: ${d} kun\nSoat: ${h} soat\nDaqiqa: ${m} daqiqa`
    };
} else if (language === "2") {
    messages = {
        episodesPrompt: "How many episodes did you watch?",
        minutesPrompt: "How many minutes did each episode last?",
        invalidCount: "Invalid episode count entered.",
        invalidMinutes: "Invalid minutes value entered.",
        result: (d, h, m) => `Total time:\nDays: ${d}\nHours: ${h}\nMinutes: ${m}`
    };
} else if (language === "3") {
    messages = {
        episodesPrompt: "Сколько серий вы посмотрели?",
        minutesPrompt: "Сколько минут длилась каждая серия?",
        invalidCount: "Неверное количество серий.",
        invalidMinutes: "Неверное значение минут.",
        result: (d, h, m) => `Общее время:\nДней: ${d}\nЧасов: ${h}\nМинут: ${m}`
    };
} else {
    alert("Invalid selection / Noto‘g‘ri tanlov / Неверный выбор.");
}

// Agar til tanlangan bo‘lsa, davom ettirish
if (messages) {
    let count = parseInt(prompt(messages.episodesPrompt));

    if (!isNaN(count) && count > 0) {
        let minutesPerEpisode = parseInt(prompt(messages.minutesPrompt));

        if (!isNaN(minutesPerEpisode) && minutesPerEpisode > 0) {
            let totalMinutes = count * minutesPerEpisode;

            let days = Math.floor(totalMinutes / (24 * 60));
            let hours = Math.floor((totalMinutes % (24 * 60)) / 60);
            let minutesLeft = totalMinutes % 60;

            alert(messages.result(days, hours, minutesLeft));
        } else {
            alert(messages.invalidMinutes);
        }
    } else {
        alert(messages.invalidCount);
    }
}

