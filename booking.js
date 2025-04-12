document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("booking-form").addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let numberGuest = document.getElementById("number-guest").value.trim();
        let meal = document.getElementById("meal").value;

        if (!/^(010|011|012|015)[0-9]{8}$/.test(phone)) {
            alert("يرجى إدخال رقم هاتف صحيح مكون من 11 رقما ويبدا بـ 010 أو 011 أو 012 أو 015.");
            return;
        }

        let newBooking = {
            name: name,
            phone: phone,
            date: date,
            time: time,
            numberGuest: numberGuest,
            meal: meal
        };

        // استرجاع الحجوزات السابقة من localStorage
        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

        // إضافة الحجز الجديد إلى المصفوفة
        bookings.push(newBooking);

        // تخزين المصفوفة الجديدة في localStorage
        localStorage.setItem("bookings", JSON.stringify(bookings));

        let confirmMessage = document.getElementById("confirm-message");
        confirmMessage.innerHTML = `<strong>شكرًا لك ${name}</strong>، تم حجزك بنجاح`;
        confirmMessage.style.color = "green";
        confirmMessage.style.fontWeight = "bold";

        
        setTimeout(() => {
            document.getElementById("booking-form").reset();
            confirmMessage.innerHTML = ""; 
        }, 3000);
    });
});
