document.getElementById('calculateAge').addEventListener('click', () => {
    const years = document.getElementById('year').value;
    const Year = new Date().getFullYear();
    if (!isNaN(years) && years <= Year) {
        const age = Year - years;
        document.getElementById('result').textContent = `Ваш возраст: ${age} лет`;
    } else {
        document.getElementById('result').textContent = 'Ошибка: введите корректный год рождения';
    }
});
