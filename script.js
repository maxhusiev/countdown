document.addEventListener('DOMContentLoaded', () => {
    // Set the target date and time (Jul 12, 2024 14:35:00)
    const targetDate = new Date('Jul 12, 2024 14:35:00').getTime() / 1000;

    // Initialize FlipDown with the target date
    new FlipDown(targetDate)
        .start()
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });
});
